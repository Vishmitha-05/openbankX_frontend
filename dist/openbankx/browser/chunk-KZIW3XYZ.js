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
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6UHLKSNQ.js";

// src/app/developer-portal/app-list/app-list.component.ts
var _c0 = (a0) => ({ "animation-delay": a0 });
var _c1 = (a0) => ({ "background": a0 });
var _c2 = (a0, a1, a2) => ({ "badge-approved": a0, "badge-pending": a1, "badge-rejected": a2 });
var _c3 = (a0) => ["/developer/apps", a0, "keys"];
var _c4 = (a0, a1) => ({ "badge-active": a0, "badge-revoked": a1 });
function AppListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading apps...");
    \u0275\u0275elementEnd()();
  }
}
function AppListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function AppListComponent_div_12_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scope_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", scope_r2, " ");
  }
}
function AppListComponent_div_12_div_1_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 39)(10, "span", 31);
    \u0275\u0275element(11, "i", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 31);
    \u0275\u0275element(14, "i", 41);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sub_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", (sub_r3.apiPlan == null ? null : sub_r3.apiPlan.environment) === "SANDBOX" ? "badge-info" : "badge-active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sub_r3.apiPlan == null ? null : sub_r3.apiPlan.environment, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((sub_r3.apiPlan == null ? null : sub_r3.apiPlan.apiProduct == null ? null : sub_r3.apiPlan.apiProduct.name) || "Product");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c4, sub_r3.status === "ACTIVE", sub_r3.status === "SUSPENDED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sub_r3.status);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", sub_r3.apiPlan == null ? null : sub_r3.apiPlan.rateLimitPerMin, "/min");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Expires: ", \u0275\u0275pipeBind2(16, 7, sub_r3.expiryDate, "mediumDate"));
  }
}
function AppListComponent_div_12_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "label", 31);
    \u0275\u0275element(2, "i", 32);
    \u0275\u0275text(3, " Subscriptions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppListComponent_div_12_div_1_div_12_div_4_Template, 17, 13, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.appSubscriptions[app_r4.tppAppId]);
  }
}
function AppListComponent_div_12_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "p", 31);
    \u0275\u0275element(2, "i", 42);
    \u0275\u0275text(3, " No subscriptions yet");
    \u0275\u0275elementEnd()();
  }
}
function AppListComponent_div_12_div_1_a_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2, " Subscribe ");
    \u0275\u0275elementEnd();
  }
}
function AppListComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 22);
    \u0275\u0275template(11, AppListComponent_div_12_div_1_span_11_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AppListComponent_div_12_div_1_div_12_Template, 5, 1, "div", 24)(13, AppListComponent_div_12_div_1_div_13_Template, 4, 0, "div", 24);
    \u0275\u0275elementStart(14, "div", 25)(15, "a", 26);
    \u0275\u0275element(16, "i", 27);
    \u0275\u0275text(17, " Keys ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AppListComponent_div_12_div_1_a_18_Template, 3, 0, "a", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(11, _c0, i_r5 * 0.05 + "s"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(13, _c1, ctx_r0.getAppColor(i_r5)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(15, _c2, app_r4.status === "APPROVED", app_r4.status === "PENDING", app_r4.status === "REJECTED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", app_r4.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r4.appName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((app_r4.tpp == null ? null : app_r4.tpp.legalName) || "Unknown TPP");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.parseScopes(app_r4.scopesRequested));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.appSubscriptions[app_r4.tppAppId] == null ? null : ctx_r0.appSubscriptions[app_r4.tppAppId].length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.appSubscriptions[app_r4.tppAppId] || (ctx_r0.appSubscriptions[app_r4.tppAppId] == null ? null : ctx_r0.appSubscriptions[app_r4.tppAppId].length) === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c3, app_r4.tppAppId));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", app_r4.status === "APPROVED");
  }
}
function AppListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, AppListComponent_div_12_div_1_Template, 19, 21, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.apps);
  }
}
function AppListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No applications registered yet");
    \u0275\u0275elementEnd()();
  }
}
var AppListComponent = class _AppListComponent {
  tppService;
  productService;
  authService;
  apps = [];
  appSubscriptions = {};
  isLoading = true;
  errorMessage = "";
  colors = [
    "#0a2540",
    "#1e40af",
    "#c79a2a",
    "#0e7490",
    "#16a34a"
  ];
  constructor(tppService, productService, authService) {
    this.tppService = tppService;
    this.productService = productService;
    this.authService = authService;
  }
  ngOnInit() {
    this.tppService.getMyApps(this.authService.getEmail()).subscribe({
      next: (data) => {
        this.apps = data || [];
        this.isLoading = false;
        for (const app of this.apps) {
          this.productService.getSubscriptionsByApp(app.tppAppId).subscribe({
            next: (subs) => {
              this.appSubscriptions[app.tppAppId] = subs || [];
            },
            error: () => {
              this.appSubscriptions[app.tppAppId] = [];
            }
          });
        }
      },
      error: () => {
        this.errorMessage = "Unable to load applications.";
        this.isLoading = false;
      }
    });
  }
  parseScopes(str) {
    try {
      return JSON.parse(str);
    } catch {
      return [];
    }
  }
  getAppColor(index) {
    return this.colors[index % this.colors.length];
  }
  static \u0275fac = function AppListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppListComponent)(\u0275\u0275directiveInject(TppService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppListComponent, selectors: [["app-app-list"]], decls: 14, vars: 4, consts: [[1, "page-content"], [1, "page-header"], [1, "page-subtitle"], ["routerLink", "/developer/apps/new", 1, "btn", "btn-primary"], [1, "fas", "fa-plus"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "grid-2", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "grid-2"], ["class", "glass-card app-card", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "glass-card", "app-card", 3, "ngStyle"], [1, "app-card-header"], [1, "app-icon", 3, "ngStyle"], [1, "fas", "fa-cube"], [1, "badge", 3, "ngClass"], [1, "mt-8"], [1, "text-sm", "text-muted", "mt-4"], [1, "app-scopes", "mt-12"], ["class", "scope-pill", 4, "ngFor", "ngForOf"], ["class", "mt-12", 4, "ngIf"], [1, "app-actions", "mt-16", "flex", "gap-8"], [1, "btn", "btn-secondary", "btn-sm", 3, "routerLink"], [1, "fas", "fa-key"], ["routerLink", "/developer/subscribe", "class", "btn btn-primary btn-sm", 4, "ngIf"], [1, "scope-pill"], [1, "mt-12"], [1, "text-sm", "text-muted"], [1, "fas", "fa-clipboard-list"], ["class", "mt-4", "style", "background:rgba(255,255,255,0.04); border-radius:8px; padding:8px 12px;", 4, "ngFor", "ngForOf"], [1, "mt-4", 2, "background", "rgba(255,255,255,0.04)", "border-radius", "8px", "padding", "8px 12px"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-8"], [1, "badge", 2, "font-size", "0.7rem", 3, "ngClass"], [1, "text-sm"], [1, "flex", "items-center", "gap-12", "mt-4"], [1, "fas", "fa-tachometer-alt"], [1, "fas", "fa-calendar"], [1, "fas", "fa-info-circle"], ["routerLink", "/developer/subscribe", 1, "btn", "btn-primary", "btn-sm"], [1, "fas", "fa-plug"], [1, "empty-state"]], template: function AppListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "My Applications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6, "Manage all your registered TPP applications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275element(8, "i", 4);
      \u0275\u0275text(9, " New App ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, AppListComponent_div_10_Template, 4, 0, "div", 5)(11, AppListComponent_div_11_Template, 3, 1, "div", 6)(12, AppListComponent_div_12_Template, 2, 1, "div", 7)(13, AppListComponent_div_13_Template, 4, 0, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.apps.length === 0 && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, RouterModule, RouterLink, DatePipe], styles: ["\n.app-card[_ngcontent-%COMP%] {\n  animation: fadeInUp 0.4s ease both;\n}\n.app-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.app-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.1rem;\n}\n.app-scopes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.app-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n/*# sourceMappingURL=app-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppListComponent, [{
    type: Component,
    args: [{ selector: "app-app-list", standalone: true, imports: [CommonModule, RouterModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1>My Applications</h1>
          <p class="page-subtitle">Manage all your registered TPP applications</p>
        </div>
        <a routerLink="/developer/apps/new" class="btn btn-primary">
          <i class="fas fa-plus"></i> New App
        </a>
      </div>

      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading apps...</span>
      </div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <!-- App Cards Grid -->
      <div class="grid-2" *ngIf="!isLoading">
        <div *ngFor="let app of apps; let i = index"
             class="glass-card app-card"
             [ngStyle]="{ 'animation-delay': (i * 0.05) + 's' }">
          <div class="app-card-header">
            <div class="app-icon" [ngStyle]="{ 'background': getAppColor(i) }">
              <i class="fas fa-cube"></i>
            </div>
            <span class="badge"
                  [ngClass]="{
                    'badge-approved': app.status === 'APPROVED',
                    'badge-pending': app.status === 'PENDING',
                    'badge-rejected': app.status === 'REJECTED'
                  }">
              {{ app.status }}
            </span>
          </div>

          <h4 class="mt-8">{{ app.appName }}</h4>
          <p class="text-sm text-muted mt-4">{{ app.tpp?.legalName || 'Unknown TPP' }}</p>

          <div class="app-scopes mt-12">
            <span *ngFor="let scope of parseScopes(app.scopesRequested)"
                  class="scope-pill">
              {{ scope }}
            </span>
          </div>

          <!-- Subscriptions for this app -->
          <div class="mt-12" *ngIf="appSubscriptions[app.tppAppId]?.length">
            <label class="text-sm text-muted"><i class="fas fa-clipboard-list"></i> Subscriptions</label>
            <div *ngFor="let sub of appSubscriptions[app.tppAppId]" class="mt-4"
                 style="background:rgba(255,255,255,0.04); border-radius:8px; padding:8px 12px;">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-8">
                  <span class="badge" [ngClass]="sub.apiPlan?.environment === 'SANDBOX' ? 'badge-info' : 'badge-active'" style="font-size:0.7rem">
                    {{ sub.apiPlan?.environment }}
                  </span>
                  <strong class="text-sm">{{ sub.apiPlan?.apiProduct?.name || 'Product' }}</strong>
                </div>
                <span class="badge" [ngClass]="{
                  'badge-active': sub.status === 'ACTIVE',
                  'badge-revoked': sub.status === 'SUSPENDED'
                }" style="font-size:0.7rem">{{ sub.status }}</span>
              </div>
              <div class="flex items-center gap-12 mt-4">
                <span class="text-sm text-muted"><i class="fas fa-tachometer-alt"></i> {{ sub.apiPlan?.rateLimitPerMin }}/min</span>
                <span class="text-sm text-muted"><i class="fas fa-calendar"></i> Expires: {{ sub.expiryDate | date:'mediumDate' }}</span>
              </div>
            </div>
          </div>

          <div class="mt-12" *ngIf="!appSubscriptions[app.tppAppId] || appSubscriptions[app.tppAppId]?.length === 0">
            <p class="text-sm text-muted"><i class="fas fa-info-circle"></i> No subscriptions yet</p>
          </div>

          <div class="app-actions mt-16 flex gap-8">
            <a [routerLink]="['/developer/apps', app.tppAppId, 'keys']"
               class="btn btn-secondary btn-sm">
              <i class="fas fa-key"></i> Keys
            </a>
            <a routerLink="/developer/subscribe"
               class="btn btn-primary btn-sm" *ngIf="app.status === 'APPROVED'">
              <i class="fas fa-plug"></i> Subscribe
            </a>
          </div>
        </div>
      </div>

      <div class="empty-state" *ngIf="!isLoading && apps.length === 0 && !errorMessage">
        <i class="fas fa-cube"></i>
        <p>No applications registered yet</p>
      </div>
    </div>
  `, styles: ["/* src/app/developer-portal/app-list/app-list.component.css */\n.app-card {\n  animation: fadeInUp 0.4s ease both;\n}\n.app-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.app-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.1rem;\n}\n.app-scopes {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.app-actions {\n  display: flex;\n  gap: 8px;\n}\n/*# sourceMappingURL=app-list.component.css.map */\n"] }]
  }], () => [{ type: TppService }, { type: ProductService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppListComponent, { className: "AppListComponent", filePath: "src/app/developer-portal/app-list/app-list.component.ts", lineNumber: 115 });
})();
export {
  AppListComponent
};
//# sourceMappingURL=chunk-KZIW3XYZ.js.map
