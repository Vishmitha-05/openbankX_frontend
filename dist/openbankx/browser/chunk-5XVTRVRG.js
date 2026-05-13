import {
  TppService
} from "./chunk-KSBPVTDW.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6UHLKSNQ.js";

// src/app/admin-portal/tpp-management/tpp-management.component.ts
var _c0 = (a0, a1, a2) => ({ "badge-approved": a0, "badge-pending": a1, "badge-revoked": a2 });
function TppManagementComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function TppManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function TppManagementComponent_div_10_Template(rf, ctx) {
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
function TppManagementComponent_div_11_tr_15_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scope_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(scope_r2);
  }
}
function TppManagementComponent_div_11_tr_15_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 24);
    \u0275\u0275listener("click", function TppManagementComponent_div_11_tr_15_ng_container_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const app_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setStatus(app_r4, "APPROVED"));
    });
    \u0275\u0275element(2, "i", 25);
    \u0275\u0275text(3, " Approve ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 26);
    \u0275\u0275listener("click", function TppManagementComponent_div_11_tr_15_ng_container_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const app_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setStatus(app_r4, "REJECTED"));
    });
    \u0275\u0275element(5, "i", 27);
    \u0275\u0275text(6, " Reject ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const app_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pendingId === app_r4.tppAppId);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.pendingId === app_r4.tppAppId);
  }
}
function TppManagementComponent_div_11_tr_15_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 26);
    \u0275\u0275listener("click", function TppManagementComponent_div_11_tr_15_ng_container_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const app_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setStatus(app_r4, "REJECTED"));
    });
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275text(3, " Revoke ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const app_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pendingId === app_r4.tppAppId);
  }
}
function TppManagementComponent_div_11_tr_15_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 24);
    \u0275\u0275listener("click", function TppManagementComponent_div_11_tr_15_ng_container_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const app_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setStatus(app_r4, "APPROVED"));
    });
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275text(3, " Re-approve ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const app_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pendingId === app_r4.tppAppId);
  }
}
function TppManagementComponent_div_11_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, TppManagementComponent_div_11_tr_15_span_7_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "div", 21);
    \u0275\u0275template(13, TppManagementComponent_div_11_tr_15_ng_container_13_Template, 7, 2, "ng-container", 22)(14, TppManagementComponent_div_11_tr_15_ng_container_14_Template, 4, 1, "ng-container", 22)(15, TppManagementComponent_div_11_tr_15_ng_container_15_Template, 4, 1, "ng-container", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r4.appName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((app_r4.tpp == null ? null : app_r4.tpp.legalName) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.parseScopes(app_r4.scopesRequested));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(8, _c0, app_r4.status === "APPROVED", app_r4.status === "PENDING", app_r4.status === "REJECTED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(app_r4.status);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", app_r4.status === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", app_r4.status === "APPROVED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", app_r4.status === "REJECTED");
  }
}
function TppManagementComponent_div_11_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No TPP applications");
    \u0275\u0275elementEnd()();
  }
}
function TppManagementComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "table", 15)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "App Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "TPP Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Scopes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, TppManagementComponent_div_11_tr_15_Template, 16, 12, "tr", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, TppManagementComponent_div_11_div_16_Template, 4, 0, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.apps);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.apps.length === 0);
  }
}
var TppManagementComponent = class _TppManagementComponent {
  tppService;
  apps = [];
  isLoading = true;
  errorMessage = "";
  successMessage = "";
  pendingId = null;
  constructor(tppService) {
    this.tppService = tppService;
  }
  ngOnInit() {
    this.loadApps();
  }
  loadApps() {
    this.tppService.getApps().subscribe({
      next: (d) => {
        this.apps = d || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load TPP applications.";
        this.isLoading = false;
      }
    });
  }
  setStatus(app, status) {
    this.pendingId = app.tppAppId;
    this.errorMessage = "";
    const request$ = status === "APPROVED" ? this.tppService.approveApp(app.tppAppId) : this.tppService.rejectApp(app.tppAppId);
    request$.subscribe({
      next: () => {
        app.status = status;
        this.pendingId = null;
        this.successMessage = status === "APPROVED" ? `"${app.appName}" approved and published to API Products.` : `"${app.appName}" \u2192 REJECTED`;
        setTimeout(() => this.successMessage = "", 4e3);
      },
      error: () => {
        this.pendingId = null;
        this.errorMessage = "Failed to update app status.";
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
  static \u0275fac = function TppManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TppManagementComponent)(\u0275\u0275directiveInject(TppService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TppManagementComponent, selectors: [["app-tpp-management"]], decls: 12, vars: 4, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-cube"], [1, "page-subtitle"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "glass-card", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "glass-card"], [1, "data-table"], [4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "text-muted"], ["class", "scope-pill", 4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], [1, "flex", "gap-8"], [4, "ngIf"], [1, "scope-pill"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], [1, "fas", "fa-check"], [1, "btn", "btn-danger", "btn-sm", 3, "click", "disabled"], [1, "fas", "fa-times"], [1, "fas", "fa-ban"], [1, "fas", "fa-redo"], [1, "empty-state"], [1, "fas", "fa-inbox"]], template: function TppManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " TPP App Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Review and decide on TPP application requests");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, TppManagementComponent_div_8_Template, 2, 0, "div", 4)(9, TppManagementComponent_div_9_Template, 3, 1, "div", 5)(10, TppManagementComponent_div_10_Template, 3, 1, "div", 6)(11, TppManagementComponent_div_11_Template, 17, 2, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n/*# sourceMappingURL=tpp-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TppManagementComponent, [{
    type: Component,
    args: [{ selector: "app-tpp-management", standalone: true, imports: [CommonModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-cube"></i> TPP App Management</h1>
          <p class="page-subtitle">Review and decide on TPP application requests</p>
        </div>
      </div>

      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>

      <div class="alert alert-success" *ngIf="successMessage">
        <i class="fas fa-check-circle"></i> {{ successMessage }}
      </div>
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div class="glass-card" *ngIf="!isLoading">
        <table class="data-table">
          <thead>
            <tr>
              <th>App Name</th>
              <th>TPP Company</th>
              <th>Scopes</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let app of apps">
              <td><strong>{{ app.appName }}</strong></td>
              <td class="text-muted">{{ app.tpp?.legalName || '\u2014' }}</td>
              <td>
                <span *ngFor="let scope of parseScopes(app.scopesRequested)" class="scope-pill">{{ scope }}</span>
              </td>
              <td>
                <span class="badge" [ngClass]="{
                  'badge-approved': app.status === 'APPROVED',
                  'badge-pending': app.status === 'PENDING',
                  'badge-revoked': app.status === 'REJECTED'
                }">{{ app.status }}</span>
              </td>
              <td>
                <div class="flex gap-8">
                  <!-- PENDING: Approve + Reject -->
                  <ng-container *ngIf="app.status === 'PENDING'">
                    <button class="btn btn-success btn-sm"
                            (click)="setStatus(app, 'APPROVED')"
                            [disabled]="pendingId === app.tppAppId">
                      <i class="fas fa-check"></i> Approve
                    </button>
                    <button class="btn btn-danger btn-sm"
                            (click)="setStatus(app, 'REJECTED')"
                            [disabled]="pendingId === app.tppAppId">
                      <i class="fas fa-times"></i> Reject
                    </button>
                  </ng-container>

                  <!-- APPROVED: only a Revoke option -->
                  <ng-container *ngIf="app.status === 'APPROVED'">
                    <button class="btn btn-danger btn-sm"
                            (click)="setStatus(app, 'REJECTED')"
                            [disabled]="pendingId === app.tppAppId">
                      <i class="fas fa-ban"></i> Revoke
                    </button>
                  </ng-container>

                  <!-- REJECTED: allow re-approval -->
                  <ng-container *ngIf="app.status === 'REJECTED'">
                    <button class="btn btn-success btn-sm"
                            (click)="setStatus(app, 'APPROVED')"
                            [disabled]="pendingId === app.tppAppId">
                      <i class="fas fa-redo"></i> Re-approve
                    </button>
                  </ng-container>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="empty-state" *ngIf="apps.length === 0">
          <i class="fas fa-inbox"></i>
          <p>No TPP applications</p>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/admin-portal/tpp-management/tpp-management.component.css */\n/*# sourceMappingURL=tpp-management.component.css.map */\n"] }]
  }], () => [{ type: TppService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TppManagementComponent, { className: "TppManagementComponent", filePath: "src/app/admin-portal/tpp-management/tpp-management.component.ts", lineNumber: 101 });
})();
export {
  TppManagementComponent
};
//# sourceMappingURL=chunk-5XVTRVRG.js.map
