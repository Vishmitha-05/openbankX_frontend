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
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6UHLKSNQ.js";

// src/app/register/register.component.ts
function RegisterComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function RegisterComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function RegisterComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function RegisterComponent_div_44_Template_div_click_0_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.role = r_r3.value);
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r0.role === r_r3.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(r_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.desc);
  }
}
function RegisterComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2, " Create Account");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2, " Creating...");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  authService;
  router;
  name = "";
  email = "";
  phone = "";
  password = "";
  role = "CUSTOMER";
  isSubmitting = false;
  successMessage = "";
  errorMessage = "";
  roles = [
    { value: "CUSTOMER", label: "Bank Customer", icon: "fas fa-user", desc: "Manage consents & accounts" },
    { value: "TPP", label: "TPP Developer", icon: "fas fa-code", desc: "Register apps & test APIs" },
    { value: "OPERATIONS", label: "Operations", icon: "fas fa-chart-line", desc: "Monitor APIs & compliance" },
    { value: "ADMIN", label: "Administrator", icon: "fas fa-cog", desc: "Configure system & users" }
  ];
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  register() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.name || !this.email || !this.password) {
      this.errorMessage = "Name, email, and password are required.";
      return;
    }
    this.isSubmitting = true;
    this.authService.register({
      name: this.name,
      email: this.email,
      phone: this.phone || "+91-0000000000",
      password: this.password,
      role: this.role
    }).subscribe({
      next: () => {
        this.successMessage = `Account created successfully! Redirecting to login...`;
        setTimeout(() => {
          this.isSubmitting = false;
          this.router.navigate(["/login"]);
        }, 1500);
      },
      error: (err) => {
        this.isSubmitting = false;
        if (err.status === 0) {
          this.errorMessage = "Cannot connect to server. Please ensure the backend is running.";
        } else if (err.error?.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = "Registration failed. Please try again.";
        }
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 52, vars: 10, consts: [[1, "register-wrapper"], [1, "register-bg-shapes"], [1, "shape"], [1, "register-container"], [1, "register-card"], [1, "register-header"], [1, "register-logo"], [1, "fas", "fa-user-plus"], [1, "register-subtitle"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "form-group"], [1, "input-icon"], [1, "fas", "fa-user"], ["type", "text", "placeholder", "Enter your full name", 1, "form-control", "with-icon", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-envelope"], ["type", "email", "placeholder", "your@email.com", 1, "form-control", "with-icon", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-lock"], ["type", "password", "placeholder", "Create a secure password", 1, "form-control", "with-icon", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-phone"], ["type", "tel", "placeholder", "+91-9876543210", 1, "form-control", "with-icon", 3, "ngModelChange", "ngModel"], [1, "role-select-grid"], ["class", "role-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-full", 3, "click", "disabled"], [4, "ngIf"], [1, "login-link"], ["routerLink", "/login"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [1, "role-option", 3, "click"], [1, "role-option-label"], [1, "role-option-desc"], [1, "fas", "fa-rocket"], [1, "fas", "fa-spinner", "fa-spin"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 2)(4, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h1");
      \u0275\u0275text(11, "Create Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 8);
      \u0275\u0275text(13, "Join the OpenBankX platform");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, RegisterComponent_div_14_Template, 3, 1, "div", 9)(15, RegisterComponent_div_15_Template, 3, 1, "div", 10);
      \u0275\u0275elementStart(16, "div", 11)(17, "label");
      \u0275\u0275text(18, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 12);
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275elementStart(21, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 11)(23, "label");
      \u0275\u0275text(24, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 12);
      \u0275\u0275element(26, "i", 15);
      \u0275\u0275elementStart(27, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 11)(29, "label");
      \u0275\u0275text(30, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 12);
      \u0275\u0275element(32, "i", 17);
      \u0275\u0275elementStart(33, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 11)(35, "label");
      \u0275\u0275text(36, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 12);
      \u0275\u0275element(38, "i", 19);
      \u0275\u0275elementStart(39, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.phone, $event) || (ctx.phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 11)(41, "label");
      \u0275\u0275text(42, "Select Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 21);
      \u0275\u0275template(44, RegisterComponent_div_44_Template, 6, 6, "div", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "button", 23);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_45_listener() {
        return ctx.register();
      });
      \u0275\u0275template(46, RegisterComponent_span_46_Template, 3, 0, "span", 24)(47, RegisterComponent_span_47_Template, 3, 0, "span", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 25);
      \u0275\u0275text(49, " Already have an account? ");
      \u0275\u0275elementStart(50, "a", 26);
      \u0275\u0275text(51, "Sign in");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.name);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.phone);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.roles);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ['\n.register-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(10, 37, 64, 0.92) 0%,\n      rgba(30, 64, 175, 0.88) 100%),\n    radial-gradient(\n      circle at top right,\n      #1e40af 0%,\n      #0a2540 100%);\n}\n.register-wrapper[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 20% 30%,\n      rgba(199, 154, 42, 0.16) 0%,\n      transparent 40%),\n    radial-gradient(\n      circle at 80% 70%,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 40%);\n  pointer-events: none;\n}\n.register-bg-shapes[_ngcontent-%COMP%] {\n  display: none;\n}\n.register-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  position: relative;\n  z-index: 1;\n  animation: fadeInUp 0.4s ease;\n}\n.register-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 36px 32px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);\n  border-top: 4px solid #c79a2a;\n}\n.register-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.register-logo[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: #0a2540;\n  border: 2px solid #c79a2a;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n  font-size: 1.6rem;\n  color: #c79a2a;\n}\n.register-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #0a2540;\n}\n.register-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.82rem;\n  margin-top: 4px;\n}\n.register-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.register-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  color: #0f172a;\n  border-radius: 8px;\n  padding: 11px 14px;\n}\n.register-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #1e40af;\n  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.10);\n  background: #fff;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.9rem;\n}\n.input-icon[_ngcontent-%COMP%]   .form-control.with-icon[_ngcontent-%COMP%] {\n  padding-left: 42px;\n}\n.role-select-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.role-option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 14px 10px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  background: #f8fafc;\n}\n.role-option[_ngcontent-%COMP%]:hover {\n  border-color: #1e40af;\n  background: #eff6ff;\n}\n.role-option.selected[_ngcontent-%COMP%] {\n  border-color: #1e40af;\n  background: #eff6ff;\n  box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.10);\n}\n.role-option[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 6px;\n  color: #1e40af;\n}\n.role-option-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.role-option-desc[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.btn-full[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  font-size: 0.95rem;\n  margin-top: 6px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.btn-full[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.login-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 18px;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1e40af;\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=register.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: '<div class="register-wrapper">\r\n  <div class="register-bg-shapes">\r\n    <div class="shape"></div>\r\n    <div class="shape"></div>\r\n    <div class="shape"></div>\r\n  </div>\r\n\r\n  <div class="register-container">\r\n    <div class="register-card">\r\n      <!-- Header -->\r\n      <div class="register-header">\r\n        <div class="register-logo">\r\n          <i class="fas fa-user-plus"></i>\r\n        </div>\r\n        <h1>Create Account</h1>\r\n        <p class="register-subtitle">Join the OpenBankX platform</p>\r\n      </div>\r\n\r\n      <!-- Alerts -->\r\n      <div class="alert alert-error" *ngIf="errorMessage">\r\n        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}\r\n      </div>\r\n      <div class="alert alert-success" *ngIf="successMessage">\r\n        <i class="fas fa-check-circle"></i> {{ successMessage }}\r\n      </div>\r\n\r\n      <!-- Name -->\r\n      <div class="form-group">\r\n        <label>Full Name</label>\r\n        <div class="input-icon">\r\n          <i class="fas fa-user"></i>\r\n          <input type="text" class="form-control with-icon" placeholder="Enter your full name" [(ngModel)]="name">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Email -->\r\n      <div class="form-group">\r\n        <label>Email Address</label>\r\n        <div class="input-icon">\r\n          <i class="fas fa-envelope"></i>\r\n          <input type="email" class="form-control with-icon" placeholder="your@email.com" [(ngModel)]="email">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Password -->\r\n      <div class="form-group">\r\n        <label>Password</label>\r\n        <div class="input-icon">\r\n          <i class="fas fa-lock"></i>\r\n          <input type="password" class="form-control with-icon" placeholder="Create a secure password" [(ngModel)]="password">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Phone -->\r\n      <div class="form-group">\r\n        <label>Phone Number</label>\r\n        <div class="input-icon">\r\n          <i class="fas fa-phone"></i>\r\n          <input type="tel" class="form-control with-icon" placeholder="+91-9876543210" [(ngModel)]="phone">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Role Selection -->\r\n      <div class="form-group">\r\n        <label>Select Role</label>\r\n        <div class="role-select-grid">\r\n          <div *ngFor="let r of roles"\r\n               class="role-option"\r\n               [class.selected]="role === r.value"\r\n               (click)="role = r.value">\r\n            <i [class]="r.icon"></i>\r\n            <span class="role-option-label">{{ r.label }}</span>\r\n            <span class="role-option-desc">{{ r.desc }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Submit -->\r\n      <button class="btn btn-primary btn-full" (click)="register()" [disabled]="isSubmitting">\r\n        <span *ngIf="!isSubmitting"><i class="fas fa-rocket"></i> Create Account</span>\r\n        <span *ngIf="isSubmitting"><i class="fas fa-spinner fa-spin"></i> Creating...</span>\r\n      </button>\r\n\r\n      <!-- Login Link -->\r\n      <div class="login-link">\r\n        Already have an account? <a routerLink="/login">Sign in</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/register/register.component.css */\n.register-wrapper {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(10, 37, 64, 0.92) 0%,\n      rgba(30, 64, 175, 0.88) 100%),\n    radial-gradient(\n      circle at top right,\n      #1e40af 0%,\n      #0a2540 100%);\n}\n.register-wrapper::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 20% 30%,\n      rgba(199, 154, 42, 0.16) 0%,\n      transparent 40%),\n    radial-gradient(\n      circle at 80% 70%,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 40%);\n  pointer-events: none;\n}\n.register-bg-shapes {\n  display: none;\n}\n.register-container {\n  width: 100%;\n  max-width: 500px;\n  position: relative;\n  z-index: 1;\n  animation: fadeInUp 0.4s ease;\n}\n.register-card {\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 36px 32px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);\n  border-top: 4px solid #c79a2a;\n}\n.register-header {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.register-logo {\n  width: 64px;\n  height: 64px;\n  background: #0a2540;\n  border: 2px solid #c79a2a;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n  font-size: 1.6rem;\n  color: #c79a2a;\n}\n.register-header h1 {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #0a2540;\n}\n.register-subtitle {\n  color: #64748b;\n  font-size: 0.82rem;\n  margin-top: 4px;\n}\n.register-card .form-group label {\n  color: #475569;\n}\n.register-card .form-control {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  color: #0f172a;\n  border-radius: 8px;\n  padding: 11px 14px;\n}\n.register-card .form-control:focus {\n  border-color: #1e40af;\n  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.10);\n  background: #fff;\n}\n.input-icon {\n  position: relative;\n}\n.input-icon i {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.9rem;\n}\n.input-icon .form-control.with-icon {\n  padding-left: 42px;\n}\n.role-select-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.role-option {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 14px 10px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  background: #f8fafc;\n}\n.role-option:hover {\n  border-color: #1e40af;\n  background: #eff6ff;\n}\n.role-option.selected {\n  border-color: #1e40af;\n  background: #eff6ff;\n  box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.10);\n}\n.role-option i {\n  font-size: 1.2rem;\n  margin-bottom: 6px;\n  color: #1e40af;\n}\n.role-option-label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.role-option-desc {\n  font-size: 0.68rem;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.btn-full {\n  width: 100%;\n  padding: 13px;\n  font-size: 0.95rem;\n  margin-top: 6px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.btn-full:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.login-link {\n  text-align: center;\n  margin-top: 18px;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.login-link a {\n  color: #1e40af;\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-link a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=register.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/register/register.component.ts", lineNumber: 14 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-MKWYTQRA.js.map
