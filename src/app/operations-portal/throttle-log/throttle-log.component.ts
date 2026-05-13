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
          <i class="fas fa-check-circle"></i><p>No throttle / failure events recorded</p>
        </div>
        <table class="data-table" *ngIf="logs.length > 0">
          <thead>
            <tr>
              <th>Timestamp</th><th>App</th><th>Endpoint</th><th>Method</th><th>Status</th><th>Latency</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let log of logs">
              <td class="text-sm">{{ log.timestamp | date:'medium' }}</td>
              <td>
                <strong *ngIf="log.tppApp?.appName">{{ log.tppApp.appName }}</strong>
                <span class="text-muted text-sm" *ngIf="!log.tppApp?.appName">
                  <i class="fas fa-server"></i> Internal
                </span>
              </td>
              <td class="font-mono text-sm">{{ log.endpoint }}</td>
              <td><span class="badge badge-info">{{ log.method }}</span></td>
              <td>
                <span class="badge"
                      [ngClass]="log.statusCode === 429 ? 'badge-revoked' :
                                 log.statusCode >= 500 ? 'badge-revoked' :
                                 log.statusCode >= 400 ? 'badge-pending' :
                                 'badge-active'">
                  {{ log.statusCode }}
                </span>
              </td>
              <td class="text-sm" [class.text-error]="log.latencyMs > 3000">
                {{ log.latencyMs }}ms
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrl: './throttle-log.component.css'
})
export class ThrottleLogComponent implements OnInit {
  /** Only throttle / failure rows live here. The healthy traffic feed lives
   *  on the API Health page. */
  logs: APILog[] = [];
  isLoading = true;
  errorMessage = '';

  /** Latency above this (ms) counts as "throttled / slow" for this page. */
  private readonly SLOW_THRESHOLD_MS = 3000;

  constructor(private monitoringService: MonitoringService) {}

  ngOnInit(): void {
    this.monitoringService.getGatewayLogs().subscribe({
      next: (d) => {
        const all = d || [];
        // Customer-facing TPP API calls only — internal traffic (notifications
        // polling, admin endpoints, etc.) doesn't belong here.
        // From that subset, keep only the rows the Operations team needs to
        // act on: rate-limited, failed, or unusually slow.
        this.logs = all
          .filter(l => this.isTppApiEndpoint(l.endpoint))
          .filter(l =>
            l.statusCode === 429 ||
            l.statusCode >= 400 ||
            (l.latencyMs ?? 0) > this.SLOW_THRESHOLD_MS
          )
          .sort((a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          );
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load throttle logs.';
        this.isLoading = false;
      }
    });
  }

  /** True only for the customer-facing AISP / PISP / CBPII endpoints. */
  private isTppApiEndpoint(uri?: string): boolean {
    if (!uri) return false;
    return uri.startsWith('/api/v1/aisp/')
        || uri.startsWith('/api/v1/pisp/')
        || uri.startsWith('/api/v1/cbpii/');
  }
}
