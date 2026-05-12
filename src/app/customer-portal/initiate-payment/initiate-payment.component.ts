import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../core/services/account.service';
import { PaymentService } from '../../core/services/payment.service';
import { AuthService } from '../../core/services/auth.service';
import { ConsentService } from '../../core/services/consent.service';
import { AccountRef, Consent } from '../../core/models/models';

@Component({
  selector: 'app-initiate-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './initiate-payment.component.html',
  styleUrl: './initiate-payment.component.css'
})
export class InitiatePaymentComponent implements OnInit {

  accounts: AccountRef[] = [];

  selectedAccountId: number | null = null;
  payeeAccount = '';
  amount: number | null = null;
  narrative = '';

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  isCheckingPermission = true;
  hasPaymentAccess = false;

  tppAppId!: number;
  appName = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private paymentService: PaymentService,
    private authService: AuthService,
    private consentService: ConsentService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    this.tppAppId = Number(this.route.snapshot.queryParamMap.get('tppAppId'));

    // ❌ Block direct access
    if (!this.tppAppId) {
      this.errorMessage = 'Payment initiation must be started via a verified app.';
      this.isCheckingPermission = false;
      return;
    }

    this.consentService.getConsentsByUser(userId).subscribe({
      next: (consents: Consent[]) => {

        const consent = consents.find(
          c =>
            c.status === 'ACTIVE' &&
            c.tppApp?.tppAppId === this.tppAppId &&
            this.hasScope(c, 'payments')
        );

        if (!consent) {
          this.errorMessage =
            'You do not have permission to initiate payments for this app.';
          this.isCheckingPermission = false;
          return;
        }

        // ✅ Verified app and valid consent
        this.appName = consent.tppApp.appName;
        this.hasPaymentAccess = true;
        this.isCheckingPermission = false;

        this.accountService.getAccounts(userId).subscribe({
          next: accs => this.accounts = accs || [],
          error: () =>
            this.errorMessage = 'Unable to load accounts.'
        });
      },
      error: () => {
        this.errorMessage = 'Unable to validate consent.';
        this.isCheckingPermission = false;
      }
    });
  }

  private hasScope(consent: Consent, scope: string): boolean {
    try {
      const scopes: string[] = JSON.parse(consent.scopeJSON);
      return scopes.includes(scope);
    } catch {
      return false;
    }
  }

  submitPayment(): void {
  this.errorMessage = '';
  this.successMessage = '';

  if (!this.selectedAccountId || !this.payeeAccount || !this.amount || this.amount <= 0) {
    this.errorMessage = 'Please fill all required fields correctly.';
    return;
  }

  this.isSubmitting = true;

  this.paymentService.initiatePayment({
    tppAppId: this.tppAppId,
    debtorAccountRef: this.selectedAccountId.toString(),
    creditorAccountRef: this.payeeAccount,
    amount: this.amount,
    currency: 'GBP'
  }).subscribe({
    next: (payment) => {
      // ✅ Execute payment
      this.paymentService.executePayment(payment.paymentId).subscribe({
        next: () => {
          this.successMessage = 'Payment executed successfully.';
          this.isSubmitting = false;
          setTimeout(() => {
            this.router.navigate(['/customer/accounts'], {
              queryParams: { tppAppId: this.tppAppId }
            });
          }, 1500);
        },
        error: () => {
          this.errorMessage = 'Payment execution failed.';
          this.isSubmitting = false;
        }
      });
    },
    error: () => {
      this.errorMessage = 'Payment initiation failed.';
      this.isSubmitting = false;
    }
  });
}}