import {
  AuditService
} from "./chunk-2OSPU4CJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IBGG5UE3.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6UHLKSNQ.js";

// src/app/compliance-portal/report-generation/report-generation.component.ts
function ReportGenerationComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2, " Report generated!");
    \u0275\u0275elementEnd();
  }
}
function ReportGenerationComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage);
  }
}
function ReportGenerationComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementEnd();
  }
}
function ReportGenerationComponent_table_24_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 25);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "button", 27);
    \u0275\u0275listener("click", function ReportGenerationComponent_table_24_tr_14_Template_button_click_11_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadCSV(r_r3));
    });
    \u0275\u0275element(12, "i", 28);
    \u0275\u0275text(13, " CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 29);
    \u0275\u0275listener("click", function ReportGenerationComponent_table_24_tr_14_Template_button_click_14_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadPDF(r_r3));
    });
    \u0275\u0275element(15, "i", 30);
    \u0275\u0275text(16, " PDF");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", r_r3.compReportId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.scope);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 4, r_r3.generatedDate, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.metrics);
  }
}
function ReportGenerationComponent_table_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 22)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Scope");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Generated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Metrics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Download");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, ReportGenerationComponent_table_24_tr_14_Template, 17, 7, "tr", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.reports);
  }
}
function ReportGenerationComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2, "No reports generated yet");
    \u0275\u0275elementEnd()();
  }
}
var ReportGenerationComponent = class _ReportGenerationComponent {
  auditService;
  reports = [];
  isLoading = true;
  scope = "";
  generated = false;
  errorMessage = "";
  constructor(auditService) {
    this.auditService = auditService;
  }
  ngOnInit() {
    this.auditService.getComplianceReports().subscribe({
      next: (d) => {
        this.reports = d || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load reports.";
        this.isLoading = false;
      }
    });
  }
  generate() {
    this.generated = false;
    this.errorMessage = "";
    this.auditService.generateReport(this.scope).subscribe({
      next: (d) => {
        this.reports.unshift(d);
        this.generated = true;
        this.scope = "";
      },
      error: () => {
        this.errorMessage = "Failed to generate report.";
      }
    });
  }
  downloadCSV(report) {
    const csv = "Report ID,Scope,Generated Date,Metrics\n" + report.compReportId + "," + report.scope + "," + report.generatedDate + ',"' + report.metrics + '"';
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "report_" + report.compReportId + ".csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  downloadPDF(report) {
    const content = "OpenBankX Compliance Report\n\nReport ID: " + report.compReportId + "\nScope: " + report.scope + "\nGenerated: " + report.generatedDate + "\nMetrics: " + report.metrics;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "report_" + report.compReportId + ".txt";
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function ReportGenerationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportGenerationComponent)(\u0275\u0275directiveInject(AuditService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportGenerationComponent, selectors: [["app-report-generation"]], decls: 26, vars: 6, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-file-alt"], [1, "page-subtitle"], [1, "glass-card", "mb-20", 2, "max-width", "480px"], [1, "mb-16"], [1, "form-group"], ["type", "text", "placeholder", "e.g., TPP-1 Q1 2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-file-export"], ["class", "alert alert-success mt-12", 4, "ngIf"], ["class", "alert alert-error mt-12", 4, "ngIf"], [1, "glass-card"], ["class", "loading-container", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "alert", "alert-success", "mt-12"], [1, "fas", "fa-check-circle"], [1, "alert", "alert-error", "mt-12"], [1, "fas", "fa-exclamation-circle"], [1, "loading-container"], [1, "spinner"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "font-mono"], [1, "text-sm"], [1, "text-sm", "font-mono"], ["title", "Download CSV", 1, "btn", "btn-secondary", "btn-xs", 3, "click"], [1, "fas", "fa-file-csv"], ["title", "Download PDF", 1, "btn", "btn-primary", "btn-xs", "ml-4", 3, "click"], [1, "fas", "fa-file-pdf"], [1, "empty-state"]], template: function ReportGenerationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Compliance Reports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Generate, view, and download regulatory compliance reports");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4)(9, "h3", 5);
      \u0275\u0275text(10, "Generate New Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6)(12, "label");
      \u0275\u0275text(13, "Report Scope");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ReportGenerationComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.scope, $event) || (ctx.scope = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "button", 8);
      \u0275\u0275listener("click", function ReportGenerationComponent_Template_button_click_15_listener() {
        return ctx.generate();
      });
      \u0275\u0275element(16, "i", 9);
      \u0275\u0275text(17, " Generate Report");
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, ReportGenerationComponent_div_18_Template, 3, 0, "div", 10)(19, ReportGenerationComponent_div_19_Template, 3, 1, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 12)(21, "h3", 5);
      \u0275\u0275text(22, "Existing Reports");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, ReportGenerationComponent_div_23_Template, 2, 0, "div", 13)(24, ReportGenerationComponent_table_24_Template, 15, 1, "table", 14)(25, ReportGenerationComponent_div_25_Template, 3, 0, "div", 15);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.scope);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.generated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.reports.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.reports.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n/*# sourceMappingURL=report-generation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportGenerationComponent, [{
    type: Component,
    args: [{ selector: "app-report-generation", standalone: true, imports: [CommonModule, FormsModule], template: `
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
  `, styles: ["/* src/app/compliance-portal/report-generation/report-generation.component.css */\n/*# sourceMappingURL=report-generation.component.css.map */\n"] }]
  }], () => [{ type: AuditService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportGenerationComponent, { className: "ReportGenerationComponent", filePath: "src/app/compliance-portal/report-generation/report-generation.component.ts", lineNumber: 49 });
})();
export {
  ReportGenerationComponent
};
//# sourceMappingURL=chunk-W7XG5KHL.js.map
