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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6UHLKSNQ.js";

// src/app/operations-portal/throttle-log/throttle-log.component.ts
function ThrottleLogComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function ThrottleLogComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage);
  }
}
function ThrottleLogComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No throttle events recorded");
    \u0275\u0275elementEnd()();
  }
}
function ThrottleLogComponent_div_10_table_2_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 18);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, log_r2.timestamp, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((log_r2.tppApp == null ? null : log_r2.tppApp.appName) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r2.endpoint);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r2.method);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", log_r2.statusCode === 429 ? "badge-revoked" : log_r2.statusCode < 400 ? "badge-active" : "badge-pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r2.statusCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", log_r2.latencyMs, "ms");
  }
}
function ThrottleLogComponent_div_10_table_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 16)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Timestamp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Endpoint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Latency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, ThrottleLogComponent_div_10_table_2_tr_16_Template, 16, 10, "tr", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.logs);
  }
}
function ThrottleLogComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, ThrottleLogComponent_div_10_div_1_Template, 4, 0, "div", 12)(2, ThrottleLogComponent_div_10_table_2_Template, 17, 1, "table", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.logs.length === 0 && !ctx_r0.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.logs.length > 0);
  }
}
var ThrottleLogComponent = class _ThrottleLogComponent {
  monitoringService;
  logs = [];
  isLoading = true;
  errorMessage = "";
  constructor(monitoringService) {
    this.monitoringService = monitoringService;
  }
  ngOnInit() {
    this.monitoringService.getGatewayLogs().subscribe({
      next: (d) => {
        this.logs = d || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load throttle logs.";
        this.isLoading = false;
      }
    });
  }
  static \u0275fac = function ThrottleLogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThrottleLogComponent)(\u0275\u0275directiveInject(MonitoringService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThrottleLogComponent, selectors: [["app-throttle-log"]], decls: 11, vars: 3, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-tachometer-alt"], [1, "page-subtitle"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "glass-card", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "glass-card"], ["class", "empty-state", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], [1, "empty-state"], [1, "fas", "fa-check-circle"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "text-sm"], [1, "font-mono", "text-sm"], [1, "badge", "badge-info"], [1, "badge", 3, "ngClass"]], template: function ThrottleLogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Throttle Log");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Rate-limited requests and throttle events");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, ThrottleLogComponent_div_8_Template, 2, 0, "div", 4)(9, ThrottleLogComponent_div_9_Template, 3, 1, "div", 5)(10, ThrottleLogComponent_div_10_Template, 3, 2, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe], styles: ["\n/*# sourceMappingURL=throttle-log.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThrottleLogComponent, [{
    type: Component,
    args: [{ selector: "app-throttle-log", standalone: true, imports: [CommonModule], template: `
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
  `, styles: ["/* src/app/operations-portal/throttle-log/throttle-log.component.css */\n/*# sourceMappingURL=throttle-log.component.css.map */\n"] }]
  }], () => [{ type: MonitoringService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThrottleLogComponent, { className: "ThrottleLogComponent", filePath: "src/app/operations-portal/throttle-log/throttle-log.component.ts", lineNumber: 39 });
})();
export {
  ThrottleLogComponent
};
//# sourceMappingURL=chunk-3PWTG2IG.js.map
