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
  templateUrl: './usage-analytics.component.html',
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
