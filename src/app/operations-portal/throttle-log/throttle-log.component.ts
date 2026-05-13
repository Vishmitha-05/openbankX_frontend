import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoringService } from '../../core/services/monitoring.service';
import { APILog } from '../../core/models/models';

@Component({
  selector: 'app-throttle-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './throttle-log.component.html',
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
