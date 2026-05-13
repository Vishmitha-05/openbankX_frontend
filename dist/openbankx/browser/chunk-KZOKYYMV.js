import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IBGG5UE3.js";
import {
  environment
} from "./chunk-TX3HFKHN.js";
import {
  HttpClient
} from "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
  DatePipe,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
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

// src/app/admin-portal/sca-policy/sca-policy.component.ts
var _c0 = (a0) => ({ "color": a0 });
function ScaPolicyComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saveMessage, " ");
  }
}
function ScaPolicyComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ScaPolicyComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div")(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "label", 22)(8, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function ScaPolicyComponent_div_13_Template_input_ngModelChange_8_listener($event) {
      const policy_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(policy_r3.requiresSca, $event) || (policy_r3.requiresSca = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "span", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const policy_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(policy_r3.scope);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(policy_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", policy_r3.requiresSca);
  }
}
function ScaPolicyComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 25);
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label", 22)(7, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function ScaPolicyComponent_div_17_Template_input_ngModelChange_7_listener($event) {
      const method_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(method_r5.enabled, $event) || (method_r5.enabled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "span", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const method_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275classMap(method_r5.icon);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c0, method_r5.enabled ? "#16a34a" : "var(--text-muted)"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", method_r5.enabled);
  }
}
function ScaPolicyComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2, " Save Policy");
    \u0275\u0275elementEnd();
  }
}
function ScaPolicyComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2, " Saving...");
    \u0275\u0275elementEnd();
  }
}
function ScaPolicyComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Last saved ", \u0275\u0275pipeBind2(2, 2, ctx_r0.lastSavedAt, "medium"), " (", ctx_r0.savedLocation, ") ");
  }
}
var ScaPolicyComponent = class _ScaPolicyComponent {
  http;
  isSaving = false;
  saveMessage = "";
  errorMessage = "";
  lastSavedAt = null;
  savedLocation = "";
  STORAGE_KEY = "obx_sca_policy";
  scaPolicies = [
    { scope: "accounts:read", description: "View account list", requiresSca: false },
    { scope: "balances:read", description: "View balances", requiresSca: true },
    { scope: "payments:write", description: "Initiate payments", requiresSca: true },
    { scope: "funds:read", description: "Check funds availability", requiresSca: true }
  ];
  scaMethods = [
    { label: "OTP (SMS)", icon: "fas fa-sms", enabled: true },
    { label: "Device Push", icon: "fas fa-mobile-alt", enabled: true },
    { label: "App Approval", icon: "fas fa-fingerprint", enabled: false }
  ];
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    const cached = localStorage.getItem(this.STORAGE_KEY);
    if (cached) {
      try {
        const data = JSON.parse(cached);
        if (data.policies)
          this.scaPolicies = data.policies;
        if (data.methods)
          this.scaMethods = data.methods;
        if (data.savedAt) {
          this.lastSavedAt = data.savedAt;
          this.savedLocation = data.location || "local cache";
        }
      } catch {
      }
    }
  }
  savePolicy() {
    this.isSaving = true;
    this.saveMessage = "";
    this.errorMessage = "";
    const payload = {
      policies: this.scaPolicies,
      methods: this.scaMethods
    };
    this.http.post(`${environment.apiBaseUrl}/sca/policy`, payload).subscribe({
      next: () => {
        this.persistLocally("database");
        this.isSaving = false;
        this.saveMessage = "Policy saved to the SCA policy database.";
        setTimeout(() => this.saveMessage = "", 4e3);
      },
      error: () => {
        this.persistLocally("local browser storage");
        this.isSaving = false;
        this.saveMessage = "Policy saved locally (backend endpoint unavailable).";
        setTimeout(() => this.saveMessage = "", 4e3);
      }
    });
  }
  persistLocally(location) {
    const stamp = (/* @__PURE__ */ new Date()).toISOString();
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
      policies: this.scaPolicies,
      methods: this.scaMethods,
      savedAt: stamp,
      location
    }));
    this.lastSavedAt = stamp;
    this.savedLocation = location;
  }
  static \u0275fac = function ScaPolicyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScaPolicyComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScaPolicyComponent, selectors: [["app-sca-policy"]], decls: 23, vars: 8, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-lock"], [1, "page-subtitle"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [1, "glass-card", 2, "max-width", "580px"], [1, "mb-16"], ["class", "policy-item", 4, "ngFor", "ngForOf"], [1, "section-divider"], [1, "flex", "items-center", "gap-8", "mt-24"], [1, "btn", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], ["class", "text-sm text-muted", 4, "ngIf"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "policy-item"], [1, "flex", "items-center", "justify-between"], [1, "scope-pill"], [1, "text-sm", "text-muted", 2, "margin-left", "8px"], [1, "toggle"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "toggle-slider"], [1, "flex", "items-center", "gap-8"], [3, "ngStyle"], [1, "fas", "fa-save"], [1, "fas", "fa-spinner", "fa-spin"], [1, "text-sm", "text-muted"]], template: function ScaPolicyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " SCA Policy Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Define which scopes require Strong Customer Authentication");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, ScaPolicyComponent_div_8_Template, 3, 1, "div", 4)(9, ScaPolicyComponent_div_9_Template, 3, 1, "div", 5);
      \u0275\u0275elementStart(10, "div", 6)(11, "h3", 7);
      \u0275\u0275text(12, "Scope-level SCA Requirements");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, ScaPolicyComponent_div_13_Template, 10, 3, "div", 8);
      \u0275\u0275element(14, "div", 9);
      \u0275\u0275elementStart(15, "h3", 7);
      \u0275\u0275text(16, "SCA Methods Allowed");
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, ScaPolicyComponent_div_17_Template, 9, 7, "div", 8);
      \u0275\u0275elementStart(18, "div", 10)(19, "button", 11);
      \u0275\u0275listener("click", function ScaPolicyComponent_Template_button_click_19_listener() {
        return ctx.savePolicy();
      });
      \u0275\u0275template(20, ScaPolicyComponent_span_20_Template, 3, 0, "span", 12)(21, ScaPolicyComponent_span_21_Template, 3, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, ScaPolicyComponent_span_22_Template, 3, 5, "span", 13);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.saveMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.scaPolicies);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.scaMethods);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lastSavedAt);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n.policy-item[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n}\n.toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n  cursor: pointer;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  transition: 0.3s;\n}\n.toggle-slider[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: 0.3s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]:before {\n  transform: translateX(20px);\n}\n/*# sourceMappingURL=sca-policy.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScaPolicyComponent, [{
    type: Component,
    args: [{ selector: "app-sca-policy", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-lock"></i> SCA Policy Configuration</h1>
          <p class="page-subtitle">Define which scopes require Strong Customer Authentication</p>
        </div>
      </div>

      <div class="alert alert-success" *ngIf="saveMessage">
        <i class="fas fa-check-circle"></i> {{ saveMessage }}
      </div>
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div class="glass-card" style="max-width:580px">
        <h3 class="mb-16">Scope-level SCA Requirements</h3>
        <div *ngFor="let policy of scaPolicies" class="policy-item">
          <div class="flex items-center justify-between">
            <div>
              <span class="scope-pill">{{ policy.scope }}</span>
              <span class="text-sm text-muted" style="margin-left:8px">{{ policy.description }}</span>
            </div>
            <label class="toggle">
              <input type="checkbox" [(ngModel)]="policy.requiresSca">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div class="section-divider"></div>

        <h3 class="mb-16">SCA Methods Allowed</h3>
        <div *ngFor="let method of scaMethods" class="policy-item">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-8">
              <i [class]="method.icon"
                 [ngStyle]="{ 'color': method.enabled ? '#16a34a' : 'var(--text-muted)' }"></i>
              <span>{{ method.label }}</span>
            </div>
            <label class="toggle">
              <input type="checkbox" [(ngModel)]="method.enabled">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div class="flex items-center gap-8 mt-24">
          <button class="btn btn-primary" (click)="savePolicy()" [disabled]="isSaving">
            <span *ngIf="!isSaving"><i class="fas fa-save"></i> Save Policy</span>
            <span *ngIf="isSaving"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
          </button>
          <span class="text-sm text-muted" *ngIf="lastSavedAt">
            Last saved {{ lastSavedAt | date:'medium' }} ({{ savedLocation }})
          </span>
        </div>
      </div>
    </div>
  `, styles: ['/* src/app/admin-portal/sca-policy/sca-policy.component.css */\n.policy-item {\n  padding: 12px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n}\n.toggle {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n  cursor: pointer;\n}\n.toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-slider {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  transition: 0.3s;\n}\n.toggle-slider:before {\n  content: "";\n  position: absolute;\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: 0.3s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.toggle input:checked + .toggle-slider {\n  background: #16a34a;\n}\n.toggle input:checked + .toggle-slider:before {\n  transform: translateX(20px);\n}\n/*# sourceMappingURL=sca-policy.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScaPolicyComponent, { className: "ScaPolicyComponent", filePath: "src/app/admin-portal/sca-policy/sca-policy.component.ts", lineNumber: 76 });
})();
export {
  ScaPolicyComponent
};
//# sourceMappingURL=chunk-KZOKYYMV.js.map
