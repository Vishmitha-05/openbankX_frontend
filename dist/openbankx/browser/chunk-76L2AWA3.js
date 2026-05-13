import {
  ConsentService
} from "./chunk-OJYWRIMV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-IBGG5UE3.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-QS26HGQT.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
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

// src/app/customer-portal/sca-verify/sca-verify.component.ts
var _c0 = (a0) => ({ "active": a0 });
function ScaVerifyComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, " Verifying consent ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ". Complete SCA to activate it. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", ctx_r0.consentId);
  }
}
function ScaVerifyComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ScaVerifyComponent_button_14_Template_button_click_0_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectMethod(m_r3.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, ctx_r0.method === m_r3.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r3.label, " ");
  }
}
function ScaVerifyComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2, " Verify & activate consent ");
    \u0275\u0275elementEnd();
  }
}
function ScaVerifyComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2, " Verifying... ");
    \u0275\u0275elementEnd();
  }
}
function ScaVerifyComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2, " Activated ");
    \u0275\u0275elementEnd();
  }
}
function ScaVerifyComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2, " Consent ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " is now ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "ACTIVE");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ". Redirecting to My Consents... ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", ctx_r0.consentId);
  }
}
function ScaVerifyComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
var ScaVerifyComponent = class _ScaVerifyComponent {
  route;
  router;
  consentService;
  methods = [
    { id: "OTP", label: "OTP (SMS)", description: "A 6-digit numeric code is sent to your registered phone.", length: 6, alphabet: "0123456789" },
    { id: "DEVICE", label: "Device push", description: "A 4-digit code is pushed to your trusted device.", length: 4, alphabet: "0123456789" },
    { id: "APP", label: "App approval", description: "An 8-character alphanumeric code from your banking app.", length: 8, alphabet: "ABCDEFGHJKLMNPQRSTUVWXYZ23456789" }
  ];
  method = "OTP";
  generatedCode = "";
  enteredCode = "";
  consentId = null;
  isVerifying = false;
  activated = false;
  errorMessage = "";
  constructor(route, router, consentService) {
    this.route = route;
    this.router = router;
    this.consentService = consentService;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["consentId"])
        this.consentId = Number(params["consentId"]);
      if (params["method"] && this.methods.some((m) => m.id === params["method"])) {
        this.method = params["method"];
      }
      this.regenerateCode();
    });
  }
  get currentMethod() {
    return this.methods.find((m) => m.id === this.method);
  }
  selectMethod(id) {
    if (this.method === id)
      return;
    this.method = id;
    this.enteredCode = "";
    this.errorMessage = "";
    this.regenerateCode();
  }
  /** Generate a random code locally based on the SCA method and log it to the console. */
  regenerateCode() {
    const cfg = this.currentMethod;
    let code = "";
    for (let i = 0; i < cfg.length; i++) {
      code += cfg.alphabet.charAt(Math.floor(Math.random() * cfg.alphabet.length));
    }
    this.generatedCode = code;
    this.errorMessage = "";
    console.log(`%c[SCA] ${cfg.label} code for consent #${this.consentId ?? "\u2014"}: %c${code}`, "color:#1e40af; font-weight:bold;", "color:#c79a2a; font-weight:bold; font-size:1.1em; letter-spacing:2px;");
  }
  placeholder() {
    return "\u2022".repeat(this.currentMethod.length);
  }
  verify() {
    this.errorMessage = "";
    const entered = (this.enteredCode || "").trim().toUpperCase();
    const expected = (this.generatedCode || "").toUpperCase();
    if (!entered) {
      this.errorMessage = `Please enter the ${this.currentMethod.label} code shown in the console.`;
      return;
    }
    if (entered !== expected) {
      this.errorMessage = "That code is incorrect. Check the browser console for the current code, or generate a new one.";
      return;
    }
    if (!this.consentId) {
      this.errorMessage = "No consent reference found. Go back to Browse Apps and try again.";
      return;
    }
    this.isVerifying = true;
    this.consentService.activateAfterSca(this.consentId, this.method).subscribe({
      next: () => {
        this.isVerifying = false;
        this.activated = true;
        setTimeout(() => this.router.navigate(["/customer/consents"]), 1500);
      },
      error: (err) => {
        this.isVerifying = false;
        this.errorMessage = err?.error?.message || "SCA passed but the consent could not be activated. Please try again.";
      }
    });
  }
  static \u0275fac = function ScaVerifyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScaVerifyComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ConsentService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScaVerifyComponent, selectors: [["app-sca-verify"]], decls: 36, vars: 13, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-shield-alt"], [1, "page-subtitle"], [1, "glass-card", 2, "max-width", "480px"], ["class", "alert alert-info mb-16", 4, "ngIf"], [1, "form-group"], [1, "pill-tabs"], ["class", "pill-tab", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "alert", "alert-info", "mb-16"], [1, "fas", "fa-terminal"], ["type", "text", "autocomplete", "off", 1, "form-control", "otp-input", 3, "ngModelChange", "ngModel", "placeholder", "maxlength"], [1, "btn", "btn-light", "mb-12", 3, "click"], [1, "fas", "fa-redo"], [1, "btn", "btn-primary", 2, "width", "100%", 3, "click", "disabled"], [4, "ngIf"], ["class", "alert alert-success mt-16", 4, "ngIf"], ["class", "alert alert-error mt-16", 4, "ngIf"], [1, "fas", "fa-info-circle"], [1, "pill-tab", 3, "click", "ngClass"], [1, "fas", "fa-check-circle"], [1, "fas", "fa-spinner", "fa-spin"], [1, "alert", "alert-success", "mt-16"], [1, "alert", "alert-error", "mt-16"], [1, "fas", "fa-times-circle"]], template: function ScaVerifyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " SCA Verification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Strong Customer Authentication \u2014 verify your identity to activate the consent");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275template(9, ScaVerifyComponent_div_9_Template, 6, 1, "div", 5);
      \u0275\u0275elementStart(10, "div", 6)(11, "label");
      \u0275\u0275text(12, "Verification Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7);
      \u0275\u0275template(14, ScaVerifyComponent_button_14_Template, 2, 4, "button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "small", 9);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 10);
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275text(19, " A one-time code has been generated. ");
      \u0275\u0275elementStart(20, "strong");
      \u0275\u0275text(21, "Open your browser console");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " (F12 \u2192 Console) to see it. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 6)(24, "label");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ScaVerifyComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.enteredCode, $event) || (ctx.enteredCode = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "button", 13);
      \u0275\u0275listener("click", function ScaVerifyComponent_Template_button_click_27_listener() {
        return ctx.regenerateCode();
      });
      \u0275\u0275element(28, "i", 14);
      \u0275\u0275text(29, " Generate a new code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 15);
      \u0275\u0275listener("click", function ScaVerifyComponent_Template_button_click_30_listener() {
        return ctx.verify();
      });
      \u0275\u0275template(31, ScaVerifyComponent_span_31_Template, 3, 0, "span", 16)(32, ScaVerifyComponent_span_32_Template, 3, 0, "span", 16)(33, ScaVerifyComponent_span_33_Template, 3, 0, "span", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, ScaVerifyComponent_div_34_Template, 9, 1, "div", 17)(35, ScaVerifyComponent_div_35_Template, 3, 1, "div", 18);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.consentId);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.methods);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentMethod.description);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("Enter the ", ctx.currentMethod.label, " code");
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.enteredCode);
      \u0275\u0275property("placeholder", ctx.placeholder())("maxlength", ctx.currentMethod.length);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.isVerifying || ctx.activated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isVerifying && !ctx.activated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isVerifying);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n.sca-icon-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.sca-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.6rem;\n  color: #fff;\n  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.3);\n}\n.otp-input[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5rem;\n  letter-spacing: 12px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=sca-verify.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScaVerifyComponent, [{
    type: Component,
    args: [{ selector: "app-sca-verify", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-shield-alt"></i> SCA Verification</h1>
          <p class="page-subtitle">Strong Customer Authentication \u2014 verify your identity to activate the consent</p>
        </div>
      </div>

      <div class="glass-card" style="max-width:480px">

        <div class="alert alert-info mb-16" *ngIf="consentId">
          <i class="fas fa-info-circle"></i>
          Verifying consent <strong>#{{ consentId }}</strong>. Complete SCA to activate it.
        </div>

        <div class="form-group">
          <label>Verification Method</label>
          <div class="pill-tabs">
            <button *ngFor="let m of methods"
                    class="pill-tab"
                    [ngClass]="{ 'active': method === m.id }"
                    (click)="selectMethod(m.id)">
              {{ m.label }}
            </button>
          </div>
          <small class="text-muted">{{ currentMethod.description }}</small>
        </div>

        <div class="alert alert-info mb-16">
          <i class="fas fa-terminal"></i>
          A one-time code has been generated. <strong>Open your browser console</strong>
          (F12 \u2192 Console) to see it.
        </div>

        <div class="form-group">
          <label>Enter the {{ currentMethod.label }} code</label>
          <input type="text"
                 class="form-control otp-input"
                 [(ngModel)]="enteredCode"
                 [placeholder]="placeholder()"
                 [maxlength]="currentMethod.length"
                 autocomplete="off">
        </div>

        <button class="btn btn-light mb-12" (click)="regenerateCode()">
          <i class="fas fa-redo"></i> Generate a new code
        </button>

        <button class="btn btn-primary" style="width:100%"
                (click)="verify()"
                [disabled]="isVerifying || activated">
          <span *ngIf="!isVerifying && !activated">
            <i class="fas fa-check-circle"></i> Verify &amp; activate consent
          </span>
          <span *ngIf="isVerifying">
            <i class="fas fa-spinner fa-spin"></i> Verifying...
          </span>
          <span *ngIf="activated">
            <i class="fas fa-check-circle"></i> Activated
          </span>
        </button>

        <div class="alert alert-success mt-16" *ngIf="activated">
          <i class="fas fa-check-circle"></i>
          Consent <strong>#{{ consentId }}</strong> is now <strong>ACTIVE</strong>.
          Redirecting to My Consents...
        </div>

        <div class="alert alert-error mt-16" *ngIf="errorMessage">
          <i class="fas fa-times-circle"></i> {{ errorMessage }}
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/customer-portal/sca-verify/sca-verify.component.css */\n.sca-icon-wrapper {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.sca-icon {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.6rem;\n  color: #fff;\n  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.3);\n}\n.otp-input {\n  text-align: center;\n  font-size: 1.5rem;\n  letter-spacing: 12px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=sca-verify.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ConsentService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScaVerifyComponent, { className: "ScaVerifyComponent", filePath: "src/app/customer-portal/sca-verify/sca-verify.component.ts", lineNumber: 98 });
})();
export {
  ScaVerifyComponent
};
//# sourceMappingURL=chunk-76L2AWA3.js.map
