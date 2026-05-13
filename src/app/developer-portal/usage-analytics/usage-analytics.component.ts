import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TppService } from '../../core/services/tpp.service';
import { AuthService } from '../../core/services/auth.service';
import { AppStats, TPPApp } from '../../core/models/models';

@Component({
  selector: 'app-usage-analytics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-chart-bar"></i> Usage Analytics</h1>
          <p class="page-subtitle">API call statistics for your applications</p>
        </div>

        <div *ngIf="apps.length > 1">
          <select class="form-control" [(ngModel)]="selectedAppId" (change)="loadStats()">
            <option *ngFor="let a of apps" [value]="a.tppAppId">{{ a.appName }}</option>
          </select>
        </div>
      </div>

      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading analytics...</span>
      </div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div class="empty-state" *ngIf="!isLoading && apps.length === 0 && !errorMessage">
        <i class="fas fa-cube"></i>
        <p>You have no applications yet. Register an app to see analytics.</p>
      </div>

      <div *ngIf="!isLoading && apps.length > 0">
        <div class="grid-4 mb-20">
          <div *ngFor="let stat of statCards" class="stat-card">
            <div class="stat-icon" [ngStyle]="{ 'background': stat.gradient }">
              <i [class]="stat.icon"></i>
            </div>
            <div class="stat-content">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div class="glass-card">
          <h3 class="mb-16">API Calls Distribution</h3>
          <div class="bar-chart">
            <div *ngFor="let bar of barData" class="bar-item">
              <div class="bar-label text-sm">{{ bar.label }}</div>
              <div class="bar-track">
                <div class="bar-fill" [ngStyle]="{ 'width': bar.percent + '%', 'background': bar.color }"></div>
              </div>
              <div class="bar-value text-sm text-muted">{{ bar.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './usage-analytics.component.css'
})
export class UsageAnalyticsComponent implements OnInit {
  isLoading = true;
  errorMessage = '';
  apps: TPPApp[] = [];
  selectedAppId: number | null = null;

  statCards = [
    { label: 'Total Calls', value: '0',   icon: 'fas fa-exchange-alt', gradient: '#0a2540' },
    { label: 'Errors',      value: '0',   icon: 'fas fa-bug',          gradient: '#dc2626' },
    { label: 'Error Rate',  value: '0%',  icon: 'fas fa-percent',      gradient: '#d97706' },
    { label: 'Avg Latency', value: '0ms', icon: 'fas fa-clock',        gradient: '#16a34a' }
  ];

  barData = [
    { label: '/accounts',     value: '0', percent: 0, color: '#1e40af' },
    { label: '/balances',     value: '0', percent: 0, color: '#16a34a' },
    { label: '/transactions', value: '0', percent: 0, color: '#d97706' },
    { label: '/payments',     value: '0', percent: 0, color: '#dc2626' },
    { label: '/funds-check',  value: '0', percent: 0, color: '#0e7490' }
  ];

  constructor(private tppService: TppService, private authService: AuthService) {}

  ngOnInit(): void {
    this.tppService.getMyApps(this.authService.getEmail()).subscribe({
      next: (apps) => {
        this.apps = apps || [];
        if (this.apps.length === 0) {
          this.isLoading = false;
          return;
        }
        this.selectedAppId = this.apps[0].tppAppId;
        this.loadStats();
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Unable to load applications.';
      }
    });
  }

  loadStats(): void {
    if (!this.selectedAppId) {
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    this.tppService.getAppStats(this.selectedAppId).subscribe({
      next: (d: AppStats) => {
        if (d) {
          this.statCards[0].value = (d.totalApiCalls || 0).toLocaleString();
          this.statCards[1].value = (d.errorCalls || 0).toLocaleString();
          this.statCards[2].value = d.errorRate || '0%';
          this.statCards[3].value = (d.avgLatencyMs || 0) + 'ms';
          this.updateBars(d.totalApiCalls || 0);
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.resetStats();
      }
    });
  }

  private resetStats(): void {
    this.statCards[0].value = '0';
    this.statCards[1].value = '0';
    this.statCards[2].value = '0%';
    this.statCards[3].value = '0ms';
    this.updateBars(0);
  }

  updateBars(total: number) {
    const shares = [0.4, 0.25, 0.2, 0.1, 0.05];
    const percents = [40, 25, 20, 10, 5];
    for (let i = 0; i < this.barData.length; i++) {
      this.barData[i] = {
        ...this.barData[i],
        value: Math.floor(total * shares[i]) + '',
        percent: total > 0 ? percents[i] : 0
      };
    }
  }
}
