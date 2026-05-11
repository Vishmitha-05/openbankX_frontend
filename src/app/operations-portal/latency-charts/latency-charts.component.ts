import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latency-charts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-chart-line"></i> Latency Distribution</h1>
        <p class="page-subtitle">P50 / P95 / P99 response time analysis</p></div>
      </div>
      <div class="grid-3 mb-20">
        <div *ngFor="let p of percentiles" class="glass-card" style="text-align:center">
          <h4 class="text-muted">{{ p.label }}</h4>
          <div class="latency-value mt-8" [ngStyle]="{ 'color': p.color }">{{ p.value }}ms</div>
          <div class="gauge-bar mt-12">
            <div class="gauge-fill" [ngStyle]="{ 'width': p.percent + '%', 'background': p.color }"></div>
          </div>
          <span class="text-sm text-muted mt-8">Target: {{ p.target }}ms</span>
        </div>
      </div>

      <!-- Endpoint breakdown -->
      <div class="glass-card">
        <h3 class="mb-16">Latency by Endpoint</h3>
        <div class="endpoint-bars">
          <div *ngFor="let ep of endpointLatency" class="bar-row">
            <span class="bar-endpoint font-mono text-sm">{{ ep.endpoint }}</span>
            <div class="bar-track">
              <div class="bar-fill" [ngStyle]="{ 'width': (ep.latency / 500 * 100) + '%', 'background': ep.latency > 300 ? '#ef4444' : ep.latency > 200 ? '#f59e0b' : '#10b981' }"></div>
            </div>
            <span class="bar-ms text-sm" [ngStyle]="{ 'color': ep.latency > 300 ? '#ef4444' : '#10b981' }">{{ ep.latency }}ms</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './latency-charts.component.css'
})
export class LatencyChartsComponent {
  percentiles = [
    { label: 'P50 (Median)', value: 120, target: 200, percent: 60, color: '#10b981' },
    { label: 'P95', value: 210, target: 300, percent: 70, color: '#f59e0b' },
    { label: 'P99', value: 380, target: 500, percent: 76, color: '#ef4444' }
  ];

  endpointLatency = [
    { endpoint: '/accounts', latency: 95 },
    { endpoint: '/balances', latency: 82 },
    { endpoint: '/transactions', latency: 185 },
    { endpoint: '/payments', latency: 240 },
    { endpoint: '/funds-check', latency: 110 },
    { endpoint: '/consents', latency: 68 }
  ];
}
