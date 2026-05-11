import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  hasPaymentAccess = false;
  isCheckingPermission = true;
  activeTppAppId: number | null = null;

  constructor(
    private accountService: AccountService,
    private paymentService: PaymentService,
    private authService: AuthService,
    private consentService: ConsentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();

    // Check consent permissions first
    this.consentService.getConsentsByUser(userId).subscribe({
      next: (consents) => {
        const activeConsents = (consents || []).filter(c => c.status === 'ACTIVE');
        const paymentConsent = activeConsents.find(c => this.hasScope(c, 'payments:write'));
        this.hasPaymentAccess = !!paymentConsent;
        if (paymentConsent) {
          this.activeTppAppId = paymentConsent.tppApp?.tppAppId || null;
        }
        this.isCheckingPermission = false;

        if (this.hasPaymentAccess) {
          this.accountService.getAccounts(userId).subscribe({
            next: (accs) => { this.accounts = accs || []; },
            error: () => { this.errorMessage = 'Unable to load accounts.'; }
          });
        }
      },
      error: () => {
        this.isCheckingPermission = false;
        this.errorMessage = 'Unable to check permissions.';
      }
    });
  }

  private hasScope(consent: Consent, scope: string): boolean {
    try {
      const scopes: string[] = JSON.parse(consent.scopeJSON);
      return scopes.includes(scope);
    } catch { return false; }
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
      tppApp: { tppAppId: this.activeTppAppId || 1 } as any,
      debtorAccountRef: this.selectedAccountId.toString(),
      creditorAccountRef: this.payeeAccount,
      amount: this.amount,
      currency: 'GBP',
      status: 'EXECUTED'
    }).subscribe({
      next: () => {
        this.successMessage = 'Payment executed successfully!';
        setTimeout(() => this.router.navigate(['/customer/accounts']), 1500);
      },
      error: () => {
        this.errorMessage = 'Failed to execute payment.';
        this.isSubmitting = false;
      }
    });
  }

  cancel(): void { this.router.navigate(['/customer/accounts']); }
}

