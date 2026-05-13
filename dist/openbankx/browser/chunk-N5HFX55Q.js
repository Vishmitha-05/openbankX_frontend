import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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

// src/app/developer-portal/tpp-registration/tpp-registration.component.ts
function TppRegistrationComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function TppRegistrationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function TppRegistrationComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, " Register TPP");
    \u0275\u0275elementEnd();
  }
}
function TppRegistrationComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2, " Registering...");
    \u0275\u0275elementEnd();
  }
}
var TppRegistrationComponent = class _TppRegistrationComponent {
  tppService;
  router;
  authService;
  legalName = "";
  registrationNumber = "";
  contactInfo = "";
  certificationRef = "";
  isSubmitting = false;
  successMessage = "";
  errorMessage = "";
  constructor(tppService, router, authService) {
    this.tppService = tppService;
    this.router = router;
    this.authService = authService;
  }
  ngOnInit() {
    this.contactInfo = this.authService.getEmail();
  }
  register() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.legalName || !this.registrationNumber) {
      this.errorMessage = "Legal name and registration number are required.";
      return;
    }
    const ownerEmail = this.authService.getEmail();
    if (!ownerEmail) {
      this.errorMessage = "Your session has expired. Please sign in again.";
      return;
    }
    this.isSubmitting = true;
    this.tppService.registerTpp({
      legalName: this.legalName,
      registrationNumber: this.registrationNumber,
      contactInfo: ownerEmail,
      certificationRef: this.certificationRef || "CERT-" + Date.now(),
      status: "SANDBOX"
    }).subscribe({
      next: () => {
        this.successMessage = "TPP registered successfully! Redirecting to apps...";
        setTimeout(() => this.router.navigate(["/developer/apps"]), 1500);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = this.describeError(err);
      }
    });
  }
  /** Turn the HTTP error into a meaningful, user-readable message. */
  describeError(err) {
    if (err?.status === 0) {
      return "Cannot reach the backend. Make sure it is running on port 8081.";
    }
    if (err?.status === 401) {
      return "Your session has expired. Please sign in again.";
    }
    if (err?.status === 403) {
      return "You do not have permission to register a TPP.";
    }
    const serverMsg = err?.error?.message || err?.error?.error || (typeof err?.error === "string" ? err.error : void 0);
    if (serverMsg) {
      if (/duplicate|unique|already exists|constraint/i.test(serverMsg)) {
        return `A TPP with registration number "${this.registrationNumber}" already exists. Use a different number.`;
      }
      return serverMsg;
    }
    if (err?.status === 409) {
      return `A TPP with registration number "${this.registrationNumber}" already exists.`;
    }
    if (err?.status === 500) {
      return "Server error while registering TPP. Likely the registration number is already taken \u2014 try a different one.";
    }
    return "Failed to register TPP. Please try again.";
  }
  static \u0275fac = function TppRegistrationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TppRegistrationComponent)(\u0275\u0275directiveInject(TppService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TppRegistrationComponent, selectors: [["app-tpp-registration"]], decls: 32, vars: 9, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-building"], [1, "page-subtitle"], [1, "glass-card", "max-w-600"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "form-group"], ["type", "text", "placeholder", "e.g. FinTech Solutions Ltd", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. FCA-123456", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "readonly", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-muted"], ["type", "text", "placeholder", "eIDAS certificate ref", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "btn-full", 3, "click", "disabled"], [4, "ngIf"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [1, "fas", "fa-rocket"], [1, "fas", "fa-spinner", "fa-spin"]], template: function TppRegistrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Register TPP Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Onboard your Third-Party Provider organisation");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275template(9, TppRegistrationComponent_div_9_Template, 3, 1, "div", 5)(10, TppRegistrationComponent_div_10_Template, 3, 1, "div", 6);
      \u0275\u0275elementStart(11, "div", 7)(12, "label");
      \u0275\u0275text(13, "Legal Company Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function TppRegistrationComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.legalName, $event) || (ctx.legalName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 7)(16, "label");
      \u0275\u0275text(17, "Registration Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function TppRegistrationComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.registrationNumber, $event) || (ctx.registrationNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 7)(20, "label");
      \u0275\u0275text(21, "Contact Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function TppRegistrationComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.contactInfo, $event) || (ctx.contactInfo = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "small", 11);
      \u0275\u0275text(24, "Linked to your account \u2014 used to attribute TPP and apps to you.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 7)(26, "label");
      \u0275\u0275text(27, "Certification Reference (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function TppRegistrationComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.certificationRef, $event) || (ctx.certificationRef = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "button", 13);
      \u0275\u0275listener("click", function TppRegistrationComponent_Template_button_click_29_listener() {
        return ctx.register();
      });
      \u0275\u0275template(30, TppRegistrationComponent_span_30_Template, 3, 0, "span", 14)(31, TppRegistrationComponent_span_31_Template, 3, 0, "span", 14);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.legalName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.registrationNumber);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactInfo);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.certificationRef);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n.max-w-600[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=tpp-registration.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TppRegistrationComponent, [{
    type: Component,
    args: [{ selector: "app-tpp-registration", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="page-content">\r\n  <div class="page-header">\r\n    <div>\r\n      <h1><i class="fas fa-building"></i> Register TPP Company</h1>\r\n      <p class="page-subtitle">Onboard your Third-Party Provider organisation</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="glass-card max-w-600">\r\n    <div class="alert alert-error" *ngIf="errorMessage">\r\n      <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}\r\n    </div>\r\n    <div class="alert alert-success" *ngIf="successMessage">\r\n      <i class="fas fa-check-circle"></i> {{ successMessage }}\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label>Legal Company Name</label>\r\n      <input type="text" class="form-control" placeholder="e.g. FinTech Solutions Ltd" [(ngModel)]="legalName">\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label>Registration Number</label>\r\n      <input type="text" class="form-control" placeholder="e.g. FCA-123456" [(ngModel)]="registrationNumber">\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label>Contact Email</label>\r\n      <input type="email" class="form-control"\r\n             [(ngModel)]="contactInfo"\r\n             readonly>\r\n      <small class="text-muted">Linked to your account \u2014 used to attribute TPP and apps to you.</small>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label>Certification Reference (Optional)</label>\r\n      <input type="text" class="form-control" placeholder="eIDAS certificate ref" [(ngModel)]="certificationRef">\r\n    </div>\r\n\r\n    <button class="btn btn-primary btn-full" (click)="register()" [disabled]="isSubmitting">\r\n      <span *ngIf="!isSubmitting"><i class="fas fa-rocket"></i> Register TPP</span>\r\n      <span *ngIf="isSubmitting"><i class="fas fa-spinner fa-spin"></i> Registering...</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/developer-portal/tpp-registration/tpp-registration.component.css */\n.max-w-600 {\n  max-width: 600px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=tpp-registration.component.css.map */\n"] }]
  }], () => [{ type: TppService }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TppRegistrationComponent, { className: "TppRegistrationComponent", filePath: "src/app/developer-portal/tpp-registration/tpp-registration.component.ts", lineNumber: 15 });
})();
export {
  TppRegistrationComponent
};
//# sourceMappingURL=chunk-N5HFX55Q.js.map
