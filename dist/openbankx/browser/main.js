import {
  AuthService
} from "./chunk-WCVDOMTU.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-QS26HGQT.js";
import "./chunk-TX3HFKHN.js";
import {
  provideHttpClient,
  withInterceptors
} from "./chunk-5C4TBQN6.js";
import {
  Component,
  catchError,
  inject,
  provideZonelessChangeDetection,
  setClassMetadata,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-6UHLKSNQ.js";

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
    loadComponent: () => import("./chunk-4RCTKFEI.js").then((m) => m.LoginComponent)
  },
  // Register — public route
  {
    path: "register",
    loadComponent: () => import("./chunk-MKWYTQRA.js").then((m) => m.RegisterComponent)
  },
  // Forgot password — public route
  {
    path: "forgot-password",
    loadComponent: () => import("./chunk-MFD3LTOW.js").then((m) => m.ForgotPasswordComponent)
  },
  // ========== Portal 1: Developer (TPP) ==========
  {
    path: "developer",
    loadComponent: () => import("./chunk-YQYVVZV6.js").then((m) => m.DeveloperPortalComponent),
    canActivate: [authGuard],
    data: { role: "TPP" },
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-JZFMISRS.js").then((m) => m.DashboardComponent) },
      { path: "apps", loadComponent: () => import("./chunk-KZIW3XYZ.js").then((m) => m.AppListComponent) },
      { path: "apps/new", loadComponent: () => import("./chunk-N2DH33CO.js").then((m) => m.AppRegistrationComponent) },
      { path: "apps/:id/keys", loadComponent: () => import("./chunk-5YNE6AWI.js").then((m) => m.KeysUploadComponent) },
      { path: "tpp-register", loadComponent: () => import("./chunk-N5HFX55Q.js").then((m) => m.TppRegistrationComponent) },
      { path: "subscribe", loadComponent: () => import("./chunk-PJWYPMHV.js").then((m) => m.SubscriptionPlanComponent) },
      { path: "sandbox", loadComponent: () => import("./chunk-B4XCK34C.js").then((m) => m.SandboxExplorerComponent) },
      { path: "analytics", loadComponent: () => import("./chunk-G4P56SMX.js").then((m) => m.UsageAnalyticsComponent) },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  // ========== Portal 2: Customer ==========
  {
    path: "customer",
    loadComponent: () => import("./chunk-IRCWKUO4.js").then((m) => m.CustomerPortalComponent),
    canActivate: [authGuard],
    data: { role: "CUSTOMER" },
    children: [
      { path: "apps", loadComponent: () => import("./chunk-VJ2VCNJI.js").then((m) => m.AppBrowserComponent) },
      { path: "consents", loadComponent: () => import("./chunk-D7QZV3OT.js").then((m) => m.MyConsentsComponent) },
      { path: "consents/:id", loadComponent: () => import("./chunk-G5HTXYPA.js").then((m) => m.ConsentDetailComponent) },
      // Review-consent functionality is now folded into the My Consents page.
      // Legacy path redirects so existing links don't 404.
      { path: "consent-review", redirectTo: "consents", pathMatch: "full" },
      { path: "sca", loadComponent: () => import("./chunk-76L2AWA3.js").then((m) => m.ScaVerifyComponent) },
      { path: "accounts", loadComponent: () => import("./chunk-CJEPOTGY.js").then((m) => m.MyAccountsComponent) },
      { path: "payment-initiate", loadComponent: () => import("./chunk-LDQB7QEC.js").then((m) => m.InitiatePaymentComponent) },
      { path: "funds-check", loadComponent: () => import("./chunk-PPXA322I.js").then((m) => m.FundsCheckComponent) },
      { path: "", redirectTo: "apps", pathMatch: "full" }
    ]
  },
  // ========== Portal 3: Operations ==========
  {
    path: "operations",
    loadComponent: () => import("./chunk-FOGGYF3S.js").then((m) => m.OperationsPortalComponent),
    canActivate: [authGuard],
    data: { role: "OPERATIONS" },
    children: [
      { path: "health", loadComponent: () => import("./chunk-XVOGIECG.js").then((m) => m.ApiHealthComponent) },
      { path: "throttle-log", loadComponent: () => import("./chunk-3PWTG2IG.js").then((m) => m.ThrottleLogComponent) },
      { path: "incidents", loadComponent: () => import("./chunk-SWH7LSAL.js").then((m) => m.IncidentManagementComponent) },
      { path: "latency", loadComponent: () => import("./chunk-Z524VXH7.js").then((m) => m.LatencyChartsComponent) },
      { path: "", redirectTo: "health", pathMatch: "full" }
    ]
  },
  // ========== Portal 4: Compliance (also accessible by OPERATIONS) ==========
  {
    path: "compliance",
    loadComponent: () => import("./chunk-5VGQE57Q.js").then((m) => m.CompliancePortalComponent),
    canActivate: [authGuard],
    data: { role: "OPERATIONS" },
    children: [
      { path: "consents", loadComponent: () => import("./chunk-VZURXPFW.js").then((m) => m.ConsentRegistryComponent) },
      { path: "sca", loadComponent: () => import("./chunk-VM54RZEO.js").then((m) => m.ScaStatisticsComponent) },
      { path: "audit", loadComponent: () => import("./chunk-DCLE6TW6.js").then((m) => m.AuditTrailComponent) },
      { path: "reports", loadComponent: () => import("./chunk-W7XG5KHL.js").then((m) => m.ReportGenerationComponent) },
      { path: "", redirectTo: "consents", pathMatch: "full" }
    ]
  },
  // ========== Portal 5: Admin ==========
  {
    path: "admin",
    loadComponent: () => import("./chunk-Q65YBKNS.js").then((m) => m.AdminPortalComponent),
    canActivate: [authGuard],
    data: { role: "ADMIN" },
    children: [
      { path: "products", loadComponent: () => import("./chunk-JCL7J2GD.js").then((m) => m.ProductManagementComponent) },
      { path: "plans", loadComponent: () => import("./chunk-7DPG5T4H.js").then((m) => m.PlanConfigurationComponent) },
      { path: "users", loadComponent: () => import("./chunk-6SJS3W7C.js").then((m) => m.UserManagementComponent) },
      { path: "tpp", loadComponent: () => import("./chunk-5XVTRVRG.js").then((m) => m.TppManagementComponent) },
      { path: "sca-policy", loadComponent: () => import("./chunk-KZOKYYMV.js").then((m) => m.ScaPolicyComponent) },
      { path: "", redirectTo: "products", pathMatch: "full" }
    ]
  },
  // ========== Notifications — accessible by all roles ==========
  {
    path: "notifications",
    loadComponent: () => import("./chunk-NOGRIXWZ.js").then((m) => m.NotificationListComponent),
    canActivate: [authGuard],
    data: { role: "" }
  },
  // ========== Error Page ==========
  {
    path: "error",
    loadComponent: () => import("./chunk-TEVRZMU2.js").then((m) => m.ErrorPageComponent)
  },
  // Default redirects
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", redirectTo: "/login" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();
  let request = req;
  if (token) {
    request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(request).pipe(
    // ✅ Capture the refreshed token from every response
    tap((event) => {
      if (event?.headers) {
        const freshToken = event.headers.get("X-Auth-Token");
        if (freshToken) {
          authService.refreshToken(freshToken);
        }
      }
    }),
    catchError((error) => {
      if (error.status === 401) {
        authService.logout();
        router.navigate(["/login"]);
      }
      return throwError(() => error);
    })
  );
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZonelessChangeDetection(),
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
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet], template: `<router-outlet></router-outlet>`, styles: ["/* angular:styles/component:css;b12e85be7d455115f6d554170e92b6088ef37ef9bf708b0eae91cd65079b1ecd;c:/Users/2478956/OneDrive - Cognizant/Desktop/OpenBankX_Project/openbankX_frontend/src/app/app.ts */\n:host {\n  display: block;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.ts", lineNumber: 15 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
