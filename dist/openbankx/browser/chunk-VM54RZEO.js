import {
  AuthService
} from "./chunk-WCVDOMTU.js";
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6UHLKSNQ.js";

// src/app/compliance-portal/sca-statistics/sca-statistics.component.ts
var _c0 = (a0) => ({ "background": a0 });
function ScaStatisticsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c0, stat_r1.gradient));
    \u0275\u0275advance();
    \u0275\u0275classMap(stat_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function ScaStatisticsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function ScaStatisticsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage);
  }
}
function ScaStatisticsComponent_table_15_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 25);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ev_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, ev_r3.eventTime, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ev_r3.user == null ? null : ev_r3.user.name) || "N/A");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ev_r3.method);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ev_r3.result === "PASS" ? "badge-pass" : "badge-fail");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ev_r3.result);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r3.referenceId);
  }
}
function ScaStatisticsComponent_table_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 21)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Result");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Reference");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, ScaStatisticsComponent_table_15_tr_14_Template, 14, 9, "tr", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.events);
  }
}
function ScaStatisticsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "p");
    \u0275\u0275text(2, "No SCA events recorded");
    \u0275\u0275elementEnd()();
  }
}
var ScaStatisticsComponent = class _ScaStatisticsComponent {
  authService;
  events = [];
  isLoading = true;
  errorMessage = "";
  stats = [
    { label: "Total SCA", value: "0", icon: "fas fa-shield-alt", gradient: "linear-gradient(135deg,#667eea,#764ba2)" },
    { label: "Pass Rate", value: "0%", icon: "fas fa-check", gradient: "linear-gradient(135deg,#10b981,#059669)" },
    { label: "Failures", value: "0", icon: "fas fa-times", gradient: "linear-gradient(135deg,#ef4444,#dc2626)" }
  ];
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this.authService.getScaEvents().subscribe({
      next: (d) => {
        this.events = d || [];
        this.stats[0].value = this.events.length.toString();
        const passes = this.events.filter((e) => e.result === "PASS").length;
        this.stats[1].value = this.events.length > 0 ? Math.round(passes / this.events.length * 100) + "%" : "0%";
        this.stats[2].value = (this.events.length - passes).toString();
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load SCA events.";
        this.isLoading = false;
      }
    });
  }
  static \u0275fac = function ScaStatisticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScaStatisticsComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScaStatisticsComponent, selectors: [["app-sca-statistics"]], decls: 17, vars: 5, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-chart-pie"], [1, "page-subtitle"], [1, "grid-3", "mb-20"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "glass-card"], [1, "mb-16"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "stat-card"], [1, "stat-icon", 3, "ngStyle"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "text-sm"], [1, "badge", "badge-info"], [1, "badge", 3, "ngClass"], [1, "font-mono", "text-sm"], [1, "empty-state"]], template: function ScaStatisticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " SCA Statistics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Strong Customer Authentication success/failure rates");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275template(9, ScaStatisticsComponent_div_9_Template, 8, 7, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "h3", 7);
      \u0275\u0275text(12, "Recent SCA Events");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, ScaStatisticsComponent_div_13_Template, 2, 0, "div", 8)(14, ScaStatisticsComponent_div_14_Template, 3, 1, "div", 9)(15, ScaStatisticsComponent_table_15_Template, 15, 1, "table", 10)(16, ScaStatisticsComponent_div_16_Template, 3, 0, "div", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.stats);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.events.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.events.length === 0 && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, DatePipe], styles: ["\n/*# sourceMappingURL=sca-statistics.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScaStatisticsComponent, [{
    type: Component,
    args: [{ selector: "app-sca-statistics", standalone: true, imports: [CommonModule], template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-chart-pie"></i> SCA Statistics</h1>
        <p class="page-subtitle">Strong Customer Authentication success/failure rates</p></div>
      </div>
      <div class="grid-3 mb-20">
        <div *ngFor="let stat of stats" class="stat-card">
          <div class="stat-icon" [ngStyle]="{ 'background': stat.gradient }"><i [class]="stat.icon"></i></div>
          <div class="stat-content"><div class="stat-value">{{ stat.value }}</div><div class="stat-label">{{ stat.label }}</div></div>
        </div>
      </div>
      <div class="glass-card">
        <h3 class="mb-16">Recent SCA Events</h3>
        <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>
        <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
        <table class="data-table" *ngIf="!isLoading && events.length > 0">
          <thead><tr><th>Time</th><th>User</th><th>Method</th><th>Result</th><th>Reference</th></tr></thead>
          <tbody>
            <tr *ngFor="let ev of events">
              <td class="text-sm">{{ ev.eventTime | date:'medium' }}</td>
              <td>{{ ev.user?.name || 'N/A' }}</td>
              <td><span class="badge badge-info">{{ ev.method }}</span></td>
              <td><span class="badge" [ngClass]="ev.result === 'PASS' ? 'badge-pass' : 'badge-fail'">{{ ev.result }}</span></td>
              <td class="font-mono text-sm">{{ ev.referenceId }}</td>
            </tr>
          </tbody>
        </table>
        <div class="empty-state" *ngIf="!isLoading && events.length === 0 && !errorMessage"><p>No SCA events recorded</p></div>
      </div>
    </div>
  `, styles: ["/* src/app/compliance-portal/sca-statistics/sca-statistics.component.css */\n/*# sourceMappingURL=sca-statistics.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScaStatisticsComponent, { className: "ScaStatisticsComponent", filePath: "src/app/compliance-portal/sca-statistics/sca-statistics.component.ts", lineNumber: 43 });
})();
export {
  ScaStatisticsComponent
};
//# sourceMappingURL=chunk-VM54RZEO.js.map
