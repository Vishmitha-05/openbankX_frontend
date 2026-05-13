import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TppService } from '../../core/services/tpp.service';
import { ProductService } from '../../core/services/product.service';
import { AuthService } from '../../core/services/auth.service';
import { TPPApp, TPPSubscription } from '../../core/models/models';

/**
 * AppListComponent — Lists all registered TPP applications with their subscriptions.
 */
@Component({
  selector: 'app-app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1>My Applications</h1>
          <p class="page-subtitle">Manage all your registered TPP applications</p>
        </div>
        <a routerLink="/developer/apps/new" class="btn btn-primary">
          <i class="fas fa-plus"></i> New App
        </a>
      </div>

      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading apps...</span>
      </div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <!-- App Cards Grid -->
      <div class="grid-2" *ngIf="!isLoading">
        <div *ngFor="let app of apps; let i = index"
             class="glass-card app-card"
             [ngStyle]="{ 'animation-delay': (i * 0.05) + 's' }">
          <div class="app-card-header">
            <div class="app-icon" [ngStyle]="{ 'background': getAppColor(i) }">
              <i class="fas fa-cube"></i>
            </div>
            <span class="badge"
                  [ngClass]="{
                    'badge-approved': app.status === 'APPROVED',
                    'badge-pending': app.status === 'PENDING',
                    'badge-rejected': app.status === 'REJECTED'
                  }">
              {{ app.status }}
            </span>
          </div>

          <h4 class="mt-8">{{ app.appName }}</h4>
          <p class="text-sm text-muted mt-4">{{ app.tpp?.legalName || 'Unknown TPP' }}</p>

          <div class="app-scopes mt-12">
            <span *ngFor="let scope of parseScopes(app.scopesRequested)"
                  class="scope-pill">
              {{ scope }}
            </span>
          </div>

          <!-- Subscriptions for this app -->
          <div class="mt-12" *ngIf="appSubscriptions[app.tppAppId]?.length">
            <label class="text-sm text-muted"><i class="fas fa-clipboard-list"></i> Subscriptions</label>
            <div *ngFor="let sub of appSubscriptions[app.tppAppId]" class="mt-4"
                 style="background:rgba(255,255,255,0.04); border-radius:8px; padding:8px 12px;">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-8">
                  <span class="badge" [ngClass]="sub.apiPlan?.environment === 'SANDBOX' ? 'badge-info' : 'badge-active'" style="font-size:0.7rem">
                    {{ sub.apiPlan?.environment }}
                  </span>
                  <strong class="text-sm">{{ sub.apiPlan?.apiProduct?.name || 'Product' }}</strong>
                </div>
                <span class="badge" [ngClass]="{
                  'badge-active': sub.status === 'ACTIVE',
                  'badge-revoked': sub.status === 'SUSPENDED'
                }" style="font-size:0.7rem">{{ sub.status }}</span>
              </div>
              <div class="flex items-center gap-12 mt-4">
                <span class="text-sm text-muted"><i class="fas fa-tachometer-alt"></i> {{ sub.apiPlan?.rateLimitPerMin }}/min</span>
                <span class="text-sm text-muted"><i class="fas fa-calendar"></i> Expires: {{ sub.expiryDate | date:'mediumDate' }}</span>
              </div>
            </div>
          </div>

          <div class="mt-12" *ngIf="!appSubscriptions[app.tppAppId] || appSubscriptions[app.tppAppId]?.length === 0">
            <p class="text-sm text-muted"><i class="fas fa-info-circle"></i> No subscriptions yet</p>
          </div>

          <div class="app-actions mt-16 flex gap-8">
            <a [routerLink]="['/developer/apps', app.tppAppId, 'keys']"
               class="btn btn-secondary btn-sm">
              <i class="fas fa-key"></i> Keys
            </a>
            <a routerLink="/developer/subscribe"
               class="btn btn-primary btn-sm" *ngIf="app.status === 'APPROVED'">
              <i class="fas fa-plug"></i> Subscribe
            </a>
          </div>
        </div>
      </div>

      <div class="empty-state" *ngIf="!isLoading && apps.length === 0 && !errorMessage">
        <i class="fas fa-cube"></i>
        <p>No applications registered yet</p>
      </div>
    </div>
  `,
  styleUrl: './app-list.component.css'
})
export class AppListComponent implements OnInit {
  apps: TPPApp[] = [];
  appSubscriptions: { [appId: number]: TPPSubscription[] } = {};
  isLoading = true;
  errorMessage = '';

  private colors = [
    '#0a2540',
    '#1e40af',
    '#c79a2a',
    '#0e7490',
    '#16a34a'
  ];

  constructor(
    private tppService: TppService,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.tppService.getMyApps(this.authService.getEmail()).subscribe({
      next: (data) => {
        this.apps = data || [];
        this.isLoading = false;
        // Load subscriptions for each app
        for (const app of this.apps) {
          this.productService.getSubscriptionsByApp(app.tppAppId).subscribe({
            next: (subs) => { this.appSubscriptions[app.tppAppId] = subs || []; },
            error: () => { this.appSubscriptions[app.tppAppId] = []; }
          });
        }
      },
      error: () => {
        this.errorMessage = 'Unable to load applications.';
        this.isLoading = false;
      }
    });
  }

  parseScopes(str: string): string[] {
    try { return JSON.parse(str); } catch { return []; }
  }

  getAppColor(index: number): string {
    return this.colors[index % this.colors.length];
  }
}

