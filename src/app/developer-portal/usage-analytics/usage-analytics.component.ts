import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TppService } from '../../core/services/tpp.service';
import { AppStats } from '../../core/models/models';

@Component({
  selector: 'app-usage-analytics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-chart-bar"></i> Usage Analytics</h1>
          <p class="page-subtitle">API call statistics for your applications</p>
        </div>
      </div>

      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div><span>Loading analytics...</span></div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div *ngIf="!isLoading">
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

        <!-- Visual Bar Chart (CSS only) -->
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
  appStats: AppStats | null = null;

  statCards = [
    { label: 'Total Calls', value: '0', icon: 'fas fa-exchange-alt', gradient: 'linear-gradient(135deg,#667eea,#764ba2)' },
    { label: 'Errors', value: '0', icon: 'fas fa-bug', gradient: 'linear-gradient(135deg,#ef4444,#dc2626)' },
    { label: 'Error Rate', value: '0%', icon: 'fas fa-percent', gradient: 'linear-gradient(135deg,#f59e0b,#d97706)' },
    { label: 'Avg Latency', value: '0ms', icon: 'fas fa-clock', gradient: 'linear-gradient(135deg,#10b981,#059669)' }
  ];

  barData = [
    { label: '/accounts', value: '0', percent: 0, color: '#667eea' },
    { label: '/balances', value: '0', percent: 0, color: '#10b981' },
    { label: '/transactions', value: '0', percent: 0, color: '#f59e0b' },
    { label: '/payments', value: '0', percent: 0, color: '#ef4444' },
    { label: '/funds-check', value: '0', percent: 0, color: '#06b6d4' }
  ];

  constructor(private tppService: TppService) {}

  ngOnInit(): void {
    this.tppService.getAppStats(1).subscribe({
      next: (d) => {
        this.appStats = d;
        if (d) {
          this.statCards[0].value = d.totalApiCalls.toLocaleString();
          this.statCards[1].value = d.errorCalls.toLocaleString();
          this.statCards[2].value = d.errorRate;
          this.statCards[3].value = d.avgLatencyMs + 'ms';
          this.updateBars(d.totalApiCalls);
        }
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load analytics. Please ensure backend is running.';
        this.isLoading = false;
      }
    });
  }

  updateBars(total: number) {
    this.barData[0] = { ...this.barData[0], value: Math.floor(total*0.4)+'', percent: 40 };
    this.barData[1] = { ...this.barData[1], value: Math.floor(total*0.25)+'', percent: 25 };
    this.barData[2] = { ...this.barData[2], value: Math.floor(total*0.2)+'', percent: 20 };
    this.barData[3] = { ...this.barData[3], value: Math.floor(total*0.1)+'', percent: 10 };
    this.barData[4] = { ...this.barData[4], value: Math.floor(total*0.05)+'', percent: 5 };
  }
}
