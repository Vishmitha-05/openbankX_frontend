import {
  AuthService
} from "./chunk-JCS4YGQY.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-LGGXQJSP.js";
import "./chunk-TX3HFKHN.js";
import {
  HttpResponse,
  provideHttpClient,
  withInterceptors
} from "./chunk-MCV2AEBY.js";
import {
  Component,
  catchError,
  inject,
  map,
  setClassMetadata,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-RF6R3Z5S.js";

// src/app/core/guards/auth.guard.ts
var authGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isLoggedIn()) {
    router.navigate(["/login"]);
    return false;
  }
  const requiredRole = route.data?.["role"];
  if (requiredRole && authService.getRole() !== requiredRole) {
    router.navigate(["/login"]);
    return false;
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  // Login — public route
  {
    path: "login",
    loadComponent: () => import("./chunk-ZINZW7GC.js").then((m) => m.LoginComponent)
  },
  // Register — public route
  {
    path: "register",
    loadComponent: () => import("./chunk-JHWRZFAY.js").then((m) => m.RegisterComponent)
  },
  // ========== Portal 1: Developer (TPP) ==========
  {
    path: "developer",
    loadComponent: () => import("./chunk-WDGUQ3DR.js").then((m) => m.DeveloperPortalComponent),
    canActivate: [authGuard],
    data: { role: "TPP" },
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-XRXKKGP6.js").then((m) => m.DashboardComponent) },
      { path: "apps", loadComponent: () => import("./chunk-G25YVIRZ.js").then((m) => m.AppListComponent) },
      { path: "apps/new", loadComponent: () => import("./chunk-SYVBMOB7.js").then((m) => m.AppRegistrationComponent) },
      { path: "apps/:id/keys", loadComponent: () => import("./chunk-TKXLMNN4.js").then((m) => m.KeysUploadComponent) },
      { path: "tpp-register", loadComponent: () => import("./chunk-MXVPWUNQ.js").then((m) => m.TppRegistrationComponent) },
      { path: "subscribe", loadComponent: () => import("./chunk-X3LM3R42.js").then((m) => m.SubscriptionPlanComponent) },
      { path: "sandbox", loadComponent: () => import("./chunk-6U5JRROW.js").then((m) => m.SandboxExplorerComponent) },
      { path: "analytics", loadComponent: () => import("./chunk-42PFVCBO.js").then((m) => m.UsageAnalyticsComponent) },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  // ========== Portal 2: Customer ==========
  {
    path: "customer",
    loadComponent: () => import("./chunk-4Q4ETTZP.js").then((m) => m.CustomerPortalComponent),
    canActivate: [authGuard],
    data: { role: "CUSTOMER" },
    children: [
      { path: "apps", loadComponent: () => import("./chunk-5BX5IZGI.js").then((m) => m.AppBrowserComponent) },
      { path: "consents", loadComponent: () => import("./chunk-RQXRS7XH.js").then((m) => m.MyConsentsComponent) },
      { path: "consents/:id", loadComponent: () => import("./chunk-3OUETSOA.js").then((m) => m.ConsentDetailComponent) },
      // Review-consent functionality is now folded into the My Consents page.
      // Legacy path redirects so existing links don't 404.
      { path: "consent-review", redirectTo: "consents", pathMatch: "full" },
      { path: "sca", loadComponent: () => import("./chunk-PE3Q6PK2.js").then((m) => m.ScaVerifyComponent) },
      { path: "accounts", loadComponent: () => import("./chunk-Q4J2TRS2.js").then((m) => m.MyAccountsComponent) },
      { path: "payment-initiate", loadComponent: () => import("./chunk-VPIQO3F7.js").then((m) => m.InitiatePaymentComponent) },
      { path: "funds-check", loadComponent: () => import("./chunk-L5V3FSYI.js").then((m) => m.FundsCheckComponent) },
      { path: "", redirectTo: "apps", pathMatch: "full" }
    ]
  },
  // ========== Portal 3: Operations ==========
  {
    path: "operations",
    loadComponent: () => import("./chunk-TWG3DFHG.js").then((m) => m.OperationsPortalComponent),
    canActivate: [authGuard],
    data: { role: "OPERATIONS" },
    children: [
      { path: "health", loadComponent: () => import("./chunk-5ZLQWHK6.js").then((m) => m.ApiHealthComponent) },
      { path: "throttle-log", loadComponent: () => import("./chunk-THTFBJOS.js").then((m) => m.ThrottleLogComponent) },
      { path: "incidents", loadComponent: () => import("./chunk-SRYMQR5H.js").then((m) => m.IncidentManagementComponent) },
      { path: "latency", loadComponent: () => import("./chunk-GFUZKMCU.js").then((m) => m.LatencyChartsComponent) },
      { path: "", redirectTo: "health", pathMatch: "full" }
    ]
  },
  // ========== Portal 4: Compliance (also accessible by OPERATIONS) ==========
  {
    path: "compliance",
    loadComponent: () => import("./chunk-XOBANDZE.js").then((m) => m.CompliancePortalComponent),
    canActivate: [authGuard],
    data: { role: "OPERATIONS" },
    children: [
      { path: "consents", loadComponent: () => import("./chunk-CDRNS5KK.js").then((m) => m.ConsentRegistryComponent) },
      { path: "sca", loadComponent: () => import("./chunk-NHAKRHME.js").then((m) => m.ScaStatisticsComponent) },
      { path: "audit", loadComponent: () => import("./chunk-C3IENJYN.js").then((m) => m.AuditTrailComponent) },
      { path: "reports", loadComponent: () => import("./chunk-IUPN5REN.js").then((m) => m.ReportGenerationComponent) },
      { path: "", redirectTo: "consents", pathMatch: "full" }
    ]
  },
  // ========== Portal 5: Admin ==========
  {
    path: "admin",
    loadComponent: () => import("./chunk-5BLGOZNP.js").then((m) => m.AdminPortalComponent),
    canActivate: [authGuard],
    data: { role: "ADMIN" },
    children: [
      { path: "products", loadComponent: () => import("./chunk-EHPMTL3J.js").then((m) => m.ProductManagementComponent) },
      { path: "plans", loadComponent: () => import("./chunk-YYZEZXPL.js").then((m) => m.PlanConfigurationComponent) },
      { path: "users", loadComponent: () => import("./chunk-WBTQ7RJG.js").then((m) => m.UserManagementComponent) },
      { path: "tpp", loadComponent: () => import("./chunk-DMT3T75C.js").then((m) => m.TppManagementComponent) },
      { path: "sca-policy", loadComponent: () => import("./chunk-PPS4QHAG.js").then((m) => m.ScaPolicyComponent) },
      { path: "", redirectTo: "products", pathMatch: "full" }
    ]
  },
  // ========== Notifications — accessible by all roles ==========
  {
    path: "notifications",
    loadComponent: () => import("./chunk-LTY6M7QR.js").then((m) => m.NotificationListComponent),
    canActivate: [authGuard],
    data: { role: "" }
  },
  // ========== Error Page ==========
  {
    path: "error",
    loadComponent: () => import("./chunk-HA34ZZ34.js").then((m) => m.ErrorPageComponent)
  },
  // Default redirects
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", redirectTo: "/login" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  const request = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(request).pipe(map((event) => {
    if (!(event instanceof HttpResponse))
      return event;
    const headerToken = event.headers?.get("X-Auth-Token");
    if (headerToken)
      authService.refreshToken(headerToken);
    const body = event.body;
    if (body && typeof body === "object" && "data" in body && "accessToken" in body && "generatedAt" in body) {
      if (typeof body.accessToken === "string" && body.accessToken) {
        authService.refreshToken(body.accessToken);
      }
      return event.clone({ body: body.data });
    }
    return event;
  }), catchError((error) => throwError(() => error)));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/app.ts
var AppComponent = class _AppComponent {
  title = "OpenBankX";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet], template: "<router-outlet></router-outlet>", styles: ["/* src/app/app.css */\n:host {\n  display: block;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.ts", lineNumber: 15 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
