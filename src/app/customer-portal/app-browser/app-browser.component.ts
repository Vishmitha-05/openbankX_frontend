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
      <div class="page-header">
        <div>
          <h1><i class="fas fa-store"></i> Browse Apps</h1>
          <p class="page-subtitle">Discover TPP apps and grant them access to your data</p>
        </div>
      </div>

      <!-- LOADING -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading available apps...</span>
      </div>

      <!-- ERROR -->
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <!-- EMPTY STATE -->
      <div class="empty-state" *ngIf="!isLoading && apps.length === 0 && !errorMessage">
        <i class="fas fa-store"></i>
        <p>No approved apps available yet</p>
      </div>

      <!-- APP LIST -->
      <div class="grid-2" *ngIf="!isLoading">
        <div *ngFor="let app of apps" class="glass-card">

          <!-- App Header -->
          <div class="flex items-center justify-between mb-12">
            <div class="flex items-center gap-12">
              <div class="app-icon-circle">
                <i class="fas fa-cube"></i>
              </div>
              <div>
                <h3>{{ app.appName }}</h3>
                <p class="text-sm text-muted">by {{ app.tppName }}</p>
              </div>
            </div>
            <span class="badge badge-active">{{ app.status }}</span>
          </div>

          <!-- Scopes Requested -->
          <div class="mt-12">
            <label class="text-sm text-muted">Permissions Requested</label>
            <div class="mt-4">
              <span *ngFor="let scope of parseScopes(app.scopesRequested)" class="scope-pill">
                <i class="fas fa-check-circle" style="color:#10b981; margin-right:4px"></i>
                {{ getScopeLabel(scope) }}
              </span>
            </div>
          </div>

          <!-- Grant Access Button -->
          <div class="mt-16">
            <button class="btn btn-primary"
                    (click)="openConsentForm(app)"
                    *ngIf="selectedApp?.tppAppId !== app.tppAppId">
              <i class="fas fa-handshake"></i> Grant Access
            </button>
          </div>

          <!-- Inline Consent Form -->
          <div class="consent-form mt-16"
               *ngIf="selectedApp?.tppAppId === app.tppAppId"
               style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px;">

            <h4 class="mb-12">
              <i class="fas fa-clipboard-check"></i> Select Permissions to Grant
            </h4>

            <div *ngFor="let scope of parseScopes(app.scopesRequested)" class="form-check mb-8">
              <label class="flex items-center gap-8" style="cursor:pointer">
                <input type="checkbox"
                       [checked]="selectedScopes.includes(scope)"
                       (change)="toggleScope(scope)">
                <span>{{ getScopeLabel(scope) }}</span>
                <span class="text-sm text-muted">({{ scope }})</span>
              </label>
            </div>

            <!-- SUBMIT -->
            <div class="flex gap-8 mt-12">
              <button class="btn btn-success"
                      (click)="submitConsent()"
                      [disabled]="selectedScopes.length === 0">
                <i class="fas fa-check"></i> Submit & Verify via SCA
              </button>
              <button class="btn btn-light" (click)="cancelConsent()">Cancel</button>
            </div>

            <div class="alert alert-error mt-12" *ngIf="consentError">
              <i class="fas fa-times-circle"></i> {{ consentError }}
            </div>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .app-icon-circle {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
    }
    .form-check {
      display: flex;
      align-items: center;
    }
    .form-check input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: #667eea;
      cursor: pointer;
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

  constructor(
    private tppService: TppService,
    private authService: AuthService,
    private consentService: ConsentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tppService.getApps().subscribe({
      next: data => {
        this.apps = this.normalizeApps(
          (data || []).filter((app: any) => app.status === 'APPROVED')
        );
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load available apps.';
        this.isLoading = false;
      }
    });
  }

  private normalizeApps(apps: any[]): any[] {
    return apps.map(app => ({
      ...app,
      tppName: app.tppName || app.tpp?.legalName || 'Unknown TPP'
    }));
  }

  openConsentForm(app: any): void {
    this.selectedApp = app;
    this.selectedScopes = [];
    this.consentError = '';
  }

  cancelConsent(): void {
    this.selectedApp = null;
    this.selectedScopes = [];
    this.consentError = '';
  }

  toggleScope(scope: string): void {
    const idx = this.selectedScopes.indexOf(scope);
    idx >= 0 ? this.selectedScopes.splice(idx, 1) : this.selectedScopes.push(scope);
  }

  submitConsent(): void {
    if (this.selectedScopes.length === 0) {
      this.consentError = 'Please select at least one permission.';
      return;
    }

    const payload = {
      user_id: this.authService.getUserId(),
      tpp_app_id: this.selectedApp.tppAppId,
      scopeJSON: JSON.stringify(this.selectedScopes)
    };

    console.log('Creating consent with payload:', payload);

    this.consentService.createConsent(payload).subscribe({
      next: (created: Partial<Consent>) => {
        console.log('Consent created successfully:', created);
        const consentId = created.consentId;
        if (!consentId) {
          this.consentError = 'Consent created but ID not found in response';
          console.error('Response object:', created);
          return;
        }
        console.log('Navigating to SCA with consentId:', consentId);
        this.router.navigate(['/customer/sca'], {
          queryParams: { consentId: consentId }
        });
      },
      error: (err) => {
        console.error('Consent creation error:', err);
        const errorMsg = err?.error?.message || err?.message || 'Failed to create consent. Please try again.';
        this.consentError = errorMsg;
      }
    });
  }

  parseScopes(s: string): string[] {
    if (!s) return [];
    try {
      return JSON.parse(s);
    } catch {
      return s.split(',').map(x => x.trim());
    }
  }

  getScopeLabel(scope: string): string {
    const map: any = {
      'accounts:read': 'View accounts',
      'balances:read': 'View balances',
      'payments:write': 'Initiate payments',
      'funds:read': 'Check funds'
    };
    return map[scope] || scope;
  }
}