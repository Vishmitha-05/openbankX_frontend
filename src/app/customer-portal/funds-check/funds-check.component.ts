import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../core/services/account.service';
import { AuthService } from '../../core/services/auth.service';
import { ConsentService } from '../../core/services/consent.service';
import { AccountRef, Consent } from '../../core/models/models';

@Component({
  selector: 'app-funds-check',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './funds-check.component.html',
  styleUrl: './funds-check.component.css'
})
export class FundsCheckComponent implements OnInit {

  accounts: AccountRef[] = [];
  selectedAccount: AccountRef | null = null;
  amount: number | null = null;

  appName = '';
  tppAppId!: number;

  isCheckingPermission = true;
  hasFundsAccess = false;

  errorMessage = '';

  result:
    | {
        sufficient: boolean;
        balance: number;
        shortage?: number;
      }
    | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private authService: AuthService,
    private consentService: ConsentService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    this.tppAppId = Number(this.route.snapshot.queryParamMap.get('tppAppId'));

    // ❌ Block direct access
    if (!this.tppAppId) {
      this.errorMessage = 'Funds Check must be accessed via a verified app.';
      this.isCheckingPermission = false;
      return;
    }

    this.consentService.getConsentsByUser(userId).subscribe({
      next: (consents: Consent[]) => {
        const consent = consents.find(
          c =>
            c.status === 'ACTIVE' &&
            c.tppApp?.tppAppId === this.tppAppId &&
            this.hasScope(c, 'funds-confirmations')
        );

        if (!consent) {
          this.errorMessage =
            'You do not have permission to access Funds Check for this app.';
          this.isCheckingPermission = false;
          return;
        }

        // ✅ Valid verified app
        this.appName = consent.tppApp.appName;
        this.hasFundsAccess = true;
        this.isCheckingPermission = false;

        this.accountService.getAccounts(userId).subscribe({
          next: accs => (this.accounts = accs || []),
          error: () =>
            (this.errorMessage = 'Unable to load accounts for funds check.')
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

  goToBrowseApps(): void {
    this.router.navigate(['/customer/apps']);
  }

  checkFunds(): void {
    this.result = null;
    this.errorMessage = '';

    if (!this.selectedAccount || !this.amount || this.amount <= 0) {
      this.errorMessage = 'Please select an account and enter a valid amount.';
      return;
    }

    const balance = this.selectedAccount.balance;

    if (this.amount <= balance) {
      this.result = {
        sufficient: true,
        balance
      };
    } else {
      this.result = {
        sufficient: false,
        balance,
        shortage: this.amount - balance
      };
    }
  }
}