import {
  DefaultValueAccessor,
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
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-QS26HGQT.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6UHLKSNQ.js";

// src/app/developer-portal/app-registration/app-registration.component.ts
function AppRegistrationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function AppRegistrationComponent_div_9_Template(rf, ctx) {
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
function AppRegistrationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "i", 15);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "You haven't registered a TPP company yet. Register one to start creating apps.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 16);
    \u0275\u0275element(6, "i", 17);
    \u0275\u0275text(7, " Register TPP Company ");
    \u0275\u0275elementEnd()()();
  }
}
function AppRegistrationComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementEnd();
  }
}
function AppRegistrationComponent_div_12_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", t_r3.tppId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r3.legalName, " (", t_r3.status, ") ");
  }
}
function AppRegistrationComponent_div_12_label_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 31)(1, "input", 32);
    \u0275\u0275listener("change", function AppRegistrationComponent_div_12_label_22_Template_input_change_1_listener() {
      const scope_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleScope(scope_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scope_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.selectedScopes.includes(scope_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(scope_r5);
  }
}
function AppRegistrationComponent_div_12_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2, " Register Application");
    \u0275\u0275elementEnd();
  }
}
function AppRegistrationComponent_div_12_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2, " Submitting...");
    \u0275\u0275elementEnd();
  }
}
function AppRegistrationComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 20)(2, "label");
    \u0275\u0275text(3, "Application Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function AppRegistrationComponent_div_12_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.appName, $event) || (ctx_r0.appName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20)(6, "label");
    \u0275\u0275text(7, "Parent TPP Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function AppRegistrationComponent_div_12_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.tppId, $event) || (ctx_r0.tppId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(9, AppRegistrationComponent_div_12_option_9_Template, 2, 3, "option", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 20)(11, "label");
    \u0275\u0275text(12, "Redirect URIs (JSON array)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 24);
    \u0275\u0275twoWayListener("ngModelChange", function AppRegistrationComponent_div_12_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.redirectURIs, $event) || (ctx_r0.redirectURIs = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 20)(15, "label");
    \u0275\u0275text(16, "Public Keys (JWK Set \u2014 JSON)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "textarea", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AppRegistrationComponent_div_12_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.publicKeys, $event) || (ctx_r0.publicKeys = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 20)(19, "label");
    \u0275\u0275text(20, "Requested Scopes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 26);
    \u0275\u0275template(22, AppRegistrationComponent_div_12_label_22_Template, 4, 2, "label", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 28);
    \u0275\u0275listener("click", function AppRegistrationComponent_div_12_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitApp());
    });
    \u0275\u0275template(24, AppRegistrationComponent_div_12_span_24_Template, 3, 0, "span", 29)(25, AppRegistrationComponent_div_12_span_25_Template, 3, 0, "span", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.appName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.tppId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.myTpps);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.redirectURIs);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.publicKeys);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.availableScopes);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSubmitting);
  }
}
var AppRegistrationComponent = class _AppRegistrationComponent {
  tppService;
  authService;
  router;
  appName = "";
  tppId = null;
  redirectURIs = "";
  publicKeys = "";
  selectedScopes = [];
  myTpps = [];
  isLoadingTpps = true;
  isSubmitting = false;
  successMessage = "";
  errorMessage = "";
  availableScopes = ["accounts", "payments", "funds-confirmations"];
  constructor(tppService, authService, router) {
    this.tppService = tppService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.tppService.getMyTpps(this.authService.getEmail()).subscribe({
      next: (tpps) => {
        this.myTpps = tpps || [];
        if (this.myTpps.length > 0) {
          this.tppId = this.myTpps[0].tppId;
        }
        this.isLoadingTpps = false;
      },
      error: () => {
        this.isLoadingTpps = false;
        this.errorMessage = "Unable to load your TPP companies.";
      }
    });
  }
  toggleScope(scope) {
    const index = this.selectedScopes.indexOf(scope);
    if (index > -1) {
      this.selectedScopes.splice(index, 1);
    } else {
      this.selectedScopes.push(scope);
    }
  }
  submitApp() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.appName) {
      this.errorMessage = "Application name is required.";
      return;
    }
    if (!this.tppId) {
      this.errorMessage = "Please select a parent TPP company.";
      return;
    }
    if (this.isSubmitting)
      return;
    this.isSubmitting = true;
    const appData = {
      tpp: { tppId: this.tppId },
      appName: this.appName,
      redirectURIs: this.redirectURIs || "[]",
      publicKeysJWKSet: this.publicKeys || "{}",
      scopesRequested: JSON.stringify(this.selectedScopes),
      status: "PENDING"
    };
    this.tppService.createApp(appData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.successMessage = "Application registered! Awaiting admin approval. Redirecting...";
        this.resetForm();
        setTimeout(() => this.router.navigate(["/developer/apps"]), 1200);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = err?.error?.message || "Failed to register application.";
      }
    });
  }
  resetForm() {
    this.appName = "";
    this.redirectURIs = "";
    this.publicKeys = "";
    this.selectedScopes = [];
  }
  static \u0275fac = function AppRegistrationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRegistrationComponent)(\u0275\u0275directiveInject(TppService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppRegistrationComponent, selectors: [["app-app-registration"]], decls: 13, vars: 5, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-plus-circle"], [1, "page-subtitle"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "glass-card", "style", "max-width:640px", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "glass-card", "style", "max-width: 640px;", 4, "ngIf"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "glass-card", 2, "max-width", "640px"], [1, "empty-state"], [1, "fas", "fa-building"], ["routerLink", "/developer/tpp-register", 1, "btn", "btn-primary", "mt-12"], [1, "fas", "fa-arrow-right"], [1, "loading-container"], [1, "spinner"], [1, "form-group"], ["type", "text", "placeholder", "e.g., FinTech Budget App", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["placeholder", '["https://myapp.com/callback"]', 1, "form-control", "font-mono", 3, "ngModelChange", "ngModel"], ["placeholder", '{"keys":[{"kty":"RSA","kid":"key-1"}]}', 1, "form-control", "font-mono", 3, "ngModelChange", "ngModel"], [1, "scope-checkboxes"], ["class", "scope-check-item", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], [3, "ngValue"], [1, "scope-check-item"], ["type", "checkbox", 3, "change", "checked"], [1, "scope-pill"], [1, "fas", "fa-paper-plane"], [1, "fas", "fa-spinner", "fa-spin"]], template: function AppRegistrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Register New Application");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Create a new TPP application to start using the Open Banking APIs");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, AppRegistrationComponent_div_8_Template, 3, 1, "div", 4)(9, AppRegistrationComponent_div_9_Template, 3, 1, "div", 5)(10, AppRegistrationComponent_div_10_Template, 8, 0, "div", 6)(11, AppRegistrationComponent_div_11_Template, 2, 0, "div", 7)(12, AppRegistrationComponent_div_12_Template, 26, 9, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoadingTpps && ctx.myTpps.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoadingTpps);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoadingTpps && ctx.myTpps.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ["\n.scope-checkboxes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.scope-check-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n.scope-check-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: #667eea;\n}\n.invalid[_ngcontent-%COMP%] {\n  border-color: var(--status-revoked) !important;\n}\n/*# sourceMappingURL=app-registration.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRegistrationComponent, [{
    type: Component,
    args: [{ selector: "app-app-registration", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-plus-circle"></i> Register New Application</h1>
          <p class="page-subtitle">Create a new TPP application to start using the Open Banking APIs</p>
        </div>
      </div>

      <div class="alert alert-success" *ngIf="successMessage">
        <i class="fas fa-check-circle"></i> {{ successMessage }}
      </div>
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <!-- No TPP yet \u2192 guide user to register a company first -->
      <div class="glass-card" *ngIf="!isLoadingTpps && myTpps.length === 0" style="max-width:640px">
        <div class="empty-state">
          <i class="fas fa-building"></i>
          <p>You haven't registered a TPP company yet. Register one to start creating apps.</p>
          <a routerLink="/developer/tpp-register" class="btn btn-primary mt-12">
            <i class="fas fa-arrow-right"></i> Register TPP Company
          </a>
        </div>
      </div>

      <div class="loading-container" *ngIf="isLoadingTpps">
        <div class="spinner"></div>
      </div>

      <div class="glass-card" *ngIf="!isLoadingTpps && myTpps.length > 0" style="max-width: 640px;">
        <div class="form-group">
          <label>Application Name</label>
          <input type="text" class="form-control" placeholder="e.g., FinTech Budget App"
                 [(ngModel)]="appName">
        </div>

        <div class="form-group">
          <label>Parent TPP Company</label>
          <select class="form-control" [(ngModel)]="tppId">
            <option *ngFor="let t of myTpps" [ngValue]="t.tppId">
              {{ t.legalName }} ({{ t.status }})
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Redirect URIs (JSON array)</label>
          <textarea class="form-control font-mono" placeholder='["https://myapp.com/callback"]'
                    [(ngModel)]="redirectURIs"></textarea>
        </div>

        <div class="form-group">
          <label>Public Keys (JWK Set \u2014 JSON)</label>
          <textarea class="form-control font-mono" placeholder='{"keys":[{"kty":"RSA","kid":"key-1"}]}'
                    [(ngModel)]="publicKeys"></textarea>
        </div>

        <div class="form-group">
          <label>Requested Scopes</label>
          <div class="scope-checkboxes">
            <label *ngFor="let scope of availableScopes" class="scope-check-item">
              <input type="checkbox"
                     [checked]="selectedScopes.includes(scope)"
                     (change)="toggleScope(scope)">
              <span class="scope-pill">{{ scope }}</span>
            </label>
          </div>
        </div>

        <button class="btn btn-primary" (click)="submitApp()" [disabled]="isSubmitting">
          <span *ngIf="!isSubmitting"><i class="fas fa-paper-plane"></i> Register Application</span>
          <span *ngIf="isSubmitting"><i class="fas fa-spinner fa-spin"></i> Submitting...</span>
        </button>
      </div>
    </div>
  `, styles: ["/* src/app/developer-portal/app-registration/app-registration.component.css */\n.scope-checkboxes {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.scope-check-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n.scope-check-item input[type=checkbox] {\n  accent-color: #667eea;\n}\n.invalid {\n  border-color: var(--status-revoked) !important;\n}\n/*# sourceMappingURL=app-registration.component.css.map */\n"] }]
  }], () => [{ type: TppService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppRegistrationComponent, { className: "AppRegistrationComponent", filePath: "src/app/developer-portal/app-registration/app-registration.component.ts", lineNumber: 93 });
})();
export {
  AppRegistrationComponent
};
//# sourceMappingURL=chunk-N2DH33CO.js.map
