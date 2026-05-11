import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../core/services/account.service';
import { FundsService } from '../../core/services/funds.service';
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
  selectedAccountId: number | null = null;
  amount: number | null = null;
  currency = 'GBP';
  isChecking = false;
  result: { status: string; message: string; icon: string; color: string } | null = null;
  errorMessage = '';
  hasFundsAccess = false;
  isCheckingPermission = true;

  constructor(
    private accountService: AccountService,
    private fundsService: FundsService,
    private authService: AuthService,
    private consentService: ConsentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();

    this.consentService.getConsentsByUser(userId).subscribe({
      next: (consents) => {
        const activeConsents = (consents || []).filter(c => c.status === 'ACTIVE');
        this.hasFundsAccess = activeConsents.some(c => this.hasScope(c, 'funds:read'));
        this.isCheckingPermission = false;

        if (this.hasFundsAccess) {
          this.accountService.getAccounts(userId).subscribe({
            next: (d) => { this.accounts = d || []; },
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

  goToBrowseApps(): void {
    this.router.navigate(['/customer/apps']);
  }

  checkFunds(): void {
    this.result = null;
    this.errorMessage = '';
    if (!this.selectedAccountId || !this.amount || this.amount <= 0) return;
    this.isChecking = true;
    this.fundsService.checkFunds({
      accountRef: { accountId: this.selectedAccountId },
      amount: this.amount,
      currency: this.currency
    }).subscribe({
      next: (res) => {
        this.result = res.result === 'SUFFICIENT'
          ? { status: 'SUFFICIENT', message: 'Funds are available.', icon: 'fas fa-check-circle', color: '#10b981' }
          : { status: 'INSUFFICIENT', message: 'Insufficient funds.', icon: 'fas fa-times-circle', color: '#ef4444' };
        this.isChecking = false;
      },
      error: () => {
        this.errorMessage = 'Funds check failed. Please ensure backend is running.';
        this.isChecking = false;
      }
    });
  }
}

