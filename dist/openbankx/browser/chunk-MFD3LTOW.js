import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IBGG5UE3.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-QS26HGQT.js";
import {
  environment
} from "./chunk-TX3HFKHN.js";
import {
  HttpClient
} from "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6UHLKSNQ.js";

// src/app/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ForgotPasswordComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function ForgotPasswordComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2, " Send Reset Link");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2, " Sending...");
    \u0275\u0275elementEnd();
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  http;
  email = "";
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  constructor(http) {
    this.http = http;
  }
  submit() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.email) {
      this.errorMessage = "Please enter your email address.";
      return;
    }
    this.isLoading = true;
    this.http.post(`${environment.apiBaseUrl}/auth/forgot-password`, { email: this.email }).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = `If an account exists for ${this.email}, a reset link has been sent.`;
        this.email = "";
      },
      error: (err) => {
        this.isLoading = false;
        if (err.status === 404 || err.status === 0) {
          this.successMessage = `If an account exists for ${this.email}, a reset link has been sent.`;
          this.email = "";
        } else {
          this.errorMessage = err.error?.message || "Unable to process the request right now.";
        }
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 24, vars: 6, consts: [[1, "fp-wrapper"], [1, "fp-card"], [1, "fp-header"], [1, "fp-logo"], [1, "fas", "fa-key"], [1, "fp-subtitle"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "form-group"], [1, "input-icon"], [1, "fas", "fa-envelope"], ["type", "email", "placeholder", "your@email.com", 1, "form-control", "with-icon", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-primary", "btn-full", 3, "click", "disabled"], [4, "ngIf"], [1, "back-link"], ["routerLink", "/login"], [1, "fas", "fa-arrow-left"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [1, "fas", "fa-paper-plane"], [1, "fas", "fa-spinner", "fa-spin"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Enter your registered email and we'll send you a reset link.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ForgotPasswordComponent_div_9_Template, 3, 1, "div", 6)(10, ForgotPasswordComponent_div_10_Template, 3, 1, "div", 7);
      \u0275\u0275elementStart(11, "div", 8)(12, "label");
      \u0275\u0275text(13, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275element(15, "i", 10);
      \u0275\u0275elementStart(16, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ForgotPasswordComponent_Template_input_keyup_enter_16_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "button", 12);
      \u0275\u0275listener("click", function ForgotPasswordComponent_Template_button_click_17_listener() {
        return ctx.submit();
      });
      \u0275\u0275template(18, ForgotPasswordComponent_span_18_Template, 3, 0, "span", 13)(19, ForgotPasswordComponent_span_19_Template, 3, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14)(21, "a", 15);
      \u0275\u0275element(22, "i", 16);
      \u0275\u0275text(23, " Back to sign in");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ["\n.fp-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #0a2540 0%,\n      #1e40af 100%);\n}\n.fp-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 40px 36px 32px;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);\n  border-top: 4px solid #c79a2a;\n}\n.fp-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.fp-logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: #0a2540;\n  color: #c79a2a;\n  border: 2px solid #c79a2a;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n  font-size: 1.4rem;\n}\n.fp-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #0a2540;\n  font-weight: 700;\n}\n.fp-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.85rem;\n  margin-top: 6px;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.9rem;\n}\n.input-icon[_ngcontent-%COMP%]   .form-control.with-icon[_ngcontent-%COMP%] {\n  padding-left: 42px;\n}\n.btn-full[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.back-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 18px;\n  font-size: 0.85rem;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1e40af;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `
    <div class="fp-wrapper">
      <div class="fp-card">
        <div class="fp-header">
          <div class="fp-logo"><i class="fas fa-key"></i></div>
          <h1>Reset Password</h1>
          <p class="fp-subtitle">Enter your registered email and we'll send you a reset link.</p>
        </div>

        <div class="alert alert-error" *ngIf="errorMessage">
          <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
        </div>
        <div class="alert alert-success" *ngIf="successMessage">
          <i class="fas fa-check-circle"></i> {{ successMessage }}
        </div>

        <div class="form-group">
          <label>Email Address</label>
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email"
                   class="form-control with-icon"
                   placeholder="your@email.com"
                   [(ngModel)]="email"
                   (keyup.enter)="submit()">
          </div>
        </div>

        <button class="btn btn-primary btn-full"
                (click)="submit()"
                [disabled]="isLoading">
          <span *ngIf="!isLoading"><i class="fas fa-paper-plane"></i> Send Reset Link</span>
          <span *ngIf="isLoading"><i class="fas fa-spinner fa-spin"></i> Sending...</span>
        </button>

        <div class="back-link">
          <a routerLink="/login"><i class="fas fa-arrow-left"></i> Back to sign in</a>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;bc2c76d797c77d80bcaedbf8675fdc91060bba7d1faed2c6f0b5870a5d571e22;c:/Users/2478956/OneDrive - Cognizant/Desktop/OpenBankX_Project/openbankX_frontend/src/app/forgot-password/forgot-password.component.ts */\n.fp-wrapper {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #0a2540 0%,\n      #1e40af 100%);\n}\n.fp-card {\n  background: #fff;\n  border-radius: 14px;\n  padding: 40px 36px 32px;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);\n  border-top: 4px solid #c79a2a;\n}\n.fp-header {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.fp-logo {\n  width: 60px;\n  height: 60px;\n  background: #0a2540;\n  color: #c79a2a;\n  border: 2px solid #c79a2a;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n  font-size: 1.4rem;\n}\n.fp-header h1 {\n  font-size: 1.5rem;\n  color: #0a2540;\n  font-weight: 700;\n}\n.fp-subtitle {\n  color: #64748b;\n  font-size: 0.85rem;\n  margin-top: 6px;\n}\n.input-icon {\n  position: relative;\n}\n.input-icon i {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.9rem;\n}\n.input-icon .form-control.with-icon {\n  padding-left: 42px;\n}\n.btn-full {\n  width: 100%;\n  padding: 12px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.back-link {\n  text-align: center;\n  margin-top: 18px;\n  font-size: 0.85rem;\n}\n.back-link a {\n  color: #1e40af;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/forgot-password/forgot-password.component.ts", lineNumber: 101 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-MFD3LTOW.js.map
