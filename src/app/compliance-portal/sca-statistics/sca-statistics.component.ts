import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { SCAEvent } from '../../core/models/models';

@Component({
  selector: 'app-sca-statistics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-chart-pie"></i> SCA Statistics</h1>
        <p class="page-subtitle">Strong Customer Authentication success/failure rates</p></div>
      </div>
      <div class="grid-3 mb-20">
        <div *ngFor="let stat of stats" class="stat-card">
          <div class="stat-icon" [ngStyle]="{ 'background': stat.gradient }"><i [class]="stat.icon"></i></div>
          <div class="stat-content"><div class="stat-value">{{ stat.value }}</div><div class="stat-label">{{ stat.label }}</div></div>
        </div>
      </div>
      <div class="glass-card">
        <h3 class="mb-16">Recent SCA Events</h3>
        <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>
        <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
        <table class="data-table" *ngIf="!isLoading && events.length > 0">
          <thead><tr><th>Time</th><th>User</th><th>Method</th><th>Result</th><th>Reference</th></tr></thead>
          <tbody>
            <tr *ngFor="let ev of events">
              <td class="text-sm">{{ ev.eventTime | date:'medium' }}</td>
              <td>{{ ev.user?.name || 'N/A' }}</td>
              <td><span class="badge badge-info">{{ ev.method }}</span></td>
              <td><span class="badge" [ngClass]="ev.result === 'PASS' ? 'badge-pass' : 'badge-fail'">{{ ev.result }}</span></td>
              <td class="font-mono text-sm">{{ ev.referenceId }}</td>
            </tr>
          </tbody>
        </table>
        <div class="empty-state" *ngIf="!isLoading && events.length === 0 && !errorMessage"><p>No SCA events recorded</p></div>
      </div>
    </div>
  `,
  styleUrl: './sca-statistics.component.css'
})
export class ScaStatisticsComponent implements OnInit {
  events: SCAEvent[] = [];
  isLoading = true;
  errorMessage = '';
  stats = [
    { label: 'Total SCA', value: '0', icon: 'fas fa-shield-alt', gradient: 'linear-gradient(135deg,#667eea,#764ba2)' },
    { label: 'Pass Rate', value: '0%', icon: 'fas fa-check', gradient: 'linear-gradient(135deg,#10b981,#059669)' },
    { label: 'Failures', value: '0', icon: 'fas fa-times', gradient: 'linear-gradient(135deg,#ef4444,#dc2626)' }
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getScaEvents().subscribe({
      next: (d) => {
        this.events = d || [];
        this.stats[0].value = this.events.length.toString();
        const passes = this.events.filter(e => e.result === 'PASS').length;
        this.stats[1].value = this.events.length > 0 ? Math.round(passes/this.events.length*100) + '%' : '0%';
        this.stats[2].value = (this.events.length - passes).toString();
        this.isLoading = false;
      },
      error: () => { this.errorMessage = 'Unable to load SCA events.'; this.isLoading = false; }
    });
  }
}
