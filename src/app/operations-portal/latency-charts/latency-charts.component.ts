import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latency-charts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latency-charts.component.html',
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
