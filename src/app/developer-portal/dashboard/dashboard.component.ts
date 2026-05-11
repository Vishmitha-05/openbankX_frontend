import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TppService } from '../../core/services/tpp.service';
import { AuthService } from '../../core/services/auth.service';
import { TPP, TPPApp, AppStats } from '../../core/models/models';

/**
 * DashboardComponent — Developer home page showing app stats.
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1>Welcome back, Developer 👋</h1>
          <p class="page-subtitle">Here's an overview of your apps and API usage</p>
        </div>
        <a routerLink="/developer/apps/new" class="btn btn-primary">
          <i class="fas fa-plus"></i> Register New App
        </a>
      </div>

      <!-- Loading State -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading dashboard...</span>
      </div>

      <!-- Error State -->
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <!-- Stats Grid -->
      <div class="grid-4 mb-20" *ngIf="!isLoading">
        <div *ngFor="let stat of stats" class="stat-card">
          <div class="stat-icon" [ngStyle]="{ 'background': stat.gradient }">
            <i [class]="stat.icon"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- My Apps Table -->
      <div class="glass-card" *ngIf="!isLoading">
        <div class="flex items-center justify-between mb-16">
          <h3>My Applications</h3>
          <span class="badge badge-info">{{ apps.length }} apps</span>
        </div>

        <!-- Empty State -->
        <div class="empty-state" *ngIf="apps.length === 0">
          <i class="fas fa-cube"></i>
          <p>No applications registered yet.</p>
          <a routerLink="/developer/apps/new" class="btn btn-primary btn-sm mt-12">Register Your First App</a>
        </div>

        <!-- App Table -->
        <table class="data-table" *ngIf="apps.length > 0">
          <thead>
            <tr>
              <th>App Name</th>
              <th>TPP</th>
              <th>Scopes</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let app of apps">
              <td>
                <div class="flex items-center gap-8">
                  <div class="app-icon-sm">
                    <i class="fas fa-cube"></i>
                  </div>
                  <strong>{{ app.appName }}</strong>
                </div>
              </td>
              <td class="text-muted">{{ app.tpp.legalName || 'N/A' }}</td>
              <td>
                <span *ngFor="let scope of parseScopes(app.scopesRequested)" class="scope-pill">
                  {{ scope }}
                </span>
              </td>
              <td>
                <span class="badge"
                      [ngClass]="{
                        'badge-approved': app.status === 'APPROVED',
                        'badge-pending': app.status === 'PENDING',
                        'badge-revoked': app.status === 'REJECTED'
                      }">
                  {{ app.status }}
                </span>
              </td>
              <td>
                <a [routerLink]="['/developer/apps', app.tppAppId, 'keys']" class="btn btn-secondary btn-sm">
                  <i class="fas fa-key"></i> Keys
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="glass-card mt-20" *ngIf="!isLoading">
        <div class="flex items-center justify-between mb-16">
          <h3>TPP Companies</h3>
          <span class="badge badge-info">{{ tpps.length }} companies</span>
        </div>

        <!-- Empty State -->
        <div class="empty-state" *ngIf="tpps.length === 0">
          <i class="fas fa-building"></i>
          <p>No TPP companies registered yet.</p>
          <a routerLink="/developer/tpp/register" class="btn btn-primary btn-sm mt-12">Register TPP Company</a>
        </div>

        <!-- TPP Table -->
        <table class="data-table" *ngIf="tpps.length > 0">
          <thead>
            <tr>
              <th>Company</th>
              <th>Registration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let tpp of tpps">
              <td>
                <div class="flex items-center gap-8">
                  <div class="app-icon-sm">
                    <i class="fas fa-building"></i>
                  </div>
                  <strong>{{ tpp.legalName }}</strong>
                </div>
              </td>
              <td>{{ tpp.registrationNumber }}</td>
              <td>
                <span class="badge"
                      [ngClass]="{
                        'badge-sandbox': tpp.status === 'SANDBOX',
                        'badge-production': tpp.status === 'PRODUCTION',
                        'badge-suspended': tpp.status === 'SUSPENDED'
                      }">
                  {{ tpp.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  apps: TPPApp[] = [];
  tpps: TPP[] = [];
  isLoading = true;
  errorMessage = '';

  stats = [
    { label: 'Total Apps',     value: '0', icon: 'fas fa-cube',          gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { label: 'API Calls',      value: '0', icon: 'fas fa-exchange-alt',  gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    { label: 'Error Rate',     value: '0%', icon: 'fas fa-bug',          gradient: 'linear-gradient(135deg, #ef4444, #dc2626)' },
    { label: 'Avg Latency',    value: '0ms', icon: 'fas fa-clock',       gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' }
  ];

  constructor(private tppService: TppService) {}

  ngOnInit(): void {
    this.loadApps();
    this.loadTpps();
  }

  loadApps(): void {
    this.tppService.getApps().subscribe({
      next: (data) => {
        this.apps = data || [];
        this.stats[0].value = this.apps.length.toString();

        if (this.apps.length > 0) {
          this.tppService.getAppStats(this.apps[0].tppAppId).subscribe({
            next: (statsData) => {
              this.stats[1].value = statsData.totalApiCalls.toLocaleString();
              this.stats[2].value = statsData.errorRate;
              this.stats[3].value = statsData.avgLatencyMs + 'ms';
            },
            error: () => { /* stats remain at 0 */ }
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load apps. Please ensure the backend is running.';
        this.isLoading = false;
      }
    });
  }

  loadTpps(): void {
    this.tppService.getTpps().subscribe({
      next: (data) => {
        this.tpps = data || [];
      },
      error: () => {
        // TPPs loading error, but don't set errorMessage to avoid overriding app errors
      }
    });
  }

  parseScopes(scopeStr: string): string[] {
    try {
      return JSON.parse(scopeStr);
    } catch { return []; }
  }
}
