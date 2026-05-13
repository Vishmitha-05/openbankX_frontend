import {
  ConsentService
} from "./chunk-OJYWRIMV.js";
import {
  ProductService
} from "./chunk-BXXXGKD4.js";
import {
  FormsModule
} from "./chunk-IBGG5UE3.js";
import {
  TppService
} from "./chunk-KSBPVTDW.js";
import {
  AuthService
} from "./chunk-WCVDOMTU.js";
import {
  Router
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵtextInterpolate1
} from "./chunk-6UHLKSNQ.js";

// src/app/customer-portal/app-browser/app-browser.component.ts
function AppBrowserComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading apps...");
    \u0275\u0275elementEnd()();
  }
}
function AppBrowserComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function AppBrowserComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No live apps are available right now. Approved apps will appear here once their developer has subscribed to a plan.");
    \u0275\u0275elementEnd()();
  }
}
function AppBrowserComponent_div_11_div_1_ng_container_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 18);
    \u0275\u0275text(2, "Access valid until");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exp_r3 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, exp_r3, "mediumDate"));
  }
}
function AppBrowserComponent_div_11_div_1_ng_container_9_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scope_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getScopeLabel(scope_r4), " ");
  }
}
function AppBrowserComponent_div_11_div_1_ng_container_9_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function AppBrowserComponent_div_11_div_1_ng_container_9_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const app_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openAccounts(app_r6));
    });
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2, " Accounts ");
    \u0275\u0275elementEnd();
  }
}
function AppBrowserComponent_div_11_div_1_ng_container_9_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function AppBrowserComponent_div_11_div_1_ng_container_9_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const app_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPayments(app_r6));
    });
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2, " Payments ");
    \u0275\u0275elementEnd();
  }
}
function AppBrowserComponent_div_11_div_1_ng_container_9_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function AppBrowserComponent_div_11_div_1_ng_container_9_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const app_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openFunds(app_r6));
    });
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2, " Funds Check ");
    \u0275\u0275elementEnd();
  }
}
function AppBrowserComponent_div_11_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 22)(3, "span", 18);
    \u0275\u0275text(4, "Permissions granted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "span", 18);
    \u0275\u0275text(9, "Consent ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AppBrowserComponent_div_11_div_1_ng_container_9_div_12_Template, 6, 4, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 24);
    \u0275\u0275template(14, AppBrowserComponent_div_11_div_1_ng_container_9_span_14_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 26);
    \u0275\u0275template(16, AppBrowserComponent_div_11_div_1_ng_container_9_button_16_Template, 3, 0, "button", 27)(17, AppBrowserComponent_div_11_div_1_ng_container_9_button_17_Template, 3, 0, "button", 27)(18, AppBrowserComponent_div_11_div_1_ng_container_9_button_18_Template, 3, 0, "button", 27);
    \u0275\u0275elementStart(19, "button", 28);
    \u0275\u0275listener("click", function AppBrowserComponent_div_11_div_1_ng_container_9_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.manageConsent());
    });
    \u0275\u0275element(20, "i", 29);
    \u0275\u0275text(21, " Manage ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const app_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.grantedScopes(app_r6.tppAppId).length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", ctx_r0.activeConsentId(app_r6.tppAppId));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.consentExpiry(app_r6.tppAppId));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.grantedScopes(app_r6.tppAppId));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.hasScopeFor(app_r6.tppAppId, "accounts"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasScopeFor(app_r6.tppAppId, "payments"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasScopeFor(app_r6.tppAppId, "funds-confirmations") || ctx_r0.hasScopeFor(app_r6.tppAppId, "balances"));
  }
}
function AppBrowserComponent_div_11_div_1_ng_container_10_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 40)(1, "input", 41);
    \u0275\u0275listener("change", function AppBrowserComponent_div_11_div_1_ng_container_10_label_4_Template_input_change_1_listener() {
      const scope_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const app_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleScope(app_r6.tppAppId, scope_r11));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scope_r11 = ctx.$implicit;
    const app_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isScopeSelected(app_r6.tppAppId, scope_r11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getScopeLabel(scope_r11));
  }
}
function AppBrowserComponent_div_11_div_1_ng_container_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.appErrors[app_r6.tppAppId], " ");
  }
}
function AppBrowserComponent_div_11_div_1_ng_container_10_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2, " Grant access & verify ");
    \u0275\u0275elementEnd();
  }
}
function AppBrowserComponent_div_11_div_1_ng_container_10_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2, " Creating consent... ");
    \u0275\u0275elementEnd();
  }
}
function AppBrowserComponent_div_11_div_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275template(4, AppBrowserComponent_div_11_div_1_ng_container_10_label_4_Template, 4, 2, "label", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AppBrowserComponent_div_11_div_1_ng_container_10_div_5_Template, 3, 1, "div", 38);
    \u0275\u0275elementStart(6, "button", 39);
    \u0275\u0275listener("click", function AppBrowserComponent_div_11_div_1_ng_container_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const app_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.grantAccess(app_r6));
    });
    \u0275\u0275template(7, AppBrowserComponent_div_11_div_1_ng_container_10_span_7_Template, 3, 0, "span", 20)(8, AppBrowserComponent_div_11_div_1_ng_container_10_span_8_Template, 3, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const app_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Choose what ", app_r6.appName, " can access ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.parseScopes(app_r6.scopesRequested));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.appErrors[app_r6.tppAppId]);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pendingAppId === app_r6.tppAppId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pendingAppId !== app_r6.tppAppId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pendingAppId === app_r6.tppAppId);
  }
}
function AppBrowserComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div")(3, "h3", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AppBrowserComponent_div_11_div_1_ng_container_9_Template, 22, 7, "ng-container", 20)(10, AppBrowserComponent_div_11_div_1_ng_container_10_Template, 9, 6, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(app_r6.appName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Provided by ", (app_r6.tpp == null ? null : app_r6.tpp.legalName) || "a trusted TPP", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.hasActiveConsent(app_r6.tppAppId) ? "badge-active" : "badge-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.hasActiveConsent(app_r6.tppAppId) ? "CONNECTED" : "AVAILABLE", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasActiveConsent(app_r6.tppAppId));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hasActiveConsent(app_r6.tppAppId));
  }
}
function AppBrowserComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, AppBrowserComponent_div_11_div_1_Template, 11, 6, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.availableApps);
  }
}
var AppBrowserComponent = class _AppBrowserComponent {
  tppService;
  productService;
  authService;
  consentService;
  router;
  availableApps = [];
  isLoading = true;
  errorMessage = "";
  /** Active consents for the current user, keyed by tppAppId. */
  consentsByApp = /* @__PURE__ */ new Map();
  /** Scope picks per app (for non-granted apps). */
  selectedScopesByApp = /* @__PURE__ */ new Map();
  appErrors = {};
  pendingAppId = null;
  constructor(tppService, productService, authService, consentService, router) {
    this.tppService = tppService;
    this.productService = productService;
    this.authService = authService;
    this.consentService = consentService;
    this.router = router;
  }
  ngOnInit() {
    this.loadAvailableApps();
    this.loadExistingConsents();
  }
  /** Only APPROVED apps with at least one ACTIVE subscription. */
  loadAvailableApps() {
    this.isLoading = true;
    Promise.all([
      this.tppService.getApps().toPromise(),
      this.productService.getSubscriptions().toPromise()
    ]).then(([apps, subs]) => {
      const activeSubs = (subs || []).filter((s) => s.status === "ACTIVE");
      const subscribedAppIds = new Set(activeSubs.map((s) => s.tppApp?.tppAppId).filter((id) => typeof id === "number"));
      this.availableApps = (apps || []).filter((a) => a.status === "APPROVED" && subscribedAppIds.has(a.tppAppId));
      this.isLoading = false;
    }).catch(() => {
      this.isLoading = false;
      this.errorMessage = "Unable to load apps. Please ensure the backend is running.";
    });
  }
  loadExistingConsents() {
    const userId = this.authService.getUserId();
    if (!userId)
      return;
    this.consentService.getConsentsByUser(userId).subscribe({
      next: (consents) => {
        consents.filter((c) => c.status === "ACTIVE" && c.tppApp?.tppAppId).forEach((c) => this.consentsByApp.set(c.tppApp.tppAppId, c));
      }
    });
  }
  /* ---------- Consent state helpers ---------- */
  hasActiveConsent(appId) {
    return this.consentsByApp.has(appId);
  }
  activeConsentId(appId) {
    return this.consentsByApp.get(appId)?.consentId ?? null;
  }
  consentExpiry(appId) {
    return this.consentsByApp.get(appId)?.expiryDate ?? null;
  }
  grantedScopes(appId) {
    const consent = this.consentsByApp.get(appId);
    if (!consent)
      return [];
    try {
      return JSON.parse(consent.scopeJSON || "[]");
    } catch {
      return [];
    }
  }
  hasScopeFor(appId, scope) {
    return this.grantedScopes(appId).includes(scope);
  }
  /* ---------- Scope picker helpers ---------- */
  parseScopes(s) {
    try {
      return JSON.parse(s) || [];
    } catch {
      return [];
    }
  }
  isScopeSelected(appId, scope) {
    return (this.selectedScopesByApp.get(appId) || []).includes(scope);
  }
  toggleScope(appId, scope) {
    const current = this.selectedScopesByApp.get(appId) || [];
    const next = current.includes(scope) ? current.filter((s) => s !== scope) : [...current, scope];
    this.selectedScopesByApp.set(appId, next);
    if (this.appErrors[appId])
      this.appErrors[appId] = "";
  }
  getScopeLabel(scope) {
    const map = {
      "accounts": "View accounts",
      "balances": "View balances",
      "payments": "Initiate payments",
      "funds-confirmations": "Confirm funds availability"
    };
    return map[scope] || scope;
  }
  /* ---------- Grant access ---------- */
  grantAccess(app) {
    const scopes = this.selectedScopesByApp.get(app.tppAppId) || [];
    if (scopes.length === 0) {
      this.appErrors[app.tppAppId] = "Pick at least one permission before granting access.";
      return;
    }
    this.appErrors[app.tppAppId] = "";
    this.pendingAppId = app.tppAppId;
    const payload = {
      user: { userId: this.authService.getUserId() },
      tppApp: { tppAppId: app.tppAppId },
      scopeJSON: JSON.stringify(scopes)
    };
    this.consentService.createConsent(payload).subscribe({
      next: (consent) => {
        this.pendingAppId = null;
        this.router.navigate(["/customer/sca"], {
          queryParams: { consentId: consent.consentId, method: "OTP" }
        });
      },
      error: (err) => {
        this.pendingAppId = null;
        this.appErrors[app.tppAppId] = err?.error?.message || "Could not create the consent \u2014 please try again.";
      }
    });
  }
  /* ---------- Open feature buttons ---------- */
  openAccounts(app) {
    this.router.navigate(["/customer/accounts"], {
      queryParams: { tppAppId: app.tppAppId }
    });
  }
  openPayments(app) {
    this.router.navigate(["/customer/payment-initiate"], {
      queryParams: { tppAppId: app.tppAppId }
    });
  }
  openFunds(app) {
    this.router.navigate(["/customer/funds-check"], {
      queryParams: { tppAppId: app.tppAppId }
    });
  }
  manageConsent() {
    this.router.navigate(["/customer/consents"]);
  }
  static \u0275fac = function AppBrowserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBrowserComponent)(\u0275\u0275directiveInject(TppService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ConsentService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppBrowserComponent, selectors: [["app-browser"]], decls: 12, vars: 4, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-store"], [1, "page-subtitle"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "grid-2", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "empty-state"], [1, "grid-2"], ["class", "glass-card app-card", 4, "ngFor", "ngForOf"], [1, "glass-card", "app-card"], [1, "flex", "justify-between", "items-start", "mb-8"], [1, "app-title"], [1, "text-sm", "text-muted"], [1, "badge", 3, "ngClass"], [4, "ngIf"], [1, "connected-summary"], [1, "summary-row"], ["class", "summary-row", 4, "ngIf"], [1, "mt-12"], ["class", "scope-pill", 4, "ngFor", "ngForOf"], [1, "action-row", "mt-16"], ["class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-sliders-h"], [1, "scope-pill"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fas", "fa-wallet"], [1, "fas", "fa-paper-plane"], [1, "fas", "fa-coins"], [1, "text-sm", "text-muted", 2, "text-transform", "uppercase", "letter-spacing", "0.05em"], [1, "scope-checkboxes", "mt-8"], ["class", "scope-check-item", 4, "ngFor", "ngForOf"], ["class", "alert alert-error mt-12", 4, "ngIf"], [1, "btn", "btn-primary", "mt-12", 3, "click", "disabled"], [1, "scope-check-item"], ["type", "checkbox", 3, "change", "checked"], [1, "alert", "alert-error", "mt-12"], [1, "fas", "fa-handshake"], [1, "fas", "fa-spinner", "fa-spin"]], template: function AppBrowserComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " My Apps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, " Apps approved by the bank that are live for use \u2014 grant access and start using them ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, AppBrowserComponent_div_8_Template, 4, 0, "div", 4)(9, AppBrowserComponent_div_9_Template, 3, 1, "div", 5)(10, AppBrowserComponent_div_10_Template, 4, 0, "div", 6)(11, AppBrowserComponent_div_11_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.availableApps.length === 0 && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DatePipe], styles: ["\n.app-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: 240px;\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.scope-checkboxes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.scope-check-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.connected-summary[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 12px 14px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n}\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n/*# sourceMappingURL=app-browser.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBrowserComponent, [{
    type: Component,
    args: [{ selector: "app-browser", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-store"></i> My Apps</h1>
          <p class="page-subtitle">
            Apps approved by the bank that are live for use \u2014 grant access and start using them
          </p>
        </div>
      </div>

      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading apps...</span>
      </div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div class="empty-state" *ngIf="!isLoading && availableApps.length === 0 && !errorMessage">
        <i class="fas fa-store"></i>
        <p>No live apps are available right now. Approved apps will appear here once their developer has subscribed to a plan.</p>
      </div>

      <div class="grid-2" *ngIf="!isLoading">

        <div *ngFor="let app of availableApps" class="glass-card app-card">

          <div class="flex justify-between items-start mb-8">
            <div>
              <h3 class="app-title">{{ app.appName }}</h3>
              <p class="text-sm text-muted">
                Provided by {{ app.tpp?.legalName || 'a trusted TPP' }}
              </p>
            </div>
            <span class="badge"
                  [ngClass]="hasActiveConsent(app.tppAppId) ? 'badge-active' : 'badge-info'">
              {{ hasActiveConsent(app.tppAppId) ? 'CONNECTED' : 'AVAILABLE' }}
            </span>
          </div>

          <!-- ============================================================
               Already granted \u2014 show app summary + open buttons
               ============================================================ -->
          <ng-container *ngIf="hasActiveConsent(app.tppAppId)">
            <div class="connected-summary">
              <div class="summary-row">
                <span class="text-sm text-muted">Permissions granted</span>
                <strong>{{ grantedScopes(app.tppAppId).length }}</strong>
              </div>
              <div class="summary-row">
                <span class="text-sm text-muted">Consent ID</span>
                <strong>#{{ activeConsentId(app.tppAppId) }}</strong>
              </div>
              <div class="summary-row" *ngIf="consentExpiry(app.tppAppId) as exp">
                <span class="text-sm text-muted">Access valid until</span>
                <strong>{{ exp | date:'mediumDate' }}</strong>
              </div>
            </div>

            <div class="mt-12">
              <span *ngFor="let scope of grantedScopes(app.tppAppId)" class="scope-pill">
                {{ getScopeLabel(scope) }}
              </span>
            </div>

            <div class="action-row mt-16">
              <button *ngIf="hasScopeFor(app.tppAppId, 'accounts')"
                      class="btn btn-primary btn-sm"
                      (click)="openAccounts(app)">
                <i class="fas fa-wallet"></i> Accounts
              </button>
              <button *ngIf="hasScopeFor(app.tppAppId, 'payments')"
                      class="btn btn-primary btn-sm"
                      (click)="openPayments(app)">
                <i class="fas fa-paper-plane"></i> Payments
              </button>
              <button *ngIf="hasScopeFor(app.tppAppId, 'funds-confirmations') || hasScopeFor(app.tppAppId, 'balances')"
                      class="btn btn-primary btn-sm"
                      (click)="openFunds(app)">
                <i class="fas fa-coins"></i> Funds Check
              </button>
              <button class="btn btn-light btn-sm" (click)="manageConsent()">
                <i class="fas fa-sliders-h"></i> Manage
              </button>
            </div>
          </ng-container>

          <!-- ============================================================
               Not granted yet \u2014 pick scopes + grant
               ============================================================ -->
          <ng-container *ngIf="!hasActiveConsent(app.tppAppId)">
            <label class="text-sm text-muted"
                   style="text-transform:uppercase; letter-spacing:0.05em;">
              Choose what {{ app.appName }} can access
            </label>

            <div class="scope-checkboxes mt-8">
              <label *ngFor="let scope of parseScopes(app.scopesRequested)"
                     class="scope-check-item">
                <input type="checkbox"
                       [checked]="isScopeSelected(app.tppAppId, scope)"
                       (change)="toggleScope(app.tppAppId, scope)">
                <span class="scope-pill">{{ getScopeLabel(scope) }}</span>
              </label>
            </div>

            <div class="alert alert-error mt-12" *ngIf="appErrors[app.tppAppId]">
              <i class="fas fa-exclamation-circle"></i> {{ appErrors[app.tppAppId] }}
            </div>

            <button class="btn btn-primary mt-12"
                    (click)="grantAccess(app)"
                    [disabled]="pendingAppId === app.tppAppId">
              <span *ngIf="pendingAppId !== app.tppAppId">
                <i class="fas fa-handshake"></i> Grant access &amp; verify
              </span>
              <span *ngIf="pendingAppId === app.tppAppId">
                <i class="fas fa-spinner fa-spin"></i> Creating consent...
              </span>
            </button>
          </ng-container>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;fd15e00f7e2c51e7646dcc59182b59a80d3585032d783fc1cc3c8f34febeaa78;c:/Users/2478956/OneDrive - Cognizant/Desktop/OpenBankX_Project/openbankX_frontend/src/app/customer-portal/app-browser/app-browser.component.ts */\n.app-card {\n  padding: 24px;\n  min-height: 240px;\n}\n.app-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.scope-checkboxes {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.scope-check-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.connected-summary {\n  margin-top: 12px;\n  padding: 12px 14px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n}\n.action-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n/*# sourceMappingURL=app-browser.component.css.map */\n"] }]
  }], () => [{ type: TppService }, { type: ProductService }, { type: AuthService }, { type: ConsentService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppBrowserComponent, { className: "AppBrowserComponent", filePath: "src/app/customer-portal/app-browser/app-browser.component.ts", lineNumber: 174 });
})();
export {
  AppBrowserComponent
};
//# sourceMappingURL=chunk-VJ2VCNJI.js.map
