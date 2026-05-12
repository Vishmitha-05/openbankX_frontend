import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TppService } from '../../core/services/tpp.service';
import { AuthService } from '../../core/services/auth.service';
import { ConsentService } from '../../core/services/consent.service';
import { Consent } from '../../core/models/models';

@Component({
  selector: 'app-browser',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">

      <!-- HEADER -->
      <div class="page-header">
        <h1><i class="fas fa-store"></i> Browse Apps</h1>
        <p class="page-subtitle">
          Discover trusted apps and manage how they access your financial data
        </p>
      </div>

      <!-- LOADING -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading apps...</span>
      </div>

      <!-- ERROR -->
      <div class="alert alert-error" *ngIf="errorMessage">
        {{ errorMessage }}
      </div>

      <!-- APP GRID -->
      <div class="grid-2" *ngIf="!isLoading">

        <div *ngFor="let app of apps" class="glass-card app-card">

          <!-- APP HEADER -->
          <div class="flex justify-between items-start mb-8">
            <div>
              <h3 class="app-title">{{ app.appName }}</h3>
              <p class="text-sm text-muted">
                Provided by {{ app.tppName || 'Trusted Partner' }}
              </p>
            </div>
            <span class="badge badge-active">{{ app.status }}</span>
          </div>

          <!-- APP DESCRIPTION -->
          <p class="text-sm text-muted mb-12">
            {{ app.description || 
               'This app helps you securely view and manage your financial information.' }}
          </p>

          <!-- REQUESTED PERMISSIONS -->
          <div class="mb-12">
            <label class="text-xs text-muted uppercase">
              Permissions Requested
            </label>
            <div class="flex gap-8 mt-4 flex-wrap">
              <span *ngFor="let scope of parseScopes(app.scopesRequested)"
                    class="badge badge-soft">
                {{ getScopeLabel(scope) }}
              </span>
            </div>
          </div>

          <!-- GRANT ACCESS (NO CONSENT) -->
          <div *ngIf="!consentedAppIds.has(app.tppAppId)
                       && selectedApp?.tppAppId !== app.tppAppId">
            <button class="btn btn-primary"
                    (click)="openConsentForm(app)">
              <i class="fas fa-handshake"></i> Grant Access
            </button>
          </div>

          <!-- ✅ ACTIONS AFTER CONSENT -->
          <div *ngIf="consentedAppIds.has(app.tppAppId)" class="mt-12">

            <p class="text-xs text-success mb-8">
              ✅ Access granted
            </p>

            <div class="flex gap-8 flex-wrap">

              <button class="btn btn-success"
                *ngIf="hasAccountsAccess(app.tppAppId)"
                (click)="goToAccounts(app)">
                <i class="fas fa-wallet"></i> Accounts
              </button>

              <button class="btn btn-warning"
                *ngIf="hasPaymentsAccess(app.tppAppId)"
                (click)="goToPayments(app)">
                <i class="fas fa-paper-plane"></i> Make Payment
              </button>

              <button class="btn btn-info"
                *ngIf="hasBalanceAccess(app.tppAppId)"
                (click)="goToBalance(app)">
                <i class="fas fa-coins"></i> Check Balance
              </button>

            </div>
          </div>

          <!-- CONSENT FORM -->
          <div *ngIf="selectedApp?.tppAppId === app.tppAppId" class="mt-16">
            <h4 class="mb-8">Select Permissions</h4>

            <div *ngFor="let scope of parseScopes(app.scopesRequested)"
                 class="flex gap-8 mb-4">
              <input type="checkbox"
                     [checked]="selectedScopes.includes(scope)"
                     (change)="toggleScope(scope)">
              {{ getScopeLabel(scope) }}
            </div>

            <div class="flex gap-8 mt-12">
              <button class="btn btn-success"
                [disabled]="selectedScopes.length === 0"
                (click)="submitConsent()">
                Submit
              </button>
              <button class="btn btn-light"
                (click)="cancelConsent()">
                Cancel
              </button>
            </div>

            <div class="alert alert-error mt-12"
                 *ngIf="consentError">
              {{ consentError }}
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: [`
    .app-card {
      padding: 24px;
      min-height: 280px;
    }

    .app-title {
      font-size: 1.1rem;
      font-weight: 600;
    }

    .badge-soft {
      background-color: #eef2ff;
      color: #4338ca;
      font-size: 12px;
      padding: 4px 10px;
      border-radius: 16px;
    }

    .flex.gap-8 {
      row-gap: 8px;
      flex-wrap: wrap;
    }
  `]
})
export class AppBrowserComponent implements OnInit {

