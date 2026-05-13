import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoringService } from '../../core/services/monitoring.service';
import { APILog } from '../../core/models/models';

@Component({
  selector: 'app-api-health',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-heartbeat"></i> API Health Monitor</h1>
        <p class="page-subtitle">Real-time system health and API activity logs</p></div>
        <span class="badge badge-active"><i class="fas fa-circle" style="font-size:0.5rem"></i> Live</span>
      </div>
      <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
      <div class="grid-4 mb-20">
        <div *ngFor="let metric of metrics" class="stat-card">
          <div class="stat-icon" [ngStyle]="{ 'background': metric.gradient }"><i [class]="metric.icon"></i></div>
          <div class="stat-content"><div class="stat-value">{{ metric.value }}</div><div class="stat-label">{{ metric.label }}</div></div>
        </div>
      </div>

      <!-- ACTIVITY LOG TABLE -->
      <div class="glass-card">
        <h3 class="mb-16"><i class="fas fa-list"></i> Recent API Activity</h3>
        <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>
        <div class="empty-state" *ngIf="!isLoading && logs.length === 0">
          <i class="fas fa-inbox"></i><p>No activity logs yet</p>
        </div>
        <table class="data-table" *ngIf="!isLoading && logs.length > 0">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>App</th>
              <th>Method</th>
              <th>Endpoint</th>
              <th>Status</th>
              <th>Latency</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let log of logs">
              <td class="text-sm">{{ log.timestamp | date:'medium' }}</td>
              <td>
                <strong *ngIf="resolveAppName(log) as appName">{{ appName }}</strong>
                <span class="text-muted text-sm" *ngIf="!resolveAppName(log)">
                  <i class="fas fa-server"></i> Internal
                </span>
              </td>
              <td>
                <span class="badge" [ngClass]="{
                  'badge-active': log.method === 'GET',
                  'badge-pending': log.method === 'POST',
                  'badge-revoked': log.method === 'DELETE'
                }">{{ log.method }}</span>
              </td>
              <td class="font-mono text-sm">{{ log.endpoint }}</td>
              <td>
                <span class="badge" [ngClass]="log.statusCode < 400 ? 'badge-active' : 'badge-revoked'">
                  {{ log.statusCode }}
                </span>
              </td>
              <td class="text-sm">{{ log.latencyMs }}ms</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrl: './api-health.component.css'
})
export class ApiHealthComponent implements OnInit {
  errorMessage = '';
  isLoading = true;
  logs: APILog[] = [];
  metrics = [
    { label: 'Total Requests', value: '—', icon: 'fas fa-bolt',                  gradient: '#0a2540' },
    { label: 'Avg Latency',    value: '—', icon: 'fas fa-clock',                 gradient: '#1e40af' },
    { label: 'Error Rate',     value: '—', icon: 'fas fa-bug',                   gradient: '#dc2626' },
    { label: 'Incidents',      value: '0', icon: 'fas fa-exclamation-triangle',  gradient: '#c79a2a' }
  ];

  constructor(private monitoringService: MonitoringService) {}

  ngOnInit(): void {
    // Load gateway logs
    this.monitoringService.getGatewayLogs().subscribe({
      next: (logs) => {
        this.logs = (logs || []).sort((a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        this.calculateMetrics();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Unable to load API logs.';
      }
    });

    // Load incidents count
    this.monitoringService.getIncidents().subscribe({
      next: (incidents) => {
        if (incidents) {
          this.metrics[3].value = incidents.length.toString();
        }
      }
    });
  }

  resolveAppName(log: APILog): string {
    return log.tppApp?.appName
      || (log as any).appName
      || (log.authClient?.tppApp?.appName)
      || '';
  }

  private calculateMetrics(): void {
    if (this.logs.length === 0) return;
    this.metrics[0].value = this.logs.length.toString();

    const avgLatency = this.logs.reduce((sum, l) => sum + (l.latencyMs || 0), 0) / this.logs.length;
    this.metrics[1].value = Math.round(avgLatency) + 'ms';

    const errors = this.logs.filter(l => l.statusCode >= 400).length;
    const errorRate = ((errors / this.logs.length) * 100).toFixed(1);
    this.metrics[2].value = errorRate + '%';
  }
}

