import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuditService } from '../../core/services/audit.service';
import { ComplianceReport } from '../../core/models/models';

@Component({
  selector: 'app-report-generation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-file-alt"></i> Compliance Reports</h1>
        <p class="page-subtitle">Generate, view, and download regulatory compliance reports</p></div>
      </div>
      <div class="glass-card mb-20" style="max-width:480px">
        <h3 class="mb-16">Generate New Report</h3>
        <div class="form-group"><label>Report Scope</label>
          <input type="text" class="form-control" [(ngModel)]="scope" placeholder="e.g., TPP-1 Q1 2026">
        </div>
        <button class="btn btn-primary" (click)="generate()"><i class="fas fa-file-export"></i> Generate Report</button>
        <div class="alert alert-success mt-12" *ngIf="generated"><i class="fas fa-check-circle"></i> Report generated!</div>
        <div class="alert alert-error mt-12" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
      </div>
      <div class="glass-card">
        <h3 class="mb-16">Existing Reports</h3>
        <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>
        <table class="data-table" *ngIf="!isLoading && reports.length > 0">
          <thead><tr><th>ID</th><th>Scope</th><th>Generated</th><th>Metrics</th><th>Download</th></tr></thead>
          <tbody>
            <tr *ngFor="let r of reports">
              <td class="font-mono">#{{ r.compReportId }}</td>
              <td>{{ r.scope }}</td>
              <td class="text-sm">{{ r.generatedDate | date:'medium' }}</td>
              <td class="text-sm font-mono">{{ r.metrics }}</td>
              <td>
                <button class="btn btn-secondary btn-xs" (click)="downloadCSV(r)" title="Download CSV"><i class="fas fa-file-csv"></i> CSV</button>
                <button class="btn btn-primary btn-xs ml-4" (click)="downloadPDF(r)" title="Download PDF"><i class="fas fa-file-pdf"></i> PDF</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="empty-state" *ngIf="!isLoading && reports.length === 0"><p>No reports generated yet</p></div>
      </div>
    </div>
  `,
  styleUrl: './report-generation.component.css'
})
export class ReportGenerationComponent implements OnInit {
  reports: ComplianceReport[] = [];
  isLoading = true;
  scope = '';
  generated = false;
  errorMessage = '';

  constructor(private auditService: AuditService) {}

  ngOnInit(): void {
    this.auditService.getComplianceReports().subscribe({
      next: (d) => { this.reports = d || []; this.isLoading = false; },
      error: () => { this.errorMessage = 'Unable to load reports.'; this.isLoading = false; }
    });
  }

  generate(): void {
    this.generated = false;
    this.errorMessage = '';
    this.auditService.generateReport(this.scope).subscribe({
      next: (d) => { this.reports.unshift(d); this.generated = true; this.scope = ''; },
      error: () => { this.errorMessage = 'Failed to generate report.'; }
    });
  }

  downloadCSV(report: ComplianceReport): void {
    const csv = 'Report ID,Scope,Generated Date,Metrics\n' +
      report.compReportId + ',' + report.scope + ',' + report.generatedDate + ',"' + report.metrics + '"';
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'report_' + report.compReportId + '.csv'; a.click();
    URL.revokeObjectURL(url);
  }

  downloadPDF(report: ComplianceReport): void {
    const content = 'OpenBankX Compliance Report\n\nReport ID: ' + report.compReportId +
      '\nScope: ' + report.scope + '\nGenerated: ' + report.generatedDate + '\nMetrics: ' + report.metrics;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'report_' + report.compReportId + '.txt'; a.click();
    URL.revokeObjectURL(url);
  }
}
