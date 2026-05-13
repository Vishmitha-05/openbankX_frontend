import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TppService } from '../../core/services/tpp.service';
import { ProductService } from '../../core/services/product.service';
import { AuthService } from '../../core/services/auth.service';
import { ConsentService } from '../../core/services/consent.service';
import { Consent, TPPApp, TPPSubscription } from '../../core/models/models';

@Component({
  selector: 'app-browser',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-store"></i> My Apps</h1>
          <p class="page-subtitle">
            Apps approved by the bank that are live for use — grant access and start using them
          </p>
        </div>
      </div>

      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading apps...</span>
      </div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div class="empty-state" *ngIf="!isLoading && availableApps.length === 0 && !errorMessage">
        <i class="fas fa-store"></i>
        <p>No live apps are available right now. Approved apps will appear here once their developer has subscribed to a plan.</p>
      </div>

      <div class="grid-2" *ngIf="!isLoading">

        <div *ngFor="let app of availableApps" class="glass-card app-card">

          <div class="flex justify-between items-start mb-8">
            <div>
              <h3 class="app-title">{{ app.appName }}</h3>
              <p class="text-sm text-muted">
                Provided by {{ app.tpp?.legalName || 'a trusted TPP' }}
              </p>
            </div>
            <span class="badge"
                  [ngClass]="hasActiveConsent(app.tppAppId) ? 'badge-active' : 'badge-info'">
              {{ hasActiveConsent(app.tppAppId) ? 'CONNECTED' : 'AVAILABLE' }}
            </span>
          </div>

          <!-- ============================================================
               Already granted — show app summary + open buttons
               ============================================================ -->
          <ng-container *ngIf="hasActiveConsent(app.tppAppId)">
            <div class="connected-summary">
              <div class="summary-row">
                <span class="text-sm text-muted">Permissions granted</span>
                <strong>{{ grantedScopes(app.tppAppId).length }}</strong>
              </div>
              <div class="summary-row">
                <span class="text-sm text-muted">Consent ID</span>
                <strong>#{{ activeConsentId(app.tppAppId) }}</strong>
              </div>
              <div class="summary-row" *ngIf="consentExpiry(app.tppAppId) as exp">
                <span class="text-sm text-muted">Access valid until</span>
                <strong>{{ exp | date:'mediumDate' }}</strong>
              </div>
            </div>

            <div class="mt-12">
              <span *ngFor="let scope of grantedScopes(app.tppAppId)" class="scope-pill">
                {{ getScopeLabel(scope) }}
              </span>
            </div>

            <div class="action-row mt-16">
              <button *ngIf="hasScopeFor(app.tppAppId, 'accounts')"
                      class="btn btn-primary btn-sm"
                      (click)="openAccounts(app)">
                <i class="fas fa-wallet"></i> Accounts
              </button>
              <button *ngIf="hasScopeFor(app.tppAppId, 'payments')"
                      class="btn btn-primary btn-sm"
                      (click)="openPayments(app)">
                <i class="fas fa-paper-plane"></i> Payments
              </button>
              <button *ngIf="hasScopeFor(app.tppAppId, 'funds-confirmations') || hasScopeFor(app.tppAppId, 'balances')"
                      class="btn btn-primary btn-sm"
                      (click)="openFunds(app)">
                <i class="fas fa-coins"></i> Funds Check
              </button>
              <button class="btn btn-light btn-sm" (click)="manageConsent()">
                <i class="fas fa-sliders-h"></i> Manage
              </button>
            </div>
          </ng-container>

          <!-- ============================================================
               Not granted yet — pick scopes + grant
               ============================================================ -->
          <ng-container *ngIf="!hasActiveConsent(app.tppAppId)">
            <label class="text-sm text-muted"
                   style="text-transform:uppercase; letter-spacing:0.05em;">
              Choose what {{ app.appName }} can access
            </label>

            <div class="scope-checkboxes mt-8">
              <label *ngFor="let scope of parseScopes(app.scopesRequested)"
                     class="scope-check-item">
                <input type="checkbox"
                       [checked]="isScopeSelected(app.tppAppId, scope)"
                       (change)="toggleScope(app.tppAppId, scope)">
                <span class="scope-pill">{{ getScopeLabel(scope) }}</span>
              </label>
            </div>

            <div class="alert alert-error mt-12" *ngIf="appErrors[app.tppAppId]">
              <i class="fas fa-exclamation-circle"></i> {{ appErrors[app.tppAppId] }}
            </div>

            <button class="btn btn-primary mt-12"
                    (click)="grantAccess(app)"
                    [disabled]="pendingAppId === app.tppAppId">
              <span *ngIf="pendingAppId !== app.tppAppId">
                <i class="fas fa-handshake"></i> Grant access &amp; verify
              </span>
              <span *ngIf="pendingAppId === app.tppAppId">
                <i class="fas fa-spinner fa-spin"></i> Creating consent...
              </span>
            </button>
          </ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .app-card { padding: 24px; min-height: 240px; }
    .app-title { font-size: 1.1rem; font-weight: 600; }
    .scope-checkboxes {
      display: flex; flex-direction: column; gap: 8px;
    }
    .scope-check-item {
      display: flex; align-items: center; gap: 8px;
      cursor: pointer; user-select: none;
    }
    .connected-summary {
      margin-top: 12px;
      padding: 12px 14px;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .summary-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
    }
    .action-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  `]
})
export class AppBrowserComponent implements OnInit {

  availableApps: TPPApp[] = [];
  isLoading = true;
  errorMessage = '';

  /** Active consents for the current user, keyed by tppAppId. */
  consentsByApp = new Map<number, Consent>();

  /** Scope picks per app (for non-granted apps). */
  selectedScopesByApp = new Map<number, string[]>();
  appErrors: { [appId: number]: string } = {};
  pendingAppId: number | null = null;

  constructor(
    private tppService: TppService,
    private productService: ProductService,
    private authService: AuthService,
    private consentService: ConsentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAvailableApps();
    this.loadExistingConsents();
  }

  /** Only APPROVED apps with at least one ACTIVE subscription. */
  private loadAvailableApps(): void {
    this.isLoading = true;
    Promise.all([
      this.tppService.getApps().toPromise(),
      this.productService.getSubscriptions().toPromise()
    ]).then(([apps, subs]) => {
      const activeSubs = (subs || []).filter(s => s.status === 'ACTIVE');
      const subscribedAppIds = new Set<number>(
        activeSubs
          .map((s: TPPSubscription) => s.tppApp?.tppAppId)
          .filter((id): id is number => typeof id === 'number')
      );

      this.availableApps = (apps || []).filter(a =>
        a.status === 'APPROVED' && subscribedAppIds.has(a.tppAppId)
      );
      this.isLoading = false;
    }).catch(() => {
      this.isLoading = false;
      this.errorMessage = 'Unable to load apps. Please ensure the backend is running.';
    });
  }

  private loadExistingConsents(): void {
    const userId = this.authService.getUserId();
    if (!userId) return;
    this.consentService.getConsentsByUser(userId).subscribe({
      next: (consents: Consent[]) => {
        consents
          .filter(c => c.status === 'ACTIVE' && c.tppApp?.tppAppId)
          .forEach(c => this.consentsByApp.set(c.tppApp.tppAppId, c));
      }
    });
  }

  /* ---------- Consent state helpers ---------- */

  hasActiveConsent(appId: number): boolean {
    return this.consentsByApp.has(appId);
  }

  activeConsentId(appId: number): number | null {
    return this.consentsByApp.get(appId)?.consentId ?? null;
  }

  consentExpiry(appId: number): string | null {
    return this.consentsByApp.get(appId)?.expiryDate ?? null;
  }

  grantedScopes(appId: number): string[] {
    const consent = this.consentsByApp.get(appId);
    if (!consent) return [];
    try { return JSON.parse(consent.scopeJSON || '[]'); } catch { return []; }
  }

  hasScopeFor(appId: number, scope: string): boolean {
    return this.grantedScopes(appId).includes(scope);
  }

  /* ---------- Scope picker helpers ---------- */

  parseScopes(s: string): string[] {
    try { return JSON.parse(s) || []; } catch { return []; }
  }

  isScopeSelected(appId: number, scope: string): boolean {
    return (this.selectedScopesByApp.get(appId) || []).includes(scope);
  }

  toggleScope(appId: number, scope: string): void {
    const current = this.selectedScopesByApp.get(appId) || [];
    const next = current.includes(scope)
      ? current.filter(s => s !== scope)
      : [...current, scope];
    this.selectedScopesByApp.set(appId, next);
    if (this.appErrors[appId]) this.appErrors[appId] = '';
  }

  getScopeLabel(scope: string): string {
    const map: { [k: string]: string } = {
      'accounts':            'View accounts',
      'balances':            'View balances',
      'payments':            'Initiate payments',
      'funds-confirmations': 'Confirm funds availability'
    };
    return map[scope] || scope;
  }

  /* ---------- Grant access ---------- */

  grantAccess(app: TPPApp): void {
    const scopes = this.selectedScopesByApp.get(app.tppAppId) || [];
    if (scopes.length === 0) {
      this.appErrors[app.tppAppId] = 'Pick at least one permission before granting access.';
      return;
    }

    this.appErrors[app.tppAppId] = '';
    this.pendingAppId = app.tppAppId;

    const payload = {
      user: { userId: this.authService.getUserId() },
      tppApp: { tppAppId: app.tppAppId },
      scopeJSON: JSON.stringify(scopes)
    };

    this.consentService.createConsent(payload).subscribe({
      next: (consent: Partial<Consent>) => {
        this.pendingAppId = null;
        this.router.navigate(['/customer/sca'], {
          queryParams: { consentId: consent.consentId, method: 'OTP' }
        });
      },
      error: (err) => {
        this.pendingAppId = null;
        this.appErrors[app.tppAppId] =
          err?.error?.message || 'Could not create the consent — please try again.';
      }
    });
  }

  /* ---------- Open feature buttons ---------- */

  openAccounts(app: TPPApp): void {
    this.router.navigate(['/customer/accounts'], {
      queryParams: { tppAppId: app.tppAppId }
    });
  }

  openPayments(app: TPPApp): void {
    this.router.navigate(['/customer/payment-initiate'], {
      queryParams: { tppAppId: app.tppAppId }
    });
  }

  openFunds(app: TPPApp): void {
    this.router.navigate(['/customer/funds-check'], {
      queryParams: { tppAppId: app.tppAppId }
    });
  }

  manageConsent(): void {
    this.router.navigate(['/customer/consents']);
  }
}
