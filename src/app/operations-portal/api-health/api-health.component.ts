import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoringService } from '../../core/services/monitoring.service';
import { APILog } from '../../core/models/models';

@Component({
  selector: 'app-api-health',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-health.component.html',
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

  /** Latency above this (ms) is considered a throttled/slow call and is
   *  excluded from the API Health activity feed. */
  private readonly SLOW_THRESHOLD_MS = 3000;

  /** Every TPP-API row we got from the backend — used for the health metrics. */
  private allLogs: APILog[] = [];

  ngOnInit(): void {
    // Load gateway logs
    this.monitoringService.getGatewayLogs().subscribe({
      next: (logs) => {
        // First keep only the customer-facing TPP API calls.
        // Internal traffic (notifications poll, admin calls, etc.) is filtered
        // out so the page reflects how the apps' published APIs are doing.
        const tppOnly = (logs || []).filter(l => this.isTppApiEndpoint(l.endpoint));

        this.allLogs = tppOnly.sort((a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );

        // API Health activity feed = only the successful, fast traffic.
        // Failed / throttled / slow calls live on the Throttle Log page.
        this.logs = this.allLogs.filter(l =>
          l.statusCode < 400 &&
          l.statusCode !== 429 &&
          (l.latencyMs ?? 0) <= this.SLOW_THRESHOLD_MS
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

  /** True only for the customer-facing AISP / PISP / CBPII endpoints. */
  private isTppApiEndpoint(uri?: string): boolean {
    if (!uri) return false;
    return uri.startsWith('/api/v1/aisp/')
        || uri.startsWith('/api/v1/pisp/')
        || uri.startsWith('/api/v1/cbpii/');
  }

  /**
   * Metrics are computed from the *full* log set (healthy + throttled +
   * failed), so the headline cards reflect the real system health, not just
   * the subset shown in the table below.
   */
  private calculateMetrics(): void {
    if (this.allLogs.length === 0) return;
    this.metrics[0].value = this.allLogs.length.toString();

    const avgLatency = this.allLogs.reduce((sum, l) => sum + (l.latencyMs || 0), 0) / this.allLogs.length;
    this.metrics[1].value = Math.round(avgLatency) + 'ms';

    const errors = this.allLogs.filter(l => l.statusCode >= 400).length;
    const errorRate = ((errors / this.allLogs.length) * 100).toFixed(1);
    this.metrics[2].value = errorRate + '%';
  }
}

