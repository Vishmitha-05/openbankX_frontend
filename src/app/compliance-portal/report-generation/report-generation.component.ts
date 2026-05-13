import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuditService } from '../../core/services/audit.service';
import { ComplianceReport } from '../../core/models/models';

@Component({
  selector: 'app-report-generation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './report-generation.component.html',
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