  apps: any[] = [];
  isLoading = true;
  errorMessage = '';

  selectedApp: any = null;
  selectedScopes: string[] = [];
  consentError = '';

  consentedAppIds = new Set<number>();
  consentScopesByApp = new Map<number, string[]>();

  constructor(
    private tppService: TppService,
    private authService: AuthService,
    private consentService: ConsentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tppService.getApps().subscribe({
      next: data => {
        this.apps = (data || []).filter((a: any) => a.status === 'APPROVED');
        this.isLoading = false;
      },
      error: () => this.isLoading = false
    });

    const userId = this.authService.getUserId();
    if (userId) {
      this.consentService.getConsentsByUser(userId)
        .subscribe((consents: Consent[]) => {
          consents.forEach(c => {
            if (c.status === 'ACTIVE' && c.tppApp?.tppAppId) {
              this.consentedAppIds.add(c.tppApp.tppAppId);
              try {
                this.consentScopesByApp.set(
                  c.tppApp.tppAppId,
                  JSON.parse(c.scopeJSON || '[]')
                );
              } catch {
                this.consentScopesByApp.set(c.tppApp.tppAppId, []);
              }
            }
          });
        });
    }
  }

  /* ---- SCOPE CHECKERS ---- */

  hasAccountsAccess(appId: number): boolean {
    const s = this.consentScopesByApp.get(appId);
    return !!s && s.includes('accounts');
  }

  hasPaymentsAccess(appId: number): boolean {
    const s = this.consentScopesByApp.get(appId);
    return !!s && s.includes('payments');
  }

  hasBalanceAccess(appId: number): boolean {
    const s = this.consentScopesByApp.get(appId);
    return !!s && (s.includes('funds-confirmations') || s.includes('balances'));
  }

  /* ---- ACTIONS ---- */

  openConsentForm(app: any): void {
    this.selectedApp = app;
    this.selectedScopes = [];
  }

  cancelConsent(): void {
    this.selectedApp = null;
    this.selectedScopes = [];
  }

  toggleScope(scope: string): void {
    const i = this.selectedScopes.indexOf(scope);
    i >= 0
      ? this.selectedScopes.splice(i, 1)
      : this.selectedScopes.push(scope);
  }

  submitConsent(): void {
    const payload = {
      user: { userId: this.authService.getUserId() },
      tppApp: { tppAppId: this.selectedApp.tppAppId },
      scopeJSON: JSON.stringify(this.selectedScopes)
    };

    this.consentService.createConsent(payload).subscribe({
      next: (c: Partial<Consent>) => {
        this.consentedAppIds.add(this.selectedApp.tppAppId);
        this.consentScopesByApp.set(this.selectedApp.tppAppId, this.selectedScopes);
        this.selectedApp = null;
        this.selectedScopes = [];
        this.router.navigate(['/customer/sca'], {
          queryParams: { consentId: c.consentId }
        });
      }
    });
  }

  goToAccounts(app: any): void {
    this.router.navigate(['/customer/accounts'], {
      queryParams: { tppAppId: app.tppAppId }
    });
  }

  goToPayments(app: any): void {
    this.router.navigate(['/customer/payment-initiate'], {
      queryParams: { tppAppId: app.tppAppId }
    });
  }

  goToBalance(app: any): void {
    this.router.navigate(['/customer/funds-check'], {
      queryParams: { tppAppId: app.tppAppId }
    });
  }

  parseScopes(s: string): string[] {
    try { return JSON.parse(s); }
    catch { return []; }
  }

  getScopeLabel(scope: string): string {
    const map: any = {
      'accounts': 'Accounts',
      'payments': 'Payments',
      'funds-confirmations': 'Funds Check',
      'balances': 'Balance'
    };
    return map[scope] || scope;
  }
}
``