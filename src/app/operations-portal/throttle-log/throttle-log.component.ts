import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoringService } from '../../core/services/monitoring.service';
import { APILog } from '../../core/models/models';

@Component({
  selector: 'app-throttle-log',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-tachometer-alt"></i> Throttle Log</h1>
        <p class="page-subtitle">Rate-limited requests and throttle events</p></div>
      </div>
      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>
      <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
      <div class="glass-card" *ngIf="!isLoading">
        <div class="empty-state" *ngIf="logs.length === 0 && !errorMessage">
          <i class="fas fa-check-circle"></i><p>No throttle events recorded</p>
        </div>
        <table class="data-table" *ngIf="logs.length > 0">
          <thead><tr><th>Timestamp</th><th>App</th><th>Endpoint</th><th>Method</th><th>Status</th><th>Latency</th></tr></thead>
          <tbody>
            <tr *ngFor="let log of logs">
              <td class="text-sm">{{ log.timestamp | date:'medium' }}</td>
              <td>{{ log.tppApp?.appName || 'N/A' }}</td>
              <td class="font-mono text-sm">{{ log.endpoint }}</td>
              <td><span class="badge badge-info">{{ log.method }}</span></td>
              <td><span class="badge" [ngClass]="log.statusCode === 429 ? 'badge-revoked' : log.statusCode < 400 ? 'badge-active' : 'badge-pending'">{{ log.statusCode }}</span></td>
              <td class="text-sm">{{ log.latencyMs }}ms</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrl: './throttle-log.component.css'
})
export class ThrottleLogComponent implements OnInit {
  logs: APILog[] = [];
  isLoading = true;
  errorMessage = '';
  constructor(private monitoringService: MonitoringService) {}
  ngOnInit(): void {
    this.monitoringService.getGatewayLogs().subscribe({
      next: (d) => { this.logs = d || []; this.isLoading = false; },
      error: () => { this.errorMessage = 'Unable to load throttle logs.'; this.isLoading = false; }
    });
  }
}
