import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IBGG5UE3.js";
import {
  TppService
} from "./chunk-KSBPVTDW.js";
import {
  AuthService
} from "./chunk-WCVDOMTU.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  NgStyle,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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

// src/app/developer-portal/usage-analytics/usage-analytics.component.ts
var _c0 = (a0) => ({ "background": a0 });
var _c1 = (a0, a1) => ({ "width": a0, "background": a1 });
function UsageAnalyticsComponent_div_8_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275property("value", a_r3.tppAppId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.appName);
  }
}
function UsageAnalyticsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function UsageAnalyticsComponent_div_8_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAppId, $event) || (ctx_r1.selectedAppId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function UsageAnalyticsComponent_div_8_Template_select_change_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadStats());
    });
    \u0275\u0275template(2, UsageAnalyticsComponent_div_8_option_2_Template, 2, 2, "option", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedAppId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.apps);
  }
}
function UsageAnalyticsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading analytics...");
    \u0275\u0275elementEnd()();
  }
}
function UsageAnalyticsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function UsageAnalyticsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "You have no applications yet. Register an app to see analytics.");
    \u0275\u0275elementEnd()();
  }
}
function UsageAnalyticsComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25)(4, "div", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c0, stat_r4.gradient));
    \u0275\u0275advance();
    \u0275\u0275classMap(stat_r4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.label);
  }
}
function UsageAnalyticsComponent_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275element(4, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(3, _c1, bar_r5.percent + "%", bar_r5.color));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r5.value);
  }
}
function UsageAnalyticsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 17);
    \u0275\u0275template(2, UsageAnalyticsComponent_div_12_div_2_Template, 8, 7, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "h3", 20);
    \u0275\u0275text(5, "API Calls Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275template(7, UsageAnalyticsComponent_div_12_div_7_Template, 7, 6, "div", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.statCards);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.barData);
  }
}
var UsageAnalyticsComponent = class _UsageAnalyticsComponent {
  tppService;
  authService;
  isLoading = true;
  errorMessage = "";
  apps = [];
  selectedAppId = null;
  statCards = [
    { label: "Total Calls", value: "0", icon: "fas fa-exchange-alt", gradient: "#0a2540" },
    { label: "Errors", value: "0", icon: "fas fa-bug", gradient: "#dc2626" },
    { label: "Error Rate", value: "0%", icon: "fas fa-percent", gradient: "#d97706" },
    { label: "Avg Latency", value: "0ms", icon: "fas fa-clock", gradient: "#16a34a" }
  ];
  barData = [
    { label: "/accounts", value: "0", percent: 0, color: "#1e40af" },
    { label: "/balances", value: "0", percent: 0, color: "#16a34a" },
    { label: "/transactions", value: "0", percent: 0, color: "#d97706" },
    { label: "/payments", value: "0", percent: 0, color: "#dc2626" },
    { label: "/funds-check", value: "0", percent: 0, color: "#0e7490" }
  ];
  constructor(tppService, authService) {
    this.tppService = tppService;
    this.authService = authService;
  }
  ngOnInit() {
    this.tppService.getMyApps(this.authService.getEmail()).subscribe({
      next: (apps) => {
        this.apps = apps || [];
        if (this.apps.length === 0) {
          this.isLoading = false;
          return;
        }
        this.selectedAppId = this.apps[0].tppAppId;
        this.loadStats();
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = "Unable to load applications.";
      }
    });
  }
  loadStats() {
    if (!this.selectedAppId) {
      this.isLoading = false;
      return;
    }
    this.isLoading = true;
    this.tppService.getAppStats(this.selectedAppId).subscribe({
      next: (d) => {
        if (d) {
          this.statCards[0].value = (d.totalApiCalls || 0).toLocaleString();
          this.statCards[1].value = (d.errorCalls || 0).toLocaleString();
          this.statCards[2].value = d.errorRate || "0%";
          this.statCards[3].value = (d.avgLatencyMs || 0) + "ms";
          this.updateBars(d.totalApiCalls || 0);
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.resetStats();
      }
    });
  }
  resetStats() {
    this.statCards[0].value = "0";
    this.statCards[1].value = "0";
    this.statCards[2].value = "0%";
    this.statCards[3].value = "0ms";
    this.updateBars(0);
  }
  updateBars(total) {
    const shares = [0.4, 0.25, 0.2, 0.1, 0.05];
    const percents = [40, 25, 20, 10, 5];
    for (let i = 0; i < this.barData.length; i++) {
      this.barData[i] = __spreadProps(__spreadValues({}, this.barData[i]), {
        value: Math.floor(total * shares[i]) + "",
        percent: total > 0 ? percents[i] : 0
      });
    }
  }
  static \u0275fac = function UsageAnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsageAnalyticsComponent)(\u0275\u0275directiveInject(TppService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsageAnalyticsComponent, selectors: [["app-usage-analytics"]], decls: 13, vars: 5, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-chart-bar"], [1, "page-subtitle"], [4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "empty-state"], [1, "fas", "fa-cube"], [1, "grid-4", "mb-20"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "glass-card"], [1, "mb-16"], [1, "bar-chart"], ["class", "bar-item", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "stat-icon", 3, "ngStyle"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "bar-item"], [1, "bar-label", "text-sm"], [1, "bar-track"], [1, "bar-fill", 3, "ngStyle"], [1, "bar-value", "text-sm", "text-muted"]], template: function UsageAnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Usage Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "API call statistics for your applications");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, UsageAnalyticsComponent_div_8_Template, 3, 2, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, UsageAnalyticsComponent_div_9_Template, 4, 0, "div", 5)(10, UsageAnalyticsComponent_div_10_Template, 3, 1, "div", 6)(11, UsageAnalyticsComponent_div_11_Template, 4, 0, "div", 7)(12, UsageAnalyticsComponent_div_12_Template, 8, 2, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.apps.length > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.apps.length === 0 && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.apps.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.bar-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr 60px;\n  align-items: center;\n  gap: 12px;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 24px;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n}\n/*# sourceMappingURL=usage-analytics.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsageAnalyticsComponent, [{
    type: Component,
    args: [{ selector: "app-usage-analytics", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-chart-bar"></i> Usage Analytics</h1>
          <p class="page-subtitle">API call statistics for your applications</p>
        </div>

        <div *ngIf="apps.length > 1">
          <select class="form-control" [(ngModel)]="selectedAppId" (change)="loadStats()">
            <option *ngFor="let a of apps" [value]="a.tppAppId">{{ a.appName }}</option>
          </select>
        </div>
      </div>

      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading analytics...</span>
      </div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div class="empty-state" *ngIf="!isLoading && apps.length === 0 && !errorMessage">
        <i class="fas fa-cube"></i>
        <p>You have no applications yet. Register an app to see analytics.</p>
      </div>

      <div *ngIf="!isLoading && apps.length > 0">
        <div class="grid-4 mb-20">
          <div *ngFor="let stat of statCards" class="stat-card">
            <div class="stat-icon" [ngStyle]="{ 'background': stat.gradient }">
              <i [class]="stat.icon"></i>
            </div>
            <div class="stat-content">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div class="glass-card">
          <h3 class="mb-16">API Calls Distribution</h3>
          <div class="bar-chart">
            <div *ngFor="let bar of barData" class="bar-item">
              <div class="bar-label text-sm">{{ bar.label }}</div>
              <div class="bar-track">
                <div class="bar-fill" [ngStyle]="{ 'width': bar.percent + '%', 'background': bar.color }"></div>
              </div>
              <div class="bar-value text-sm text-muted">{{ bar.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/developer-portal/usage-analytics/usage-analytics.component.css */\n.bar-chart {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.bar-item {\n  display: grid;\n  grid-template-columns: 120px 1fr 60px;\n  align-items: center;\n  gap: 12px;\n}\n.bar-track {\n  height: 24px;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 6px;\n  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n}\n/*# sourceMappingURL=usage-analytics.component.css.map */\n"] }]
  }], () => [{ type: TppService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsageAnalyticsComponent, { className: "UsageAnalyticsComponent", filePath: "src/app/developer-portal/usage-analytics/usage-analytics.component.ts", lineNumber: 71 });
})();
export {
  UsageAnalyticsComponent
};
//# sourceMappingURL=chunk-G4P56SMX.js.map
