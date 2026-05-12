import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../core/services/account.service';
import { AuthService } from '../../core/services/auth.service';
import { ConsentService } from '../../core/services/consent.service';
import { AccountRef, TransactionRef, Consent } from '../../core/models/models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-accounts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-content">

      <div class="page-header">
        <div>
          <h1>
            <i class="fas fa-wallet"></i> My Accounts
          </h1>
          <p class="page-subtitle" *ngIf="tppAppName">
            Shared with <strong>{{ tppAppName }}</strong>
          </p>
        </div>
      </div>

      <!-- NO CONSENT -->
      <div class="glass-card"
           *ngIf="!isLoading && !hasAccountAccess"
           style="text-align:center; padding:40px;">
        <i class="fas fa-lock"
           style="font-size:2.5rem; color:#f59e0b;"></i>
        <h3>No Active Consent</h3>
        <p class="text-muted">
          Grant access to a TPP app first.
        </p>
        <button class="btn btn-primary mt-12"
                (click)="goToBrowseApps()">
          Browse Apps
        </button>
      </div>

      <!-- LOADING -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading accounts...</span>
      </div>

      <!-- ERROR -->
      <div class="alert alert-error" *ngIf="errorMessage">
        {{ errorMessage }}
      </div>

      <!-- ACCOUNTS -->
      <div *ngIf="!isLoading && hasAccountAccess">
        <div class="grid-2 mb-20">
          <div *ngFor="let acc of accounts"
               class="glass-card account-card"
               (click)="loadTransactions(acc)">
            <h4 class="font-mono">{{ acc.accountNumberMasked }}</h4>
            <div class="mt-4 text-sm text-muted">
              {{ acc.type }} • {{ acc.currency }}
            </div>
            <div class="mt-8 font-mono">
              <strong>Balance:</strong>
              {{ acc.currency }} {{ acc.balance | number:'1.2-2' }}
            </div>
          </div>
        </div>

        <!-- TRANSACTIONS -->
        <div class="glass-card" *ngIf="selectedAccount">
          <h3>
            Transactions — {{ selectedAccount.accountNumberMasked }}
          </h3>

          <div *ngIf="txnLoading" class="loading-container">
            <div class="spinner"></div>
          </div>

          <table class="data-table"
                 *ngIf="!txnLoading && transactions.length > 0">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Type</th>
                <th class="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let txn of transactions">
                <td>{{ txn.txnDate | date:'mediumDate' }}</td>
                <td>{{ txn.narrative }}</td>
                <td>{{ txn.txnType }}</td>
                <td class="text-right">
                  {{ txn.amount | number:'1.2-2' }}
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

  tppAppName = '';
  tppAppId!: number;

  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private consentService: ConsentService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    this.tppAppId = Number(this.route.snapshot.queryParamMap.get('tppAppId'));

    this.consentService.getConsentsByUser(userId).subscribe({
      next: (consents: Consent[]) => {

        const consent = consents.find(
          c => c.status === 'ACTIVE' &&
               c.tppApp?.tppAppId === this.tppAppId
        );

        if (!consent) {
          this.isLoading = false;
          return;
        }

        this.tppAppName = consent.tppApp.appName;
        this.hasAccountAccess = this.hasScope(consent, 'accounts');
        this.hasPaymentAccess = this.hasScope(consent, 'payments');

        if (this.hasAccountAccess) {
          this.loadAccounts(userId);
        } else {
          this.isLoading = false;
        }
      },
      error: () => {
        this.errorMessage = 'Unable to check consent permissions.';
        this.isLoading = false;
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

  private loadAccounts(userId: number): void {
    this.accountService.getAccounts(userId).subscribe({
      next: accs => {
        this.accounts = accs || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Unable to load accounts.';
        this.isLoading = false;
      }
    });
  }

  loadTransactions(acc: AccountRef): void {
    this.selectedAccount = acc;
    this.txnLoading = true;

    this.accountService.getTransactions(acc.accountId).subscribe({
      next: txns => {
        this.transactions = txns || [];
        this.txnLoading = false;
      },
      error: () => {
        this.txnLoading = false;
      }
    });
  }

  goToBrowseApps(): void {
    this.router.navigate(['/customer/apps']);
  }
}