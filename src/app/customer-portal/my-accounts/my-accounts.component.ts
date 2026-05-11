import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../core/services/account.service';
import { AuthService } from '../../core/services/auth.service';
import { ConsentService } from '../../core/services/consent.service';
import { AccountRef, TransactionRef, Consent } from '../../core/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-accounts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-wallet"></i> My Accounts</h1>
        <p class="page-subtitle">View your bank accounts and transaction history</p></div>
      </div>

      <!-- NO PERMISSION -->
      <div class="glass-card" *ngIf="!isLoading && !hasAccountAccess" style="text-align:center; padding:40px;">
        <i class="fas fa-lock" style="font-size:2.5rem; color:#f59e0b; margin-bottom:16px;"></i>
        <h3>No Active Consent</h3>
        <p class="text-muted mt-8">You don't have an active consent with <strong>accounts:read</strong> permission.</p>
        <p class="text-muted">Grant access to a TPP app first.</p>
        <button class="btn btn-primary mt-16" (click)="goToBrowseApps()">
          <i class="fas fa-store"></i> Browse Apps
        </button>
      </div>

      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div><span>Loading accounts...</span></div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div *ngIf="!isLoading && hasAccountAccess">
        <div class="empty-state" *ngIf="accounts.length === 0 && !errorMessage">
          <i class="fas fa-wallet"></i><p>No accounts found</p>
        </div>

        <div class="grid-2 mb-20">
          <div *ngFor="let acc of accounts" class="glass-card account-card"
               (click)="loadTransactions(acc)"
               [ngClass]="{ 'selected-account': selectedAccount?.accountId === acc.accountId }">
            <div class="flex items-center justify-between">
              <div class="acc-icon" [ngStyle]="{ 'background': acc.type === 'SAVINGS' ? 'linear-gradient(135deg,#10b981,#059669)' : 'linear-gradient(135deg,#667eea,#764ba2)' }">
                <i [ngClass]="acc.type === 'SAVINGS' ? 'fas fa-piggy-bank' : 'fas fa-credit-card'"></i>
              </div>
              <div class="text-right">
                <span class="badge" [ngClass]="'badge-' + acc.status.toLowerCase()">{{ acc.status }}</span>
              </div>
            </div>
            <h4 class="mt-12 font-mono">{{ acc.accountNumberMasked }}</h4>
            <div class="flex items-center justify-between mt-8">
              <span class="text-sm text-muted">{{ acc.type }}</span>
              <span class="badge badge-info">{{ acc.currency }}</span>
            </div>
          </div>
        </div>

        <!-- Transactions -->
        <div class="glass-card" *ngIf="selectedAccount">
          <div class="flex justify-between items-center mb-16">
            <h3>Transactions — {{ selectedAccount.accountNumberMasked }}</h3>
            <button class="btn btn-primary btn-sm" (click)="initiatePayment()" *ngIf="hasPaymentAccess">
              <i class="fas fa-paper-plane"></i> Initiate Payment
            </button>
          </div>
          <div class="loading-container" *ngIf="txnLoading"><div class="spinner"></div></div>
          <div class="empty-state" *ngIf="!txnLoading && transactions.length === 0">
            <i class="fas fa-receipt"></i><p>No transactions found</p>
          </div>
          <table class="data-table" *ngIf="!txnLoading && transactions.length > 0">
            <thead><tr><th>Date</th><th>Description</th><th>Type</th><th class="text-right">Amount</th></tr></thead>
            <tbody>
              <tr *ngFor="let txn of transactions">
                <td class="text-sm">{{ txn.txnDate | date:'mediumDate' }}</td>
                <td>{{ txn.narrative }}</td>
                <td><span class="badge" [ngClass]="txn.txnType === 'CREDIT' ? 'badge-active' : 'badge-revoked'">{{ txn.txnType }}</span></td>
                <td class="text-right font-mono" [ngStyle]="{ 'color': txn.txnType === 'CREDIT' ? '#10b981' : '#ef4444' }">
                  {{ txn.txnType === 'CREDIT' ? '+' : '-' }}{{ txn.amount | number:'1.2-2' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styleUrl: './my-accounts.component.css'
})
export class MyAccountsComponent implements OnInit {
  accounts: AccountRef[] = [];
  transactions: TransactionRef[] = [];
  selectedAccount: AccountRef | null = null;
  isLoading = true;
  txnLoading = false;
  errorMessage = '';
  hasAccountAccess = false;
  hasPaymentAccess = false;

  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private consentService: ConsentService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();

    // First check consent permissions
    this.consentService.getConsentsByUser(userId).subscribe({
      next: (consents) => {
        const activeConsents = (consents || []).filter(c => c.status === 'ACTIVE');
        this.hasAccountAccess = activeConsents.some(c => this.hasScope(c, 'accounts:read'));
        this.hasPaymentAccess = activeConsents.some(c => this.hasScope(c, 'payments:write'));

        if (this.hasAccountAccess) {
          this.loadAccounts(userId);
        } else {
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Unable to check consent permissions.';
        this.cdr.detectChanges();
      }
    });
  }

  private hasScope(consent: Consent, scope: string): boolean {
    try {
      const scopes: string[] = JSON.parse(consent.scopeJSON);
      return scopes.includes(scope);
    } catch { return false; }
  }

  private loadAccounts(userId: number): void {
    this.accountService.getAccounts(userId).subscribe({
      next: (d) => {
        this.accounts = d || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Unable to load accounts.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  initiatePayment(): void {
    this.router.navigate(['/customer/payment-initiate']);
  }

  goToBrowseApps(): void {
    this.router.navigate(['/customer/apps']);
  }

  loadTransactions(acc: AccountRef): void {
    this.selectedAccount = acc;
    this.txnLoading = true;
    this.accountService.getTransactions(acc.accountId).subscribe({
      next: (d) => {
        this.transactions = d || [];
        this.txnLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.transactions = [];
        this.txnLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
}

