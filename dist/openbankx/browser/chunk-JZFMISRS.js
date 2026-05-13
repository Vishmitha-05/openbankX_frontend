import {
  ProductService
} from "./chunk-BXXXGKD4.js";
import {
  TppService
} from "./chunk-KSBPVTDW.js";
import {
  AuthService
} from "./chunk-WCVDOMTU.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-QS26HGQT.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6UHLKSNQ.js";

// src/app/developer-portal/dashboard/dashboard.component.ts
var _c0 = (a0) => ({ "background": a0 });
var _c1 = (a0, a1, a2) => ({ "badge-approved": a0, "badge-pending": a1, "badge-revoked": a2 });
var _c2 = (a0) => ["/developer/apps", a0, "keys"];
var _c3 = (a0, a1, a2) => ({ "badge-active": a0, "badge-revoked": a1, "badge-expired": a2 });
var _c4 = (a0, a1, a2) => ({ "badge-sandbox": a0, "badge-production": a1, "badge-suspended": a2 });
function DashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading dashboard...");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function DashboardComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c0, stat_r2.gradient));
    \u0275\u0275advance();
    \u0275\u0275classMap(stat_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.label);
  }
}
function DashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, DashboardComponent_div_12_div_1_Template, 8, 7, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.stats);
  }
}
function DashboardComponent_div_13_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No applications registered yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 28);
    \u0275\u0275text(5, "Register Your First App");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_13_table_7_tr_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scope_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", scope_r3, " ");
  }
}
function DashboardComponent_div_13_table_7_tr_16_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_13_table_7_tr_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sub_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", (sub_r4.apiPlan == null ? null : sub_r4.apiPlan.environment) === "SANDBOX" ? "badge-sandbox" : "badge-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sub_r4.apiPlan == null ? null : sub_r4.apiPlan.environment, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((sub_r4.apiPlan == null ? null : sub_r4.apiPlan.apiProduct == null ? null : sub_r4.apiPlan.apiProduct.name) || "Plan");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c3, sub_r4.status === "ACTIVE", sub_r4.status === "SUSPENDED", sub_r4.status === "CANCELLED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sub_r4.status);
  }
}
function DashboardComponent_div_13_table_7_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 31)(3, "div", 32);
    \u0275\u0275element(4, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, DashboardComponent_div_13_table_7_tr_16_span_10_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, DashboardComponent_div_13_table_7_tr_16_div_15_Template, 2, 0, "div", 36)(16, DashboardComponent_div_13_table_7_tr_16_div_16_Template, 7, 9, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "a", 38);
    \u0275\u0275element(19, "i", 39);
    \u0275\u0275text(20, " Keys ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(app_r5.appName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r5.tpp.legalName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.parseScopes(app_r5.scopesRequested));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(8, _c1, app_r5.status === "APPROVED", app_r5.status === "PENDING", app_r5.status === "REJECTED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", app_r5.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getSubscriptionsFor(app_r5.tppAppId).length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.getSubscriptionsFor(app_r5.tppAppId));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c2, app_r5.tppAppId));
  }
}
function DashboardComponent_div_13_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 29)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "App Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "TPP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Scopes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Subscriptions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, DashboardComponent_div_13_table_7_tr_16_Template, 21, 14, "tr", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.apps);
  }
}
function DashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "h3");
    \u0275\u0275text(3, "My Applications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, DashboardComponent_div_13_div_6_Template, 6, 0, "div", 24)(7, DashboardComponent_div_13_table_7_Template, 17, 1, "table", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.apps.length, " apps");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.apps.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.apps.length > 0);
  }
}
function DashboardComponent_div_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No TPP companies registered yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 46);
    \u0275\u0275text(5, "Register TPP Company");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_14_table_7_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 31)(3, "div", 32);
    \u0275\u0275element(4, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tpp_r6 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(tpp_r6.legalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tpp_r6.registrationNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(4, _c4, tpp_r6.status === "SANDBOX", tpp_r6.status === "PRODUCTION", tpp_r6.status === "SUSPENDED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tpp_r6.status, " ");
  }
}
function DashboardComponent_div_14_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 29)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Registration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275template(10, DashboardComponent_div_14_table_7_tr_10_Template, 12, 8, "tr", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r0.tpps);
  }
}
function DashboardComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 22)(2, "h3");
    \u0275\u0275text(3, "TPP Companies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, DashboardComponent_div_14_div_6_Template, 6, 0, "div", 24)(7, DashboardComponent_div_14_table_7_Template, 11, 1, "table", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.tpps.length, " companies");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tpps.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tpps.length > 0);
  }
}
var DashboardComponent = class _DashboardComponent {
  tppService;
  productService;
  authService;
  apps = [];
  tpps = [];
  subscriptionsByApp = {};
  userName = "";
  isLoading = true;
  errorMessage = "";
  stats = [
    { label: "Total Apps", value: "0", icon: "fas fa-cube", gradient: "#0a2540" },
    { label: "API Calls", value: "0", icon: "fas fa-exchange-alt", gradient: "#1e40af" },
    { label: "Error Rate", value: "0%", icon: "fas fa-bug", gradient: "#dc2626" },
    { label: "Avg Latency", value: "0ms", icon: "fas fa-clock", gradient: "#c79a2a" }
  ];
  constructor(tppService, productService, authService) {
    this.tppService = tppService;
    this.productService = productService;
    this.authService = authService;
  }
  ngOnInit() {
    this.userName = this.authService.getName();
    this.loadApps();
    this.loadTpps();
  }
  loadApps() {
    this.tppService.getMyApps(this.authService.getEmail()).subscribe({
      next: (data) => {
        this.apps = data || [];
        this.stats[0].value = this.apps.length.toString();
        if (this.apps.length > 0) {
          this.tppService.getAppStats(this.apps[0].tppAppId).subscribe({
            next: (statsData) => {
              this.stats[1].value = statsData.totalApiCalls.toLocaleString();
              this.stats[2].value = statsData.errorRate;
              this.stats[3].value = statsData.avgLatencyMs + "ms";
            },
            error: () => {
            }
          });
          for (const app of this.apps) {
            this.productService.getSubscriptionsByApp(app.tppAppId).subscribe({
              next: (subs) => {
                this.subscriptionsByApp[app.tppAppId] = subs || [];
              },
              error: () => {
                this.subscriptionsByApp[app.tppAppId] = [];
              }
            });
          }
        }
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load apps. Please ensure the backend is running.";
        this.isLoading = false;
      }
    });
  }
  getSubscriptionsFor(appId) {
    return this.subscriptionsByApp[appId] || [];
  }
  loadTpps() {
    this.tppService.getMyTpps(this.authService.getEmail()).subscribe({
      next: (data) => {
        this.tpps = data || [];
      },
      error: () => {
      }
    });
  }
  parseScopes(scopeStr) {
    try {
      return JSON.parse(scopeStr);
    } catch {
      return [];
    }
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(TppService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 15, vars: 6, consts: [[1, "page-content"], [1, "page-header"], [1, "page-subtitle"], ["routerLink", "/developer/apps/new", 1, "btn", "btn-primary"], [1, "fas", "fa-plus"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "grid-4 mb-20", 4, "ngIf"], ["class", "glass-card", 4, "ngIf"], ["class", "glass-card mt-20", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "grid-4", "mb-20"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "stat-icon", 3, "ngStyle"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "glass-card"], [1, "flex", "items-center", "justify-between", "mb-16"], [1, "badge", "badge-info"], ["class", "empty-state", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], [1, "empty-state"], [1, "fas", "fa-cube"], ["routerLink", "/developer/apps/new", 1, "btn", "btn-primary", "btn-sm", "mt-12"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-8"], [1, "app-icon-sm"], [1, "text-muted"], ["class", "scope-pill", 4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], ["class", "text-sm text-muted", 4, "ngIf"], ["style", "display:flex; gap:6px; align-items:center; padding:2px 0; font-size:0.8rem;", 4, "ngFor", "ngForOf"], [1, "btn", "btn-secondary", "btn-sm", 3, "routerLink"], [1, "fas", "fa-key"], [1, "scope-pill"], [1, "text-sm", "text-muted"], [2, "display", "flex", "gap", "6px", "align-items", "center", "padding", "2px 0", "font-size", "0.8rem"], [1, "badge", 2, "font-size", "0.65rem", 3, "ngClass"], [1, "glass-card", "mt-20"], [1, "fas", "fa-building"], ["routerLink", "/developer/tpp/register", 1, "btn", "btn-primary", "btn-sm", "mt-12"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6, "Here's an overview of your apps and API usage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275element(8, "i", 4);
      \u0275\u0275text(9, " Register New App ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, DashboardComponent_div_10_Template, 4, 0, "div", 5)(11, DashboardComponent_div_11_Template, 3, 1, "div", 6)(12, DashboardComponent_div_12_Template, 2, 1, "div", 7)(13, DashboardComponent_div_13_Template, 8, 3, "div", 8)(14, DashboardComponent_div_14_Template, 8, 3, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Welcome back, ", ctx.userName || "Developer");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, RouterModule, RouterLink], styles: ["\n.app-icon-sm[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--accent-blue);\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1>Welcome back, {{ userName || 'Developer' }}</h1>
          <p class="page-subtitle">Here's an overview of your apps and API usage</p>
        </div>
        <a routerLink="/developer/apps/new" class="btn btn-primary">
          <i class="fas fa-plus"></i> Register New App
        </a>
      </div>

      <!-- Loading State -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading dashboard...</span>
      </div>

      <!-- Error State -->
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <!-- Stats Grid -->
      <div class="grid-4 mb-20" *ngIf="!isLoading">
        <div *ngFor="let stat of stats" class="stat-card">
          <div class="stat-icon" [ngStyle]="{ 'background': stat.gradient }">
            <i [class]="stat.icon"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- My Apps Table -->
      <div class="glass-card" *ngIf="!isLoading">
        <div class="flex items-center justify-between mb-16">
          <h3>My Applications</h3>
          <span class="badge badge-info">{{ apps.length }} apps</span>
        </div>

        <!-- Empty State -->
        <div class="empty-state" *ngIf="apps.length === 0">
          <i class="fas fa-cube"></i>
          <p>No applications registered yet.</p>
          <a routerLink="/developer/apps/new" class="btn btn-primary btn-sm mt-12">Register Your First App</a>
        </div>

        <!-- App Table -->
        <table class="data-table" *ngIf="apps.length > 0">
          <thead>
            <tr>
              <th>App Name</th>
              <th>TPP</th>
              <th>Scopes</th>
              <th>Status</th>
              <th>Subscriptions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let app of apps">
              <td>
                <div class="flex items-center gap-8">
                  <div class="app-icon-sm">
                    <i class="fas fa-cube"></i>
                  </div>
                  <strong>{{ app.appName }}</strong>
                </div>
              </td>
              <td class="text-muted">{{ app.tpp.legalName || 'N/A' }}</td>
              <td>
                <span *ngFor="let scope of parseScopes(app.scopesRequested)" class="scope-pill">
                  {{ scope }}
                </span>
              </td>
              <td>
                <span class="badge"
                      [ngClass]="{
                        'badge-approved': app.status === 'APPROVED',
                        'badge-pending': app.status === 'PENDING',
                        'badge-revoked': app.status === 'REJECTED'
                      }">
                  {{ app.status }}
                </span>
              </td>
              <td>
                <div *ngIf="getSubscriptionsFor(app.tppAppId).length === 0" class="text-sm text-muted">\u2014</div>
                <div *ngFor="let sub of getSubscriptionsFor(app.tppAppId)"
                     style="display:flex; gap:6px; align-items:center; padding:2px 0; font-size:0.8rem;">
                  <span class="badge"
                        [ngClass]="sub.apiPlan?.environment === 'SANDBOX' ? 'badge-sandbox' : 'badge-info'"
                        style="font-size:0.65rem">
                    {{ sub.apiPlan?.environment }}
                  </span>
                  <span>{{ sub.apiPlan?.apiProduct?.name || 'Plan' }}</span>
                  <span class="badge"
                        [ngClass]="{
                          'badge-active': sub.status === 'ACTIVE',
                          'badge-revoked': sub.status === 'SUSPENDED',
                          'badge-expired': sub.status === 'CANCELLED'
                        }"
                        style="font-size:0.65rem">{{ sub.status }}</span>
                </div>
              </td>
              <td>
                <a [routerLink]="['/developer/apps', app.tppAppId, 'keys']" class="btn btn-secondary btn-sm">
                  <i class="fas fa-key"></i> Keys
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="glass-card mt-20" *ngIf="!isLoading">
        <div class="flex items-center justify-between mb-16">
          <h3>TPP Companies</h3>
          <span class="badge badge-info">{{ tpps.length }} companies</span>
        </div>

        <!-- Empty State -->
        <div class="empty-state" *ngIf="tpps.length === 0">
          <i class="fas fa-building"></i>
          <p>No TPP companies registered yet.</p>
          <a routerLink="/developer/tpp/register" class="btn btn-primary btn-sm mt-12">Register TPP Company</a>
        </div>

        <!-- TPP Table -->
        <table class="data-table" *ngIf="tpps.length > 0">
          <thead>
            <tr>
              <th>Company</th>
              <th>Registration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let tpp of tpps">
              <td>
                <div class="flex items-center gap-8">
                  <div class="app-icon-sm">
                    <i class="fas fa-building"></i>
                  </div>
                  <strong>{{ tpp.legalName }}</strong>
                </div>
              </td>
              <td>{{ tpp.registrationNumber }}</td>
              <td>
                <span class="badge"
                      [ngClass]="{
                        'badge-sandbox': tpp.status === 'SANDBOX',
                        'badge-production': tpp.status === 'PRODUCTION',
                        'badge-suspended': tpp.status === 'SUSPENDED'
                      }">
                  {{ tpp.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `, styles: ["/* src/app/developer-portal/dashboard/dashboard.component.css */\n.app-icon-sm {\n  width: 32px;\n  height: 32px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--accent-blue);\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], () => [{ type: TppService }, { type: ProductService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/developer-portal/dashboard/dashboard.component.ts", lineNumber: 183 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-JZFMISRS.js.map
