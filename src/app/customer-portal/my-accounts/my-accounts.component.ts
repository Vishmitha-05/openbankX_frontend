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
          <h1><i class="fas fa-wallet"></i> My Accounts</h1>
          <p class="page-subtitle" *ngIf="tppAppName">
            Shared with <strong>{{ tppAppName }}</strong>
          </p>
          <p class="page-subtitle" *ngIf="!tppAppName">
            Open this page through an app that has the <em>View accounts</em> permission
          </p>
        </div>
      </div>

      <!-- LOADING -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading...</span>
      </div>

      <!-- ERROR -->
      <div class="alert alert-error" *ngIf="errorMessage">
        {{ errorMessage }}
      </div>

      <!-- ============================================================
           DIRECT NAVIGATION (no tppAppId in URL)
           Show only the app picker / guidance — never the raw accounts.
           ============================================================ -->
      <div *ngIf="!isLoading && !tppAppId && appsWithAccountAccess.length > 0"
           class="glass-card">
        <h3 class="mb-12"><i class="fas fa-hand-pointer"></i> Open through an app</h3>
        <p class="text-muted mb-16">
          You've granted account access to {{ appsWithAccountAccess.length }}
          app{{ appsWithAccountAccess.length === 1 ? '' : 's' }}.
          Pick one to view your accounts as that app would.
        </p>
        <div class="app-picker">
          <button *ngFor="let c of appsWithAccountAccess"
                  class="app-picker-item"
                  (click)="openThroughApp(c)">
            <div class="app-picker-icon"><i class="fas fa-cube"></i></div>
            <div class="app-picker-meta">
              <strong>{{ c.tppApp?.appName }}</strong>
              <span class="text-sm text-muted">{{ c.tppApp?.tpp?.legalName || '' }}</span>
            </div>
            <i class="fas fa-chevron-right text-muted"></i>
          </button>
        </div>
      </div>

      <!-- NO ACTIVE CONSENT AT ALL -->
      <div *ngIf="!isLoading && !tppAppId && appsWithAccountAccess.length === 0 && noConsentsAtAll"
           class="glass-card no-consent-card">
        <i class="fas fa-lock no-consent-icon"></i>
        <h3>No active consents yet</h3>
        <p class="text-muted">
          You haven't granted any app access to your accounts. Go to <strong>My Apps</strong> to get started.
        </p>
        <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
          <i class="fas fa-store"></i> Open My Apps
        </button>
      </div>

      <!-- HAS CONSENTS BUT NONE WITH 'accounts' SCOPE -->
      <div *ngIf="!isLoading && !tppAppId && appsWithAccountAccess.length === 0 && !noConsentsAtAll"
           class="glass-card no-consent-card">
        <i class="fas fa-lock no-consent-icon"></i>
        <h3>No app has account access yet</h3>
        <p class="text-muted">
          None of your active consents include the <em>View accounts</em> permission.
          Grant that permission to an app from <strong>My Apps</strong> first.
        </p>
        <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
          <i class="fas fa-store"></i> Open My Apps
        </button>
      </div>

      <!-- ============================================================
           OPENED VIA AN APP, BUT THAT APP HAS NO accounts SCOPE
           ============================================================ -->
      <div *ngIf="!isLoading && tppAppId && !hasAccountAccess"
           class="glass-card no-consent-card">
        <i class="fas fa-lock no-consent-icon"></i>
        <h3>This app doesn't have account access</h3>
        <p class="text-muted">
          Your consent for <strong>{{ tppAppName || 'this app' }}</strong> doesn't include the
          <em>View accounts</em> permission.
        </p>
        <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
          <i class="fas fa-store"></i> Open another app
        </button>
      </div>

      <!-- ============================================================
           ACCOUNTS — only when tppAppId is set AND consent has 'accounts'
           ============================================================ -->
      <div *ngIf="!isLoading && tppAppId && hasAccountAccess">
        <div class="grid-2 mb-20">
          <div *ngFor="let acc of accounts"
               class="glass-card account-card"
               [class.selected-account]="selectedAccount?.accountId === acc.accountId"
               (click)="loadTransactions(acc)">
            <div class="flex items-center justify-between">
              <h4 class="font-mono">{{ acc.accountNumberMasked }}</h4>
              <span class="badge"
                    [ngClass]="acc.status === 'ACTIVE' ? 'badge-active' : 'badge-locked'">
                {{ acc.status }}
              </span>
            </div>
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
          <div class="flex items-center justify-between mb-12">
            <h3>
              <i class="fas fa-receipt"></i>
              Transaction history — {{ selectedAccount.accountNumberMasked }}
            </h3>
            <button class="btn btn-light btn-sm" (click)="refreshTransactions()"
                    [disabled]="txnLoading">
              <i class="fas fa-sync" [class.fa-spin]="txnLoading"></i> Refresh
            </button>
          </div>

          <div *ngIf="txnLoading" class="loading-container">
            <div class="spinner"></div>
          </div>

          <table class="data-table" *ngIf="!txnLoading && transactions.length > 0">
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
                <td class="text-sm">{{ txn.txnDate | date:'medium' }}</td>
                <td>{{ txn.narrative || '—' }}</td>
                <td>
                  <span class="badge"
                        [ngClass]="txn.txnType === 'CREDIT' ? 'badge-active' : 'badge-revoked'">
                    {{ txn.txnType }}
                  </span>
                </td>
                <td class="text-right font-mono"
                    [class.text-success]="txn.txnType === 'CREDIT'"
                    [class.text-error]="txn.txnType === 'DEBIT'">
                  {{ txn.txnType === 'DEBIT' ? '-' : '+' }}
                  {{ selectedAccount.currency }} {{ txn.amount | number:'1.2-2' }}
                </td>
              </tr>
            </tbody>
          </table>

          <div class="empty-state" *ngIf="!txnLoading && transactions.length === 0">
            <i class="fas fa-receipt"></i>
            <p>No transactions on this account yet.</p>
          </div>
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
  tppAppName = '';
  tppAppId: number | null = null;

  /** Apps the user has consented to that include 'accounts'. */
  appsWithAccountAccess: Consent[] = [];
  /** True only if the user has no ACTIVE consents at all. */
  noConsentsAtAll = false;

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
    const qpId = Number(this.route.snapshot.queryParamMap.get('tppAppId'));
    this.tppAppId = qpId > 0 ? qpId : null;

    this.consentService.getConsentsByUser(userId).subscribe({
      next: (consents: Consent[]) => {
        const active = (consents || []).filter(c => c.status === 'ACTIVE');
        this.noConsentsAtAll = active.length === 0;
        this.appsWithAccountAccess = active.filter(c => this.hasScope(c, 'accounts'));

        if (this.tppAppId) {
          // Came through an app — only show accounts if THAT app has the scope.
          const consent = active.find(c => c.tppApp?.tppAppId === this.tppAppId);
          if (consent) {
            this.tppAppName = consent.tppApp.appName;
            this.hasAccountAccess = this.hasScope(consent, 'accounts');
            if (this.hasAccountAccess) {
              this.loadAccounts(userId);
              return;
            }
          }
        }

        // Direct nav → show picker / guidance only, never the raw account list.
        this.isLoading = false;
        this.cdr.detectChanges();
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
    } catch { return false; }
  }

  private loadAccounts(userId: number): void {
    this.accountService.getAccounts(userId, this.tppAppId).subscribe({
      next: accs => {
        this.accounts = accs || [];
        this.isLoading = false;

        // Auto-select an account so transactions load without an extra click.
        // If the payment receipt navigated here with ?focus=<id>, prefer that.
        const focusId = Number(this.route.snapshot.queryParamMap.get('focus'));
        const focused = focusId > 0 ? this.accounts.find(a => a.accountId === focusId) : undefined;
        const target = focused || this.accounts[0];
        if (target) {
          this.loadTransactions(target);
        } else {
          this.cdr.detectChanges();
        }
      },
      error: () => {
        this.errorMessage = 'Unable to load accounts.';
        this.isLoading = false;
      }
    });
  }

  refreshTransactions(): void {
    if (this.selectedAccount) this.loadTransactions(this.selectedAccount);
  }

  loadTransactions(acc: AccountRef): void {
    this.selectedAccount = acc;
    this.txnLoading = true;
    this.accountService.getTransactions(acc.accountId, this.tppAppId).subscribe({
      next: txns => { this.transactions = txns || []; this.txnLoading = false; this.cdr.detectChanges(); },
      error: () => { this.txnLoading = false; }
    });
  }

  openThroughApp(consent: Consent): void {
    this.router.navigate(['/customer/accounts'], {
      queryParams: { tppAppId: consent.tppApp?.tppAppId }
    }).then(() => window.location.reload());
  }

  goToBrowseApps(): void {
    this.router.navigate(['/customer/apps']);
  }
}
