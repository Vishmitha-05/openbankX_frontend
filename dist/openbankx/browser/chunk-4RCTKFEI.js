import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IBGG5UE3.js";
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

// src/app/login/login.component.ts
function LoginComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function LoginComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2, " Sign In ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2, " Signing in... ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  authService;
  router;
  email = "";
  password = "";
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  login() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.email || !this.password) {
      this.errorMessage = "Please enter your email and password.";
      return;
    }
    this.isLoading = true;
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.saveSession(response.userId, response.name, response.email, response.role, response.accessToken);
        this.successMessage = `Welcome, ${response.name}!`;
        const target = this.routeForRole(response.role);
        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate([target]);
        }, 400);
      },
      error: (err) => {
        this.isLoading = false;
        if (err.status === 0) {
          this.errorMessage = "Cannot connect to server. Please ensure the backend is running on port 8081.";
        } else if (err.error?.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = "Invalid email or password. Please try again.";
        }
      }
    });
  }
  routeForRole(role) {
    switch (role) {
      case "TPP":
        return "/developer/dashboard";
      case "CUSTOMER":
        return "/customer/consents";
      case "OPERATIONS":
        return "/operations/health";
      case "ADMIN":
        return "/admin/products";
      default:
        return "/login";
    }
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 44, vars: 7, consts: [[1, "login-wrapper"], [1, "login-container"], [1, "login-card"], [1, "login-header"], [1, "login-logo"], [1, "fas", "fa-university"], [1, "accent"], [1, "login-subtitle"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "form-group"], [1, "input-icon"], [1, "fas", "fa-envelope"], ["type", "email", "placeholder", "Enter your email", 1, "form-control", "with-icon", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "label-row"], ["routerLink", "/forgot-password", 1, "forgot-link"], [1, "fas", "fa-lock"], ["type", "password", "placeholder", "Enter your password", 1, "form-control", "with-icon", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-primary", "btn-full", 3, "click", "disabled"], [4, "ngIf"], [1, "register-link"], ["routerLink", "/register"], [1, "trust-strip"], [1, "fas", "fa-shield-alt"], [1, "dot"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [1, "fas", "fa-sign-in-alt"], [1, "fas", "fa-spinner", "fa-spin"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "OpenBank");
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "X");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, "Secure Online Banking Platform");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, LoginComponent_div_12_Template, 3, 1, "div", 8)(13, LoginComponent_div_13_Template, 3, 1, "div", 9);
      \u0275\u0275elementStart(14, "div", 10)(15, "label");
      \u0275\u0275text(16, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275elementStart(19, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function LoginComponent_Template_input_keyup_enter_19_listener() {
        return ctx.login();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 10)(21, "div", 14)(22, "label");
      \u0275\u0275text(23, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 15);
      \u0275\u0275text(25, "Forgot password?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 11);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementStart(28, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function LoginComponent_Template_input_keyup_enter_28_listener() {
        return ctx.login();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "button", 18);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_29_listener() {
        return ctx.login();
      });
      \u0275\u0275template(30, LoginComponent_span_30_Template, 3, 0, "span", 19)(31, LoginComponent_span_31_Template, 3, 0, "span", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 20);
      \u0275\u0275text(33, " New to OpenBankX? ");
      \u0275\u0275elementStart(34, "a", 21);
      \u0275\u0275text(35, "Open an account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 22)(37, "span");
      \u0275\u0275element(38, "i", 23);
      \u0275\u0275text(39, " PSD2 Compliant");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "span", 24);
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275element(42, "i", 16);
      \u0275\u0275text(43, " 256-bit Encrypted");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ['\n.login-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(10, 37, 64, 0.92) 0%,\n      rgba(30, 64, 175, 0.88) 100%),\n    radial-gradient(\n      circle at top right,\n      #1e40af 0%,\n      #0a2540 100%);\n  position: relative;\n}\n.login-wrapper[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 20% 30%,\n      rgba(199, 154, 42, 0.18) 0%,\n      transparent 40%),\n    radial-gradient(\n      circle at 80% 70%,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 40%);\n  pointer-events: none;\n}\n.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  position: relative;\n  z-index: 1;\n  animation: fadeInUp 0.4s ease;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 40px 36px 32px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);\n  border-top: 4px solid #c79a2a;\n}\n.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.login-logo[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: #0a2540;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n  font-size: 1.6rem;\n  color: #c79a2a;\n  border: 2px solid #c79a2a;\n}\n.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #0a2540;\n  letter-spacing: 0.5px;\n}\n.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: #c79a2a;\n}\n.login-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.82rem;\n  margin-top: 4px;\n}\n.login-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.login-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  color: #0f172a;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.login-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #1e40af;\n  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.10);\n  background: #fff;\n}\n.label-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.label-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #1e40af;\n  font-weight: 600;\n  text-decoration: none;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.9rem;\n}\n.input-icon[_ngcontent-%COMP%]   .form-control.with-icon[_ngcontent-%COMP%] {\n  padding-left: 42px;\n}\n.btn-full[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  font-size: 0.95rem;\n  margin-top: 6px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.btn-full[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.register-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1e40af;\n  font-weight: 600;\n  text-decoration: none;\n}\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.trust-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 22px;\n  padding-top: 18px;\n  border-top: 1px solid #e2e8f0;\n  font-size: 0.72rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.trust-strip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #c79a2a;\n  margin-right: 4px;\n}\n.trust-strip[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: #cbd5e1;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: '<div class="login-wrapper">\n  <div class="login-container">\n    <div class="login-card">\n\n      <div class="login-header">\n        <div class="login-logo">\n          <i class="fas fa-university"></i>\n        </div>\n        <h1>OpenBank<span class="accent">X</span></h1>\n        <p class="login-subtitle">Secure Online Banking Platform</p>\n      </div>\n\n      <div class="alert alert-error" *ngIf="errorMessage">\n        <i class="fas fa-exclamation-circle"></i>\n        {{ errorMessage }}\n      </div>\n\n      <div class="alert alert-success" *ngIf="successMessage">\n        <i class="fas fa-check-circle"></i>\n        {{ successMessage }}\n      </div>\n\n      <div class="form-group">\n        <label>Email Address</label>\n        <div class="input-icon">\n          <i class="fas fa-envelope"></i>\n          <input type="email"\n                 class="form-control with-icon"\n                 placeholder="Enter your email"\n                 [(ngModel)]="email"\n                 (keyup.enter)="login()">\n        </div>\n      </div>\n\n      <div class="form-group">\n        <div class="label-row">\n          <label>Password</label>\n          <a routerLink="/forgot-password" class="forgot-link">Forgot password?</a>\n        </div>\n        <div class="input-icon">\n          <i class="fas fa-lock"></i>\n          <input type="password"\n                 class="form-control with-icon"\n                 placeholder="Enter your password"\n                 [(ngModel)]="password"\n                 (keyup.enter)="login()">\n        </div>\n      </div>\n\n      <button class="btn btn-primary btn-full"\n              (click)="login()"\n              [disabled]="isLoading">\n        <span *ngIf="!isLoading">\n          <i class="fas fa-sign-in-alt"></i> Sign In\n        </span>\n        <span *ngIf="isLoading">\n          <i class="fas fa-spinner fa-spin"></i> Signing in...\n        </span>\n      </button>\n\n      <div class="register-link">\n        New to OpenBankX? <a routerLink="/register">Open an account</a>\n      </div>\n\n      <div class="trust-strip">\n        <span><i class="fas fa-shield-alt"></i> PSD2 Compliant</span>\n        <span class="dot"></span>\n        <span><i class="fas fa-lock"></i> 256-bit Encrypted</span>\n      </div>\n    </div>\n  </div>\n</div>\n', styles: ['/* src/app/login/login.component.css */\n.login-wrapper {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(10, 37, 64, 0.92) 0%,\n      rgba(30, 64, 175, 0.88) 100%),\n    radial-gradient(\n      circle at top right,\n      #1e40af 0%,\n      #0a2540 100%);\n  position: relative;\n}\n.login-wrapper::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 20% 30%,\n      rgba(199, 154, 42, 0.18) 0%,\n      transparent 40%),\n    radial-gradient(\n      circle at 80% 70%,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 40%);\n  pointer-events: none;\n}\n.login-container {\n  width: 100%;\n  max-width: 440px;\n  position: relative;\n  z-index: 1;\n  animation: fadeInUp 0.4s ease;\n}\n.login-card {\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 40px 36px 32px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);\n  border-top: 4px solid #c79a2a;\n}\n.login-header {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.login-logo {\n  width: 64px;\n  height: 64px;\n  background: #0a2540;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n  font-size: 1.6rem;\n  color: #c79a2a;\n  border: 2px solid #c79a2a;\n}\n.login-header h1 {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #0a2540;\n  letter-spacing: 0.5px;\n}\n.login-header h1 .accent {\n  color: #c79a2a;\n}\n.login-subtitle {\n  color: #64748b;\n  font-size: 0.82rem;\n  margin-top: 4px;\n}\n.login-card .form-group label {\n  color: #475569;\n}\n.login-card .form-control {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  color: #0f172a;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.login-card .form-control:focus {\n  border-color: #1e40af;\n  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.10);\n  background: #fff;\n}\n.label-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.label-row label {\n  margin-bottom: 0;\n}\n.forgot-link {\n  font-size: 0.75rem;\n  color: #1e40af;\n  font-weight: 600;\n  text-decoration: none;\n}\n.forgot-link:hover {\n  text-decoration: underline;\n}\n.input-icon {\n  position: relative;\n}\n.input-icon i {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.9rem;\n}\n.input-icon .form-control.with-icon {\n  padding-left: 42px;\n}\n.btn-full {\n  width: 100%;\n  padding: 13px;\n  font-size: 0.95rem;\n  margin-top: 6px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.btn-full:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.register-link {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.register-link a {\n  color: #1e40af;\n  font-weight: 600;\n  text-decoration: none;\n}\n.register-link a:hover {\n  text-decoration: underline;\n}\n.trust-strip {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 22px;\n  padding-top: 18px;\n  border-top: 1px solid #e2e8f0;\n  font-size: 0.72rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.trust-strip i {\n  color: #c79a2a;\n  margin-right: 4px;\n}\n.trust-strip .dot {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: #cbd5e1;\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-4RCTKFEI.js.map
