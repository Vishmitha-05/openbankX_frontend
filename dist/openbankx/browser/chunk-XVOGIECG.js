import {
  MonitoringService
} from "./chunk-WTLHAO6Q.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6UHLKSNQ.js";

// src/app/operations-portal/api-health/api-health.component.ts
var _c0 = (a0) => ({ "background": a0 });
var _c1 = (a0, a1, a2) => ({ "badge-active": a0, "badge-pending": a1, "badge-revoked": a2 });
function ApiHealthComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage);
  }
}
function ApiHealthComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metric_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c0, metric_r2.gradient));
    \u0275\u0275advance();
    \u0275\u0275classMap(metric_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r2.label);
  }
}
function ApiHealthComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementEnd();
  }
}
function ApiHealthComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No activity logs yet");
    \u0275\u0275elementEnd()();
  }
}
function ApiHealthComponent_table_20_tr_16_strong_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appName_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(appName_r3);
  }
}
function ApiHealthComponent_table_20_tr_16_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2, " Internal ");
    \u0275\u0275elementEnd();
  }
}
function ApiHealthComponent_table_20_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275template(5, ApiHealthComponent_table_20_tr_16_strong_5_Template, 2, 1, "strong", 29)(6, ApiHealthComponent_table_20_tr_16_span_6_Template, 3, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 32);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 31);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 28);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 9, log_r4.timestamp, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.resolveAppName(log_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.resolveAppName(log_r4));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(12, _c1, log_r4.method === "GET", log_r4.method === "POST", log_r4.method === "DELETE"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r4.method);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r4.endpoint);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", log_r4.statusCode < 400 ? "badge-active" : "badge-revoked");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r4.statusCode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", log_r4.latencyMs, "ms");
  }
}
function ApiHealthComponent_table_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 26)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Timestamp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Endpoint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Latency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, ApiHealthComponent_table_20_tr_16_Template, 17, 16, "tr", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.logs);
  }
}
var ApiHealthComponent = class _ApiHealthComponent {
  monitoringService;
  errorMessage = "";
  isLoading = true;
  logs = [];
  metrics = [
    { label: "Total Requests", value: "\u2014", icon: "fas fa-bolt", gradient: "#0a2540" },
    { label: "Avg Latency", value: "\u2014", icon: "fas fa-clock", gradient: "#1e40af" },
    { label: "Error Rate", value: "\u2014", icon: "fas fa-bug", gradient: "#dc2626" },
    { label: "Incidents", value: "0", icon: "fas fa-exclamation-triangle", gradient: "#c79a2a" }
  ];
  constructor(monitoringService) {
    this.monitoringService = monitoringService;
  }
  ngOnInit() {
    this.monitoringService.getGatewayLogs().subscribe({
      next: (logs) => {
        this.logs = (logs || []).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        this.calculateMetrics();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = "Unable to load API logs.";
      }
    });
    this.monitoringService.getIncidents().subscribe({
      next: (incidents) => {
        if (incidents) {
          this.metrics[3].value = incidents.length.toString();
        }
      }
    });
  }
  resolveAppName(log) {
    return log.tppApp?.appName || log.appName || log.authClient?.tppApp?.appName || "";
  }
  calculateMetrics() {
    if (this.logs.length === 0)
      return;
    this.metrics[0].value = this.logs.length.toString();
    const avgLatency = this.logs.reduce((sum, l) => sum + (l.latencyMs || 0), 0) / this.logs.length;
    this.metrics[1].value = Math.round(avgLatency) + "ms";
    const errors = this.logs.filter((l) => l.statusCode >= 400).length;
    const errorRate = (errors / this.logs.length * 100).toFixed(1);
    this.metrics[2].value = errorRate + "%";
  }
  static \u0275fac = function ApiHealthComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiHealthComponent)(\u0275\u0275directiveInject(MonitoringService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApiHealthComponent, selectors: [["app-api-health"]], decls: 21, vars: 5, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-heartbeat"], [1, "page-subtitle"], [1, "badge", "badge-active"], [1, "fas", "fa-circle", 2, "font-size", "0.5rem"], ["class", "alert alert-error", 4, "ngIf"], [1, "grid-4", "mb-20"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "glass-card"], [1, "mb-16"], [1, "fas", "fa-list"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "stat-card"], [1, "stat-icon", 3, "ngStyle"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "loading-container"], [1, "spinner"], [1, "empty-state"], [1, "fas", "fa-inbox"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "text-sm"], [4, "ngIf"], ["class", "text-muted text-sm", 4, "ngIf"], [1, "badge", 3, "ngClass"], [1, "font-mono", "text-sm"], [1, "text-muted", "text-sm"], [1, "fas", "fa-server"]], template: function ApiHealthComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " API Health Monitor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Real-time system health and API activity logs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "span", 4);
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, " Live");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, ApiHealthComponent_div_11_Template, 3, 1, "div", 6);
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275template(13, ApiHealthComponent_div_13_Template, 8, 7, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "h3", 10);
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275text(17, " Recent API Activity");
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, ApiHealthComponent_div_18_Template, 2, 0, "div", 12)(19, ApiHealthComponent_div_19_Template, 4, 0, "div", 13)(20, ApiHealthComponent_table_20_Template, 17, 1, "table", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.metrics);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.logs.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.logs.length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, DatePipe], styles: ["\n.gauge-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 5px;\n  overflow: hidden;\n}\n.gauge-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);\n}\n/*# sourceMappingURL=api-health.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiHealthComponent, [{
    type: Component,
    args: [{ selector: "app-api-health", standalone: true, imports: [CommonModule], template: `
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
  `, styles: ["/* src/app/operations-portal/api-health/api-health.component.css */\n.gauge-bar {\n  height: 10px;\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 5px;\n  overflow: hidden;\n}\n.gauge-fill {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);\n}\n/*# sourceMappingURL=api-health.component.css.map */\n"] }]
  }], () => [{ type: MonitoringService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiHealthComponent, { className: "ApiHealthComponent", filePath: "src/app/operations-portal/api-health/api-health.component.ts", lineNumber: 73 });
})();
export {
  ApiHealthComponent
};
//# sourceMappingURL=chunk-XVOGIECG.js.map
