import {
  AccountService
} from "./chunk-J35VJXPN.js";
import {
  ConsentService
} from "./chunk-OJYWRIMV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IBGG5UE3.js";
import {
  AuthService
} from "./chunk-WCVDOMTU.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-QS26HGQT.js";
import {
  environment
} from "./chunk-TX3HFKHN.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  setClassMetadata,
  timeout,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6UHLKSNQ.js";

// src/app/core/services/payment.service.ts
var PAYMENT_REQUEST_TIMEOUT_MS = 2e4;
var PaymentService = class _PaymentService {
  http;
  apiUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  initiatePayment(payload) {
    return this.http.post(`${this.apiUrl}/pisp/payments`, payload, { headers: this.tppHeaders(payload.tppAppId) }).pipe(timeout(PAYMENT_REQUEST_TIMEOUT_MS));
  }
  executePayment(paymentId, tppAppId) {
    return this.http.post(`${this.apiUrl}/pisp/payments/${paymentId}/execute`, {}, { headers: this.tppHeaders(tppAppId) }).pipe(timeout(PAYMENT_REQUEST_TIMEOUT_MS));
  }
  tppHeaders(tppAppId) {
    if (!tppAppId)
      return void 0;
    return new HttpHeaders({ "X-TPP-App-Id": String(tppAppId) });
  }
  static \u0275fac = function PaymentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentService, factory: _PaymentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/customer-portal/initiate-payment/initiate-payment.component.ts
function InitiatePaymentComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, " Accessed via ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.appName);
  }
}
function InitiatePaymentComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, " Open this page through an app that has the ");
    \u0275\u0275elementStart(2, "em");
    \u0275\u0275text(3, "Initiate payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " permission ");
    \u0275\u0275elementEnd();
  }
}
function InitiatePaymentComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275text(2, " Checking consent... ");
    \u0275\u0275elementEnd();
  }
}
function InitiatePaymentComponent_div_9_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function InitiatePaymentComponent_div_9_button_7_Template_button_click_0_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openThroughApp(c_r3));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r3.tppApp == null ? null : c_r3.tppApp.appName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((c_r3.tppApp == null ? null : c_r3.tppApp.tpp == null ? null : c_r3.tppApp.tpp.legalName) || "");
  }
}
function InitiatePaymentComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h3", 14);
    \u0275\u0275element(2, "i", 15);
    \u0275\u0275text(3, " Open through an app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275template(7, InitiatePaymentComponent_div_9_button_7_Template, 9, 2, "button", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" You've granted payment access to ", ctx_r0.eligibleApps.length, " app", ctx_r0.eligibleApps.length === 1 ? "" : "s", ". Pick which one you'd like to use. ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.eligibleApps);
  }
}
function InitiatePaymentComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "No active consents yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 27);
    \u0275\u0275text(5, " You haven't granted any app access yet. Go to ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "My Apps");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " to get started. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 28);
    \u0275\u0275listener("click", function InitiatePaymentComponent_div_10_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToBrowseApps());
    });
    \u0275\u0275element(10, "i", 29);
    \u0275\u0275text(11, " Open My Apps ");
    \u0275\u0275elementEnd()();
  }
}
function InitiatePaymentComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "No app has payment access yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 27);
    \u0275\u0275text(5, " None of your active consents include the ");
    \u0275\u0275elementStart(6, "em");
    \u0275\u0275text(7, "Initiate payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " permission. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 28);
    \u0275\u0275listener("click", function InitiatePaymentComponent_div_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToBrowseApps());
    });
    \u0275\u0275element(10, "i", 29);
    \u0275\u0275text(11, " Open My Apps ");
    \u0275\u0275elementEnd()();
  }
}
function InitiatePaymentComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "This app doesn't have payment access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 27);
    \u0275\u0275text(5, " Your consent for ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " doesn't include the ");
    \u0275\u0275elementStart(9, "em");
    \u0275\u0275text(10, "Initiate payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " permission. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 28);
    \u0275\u0275listener("click", function InitiatePaymentComponent_div_12_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToBrowseApps());
    });
    \u0275\u0275element(13, "i", 29);
    \u0275\u0275text(14, " Open another app ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.appName || "this app");
  }
}
function InitiatePaymentComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function InitiatePaymentComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "You have no bank accounts on file to pay from.");
    \u0275\u0275elementEnd()();
  }
}
function InitiatePaymentComponent_div_13_ng_container_3_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", acc_r8.accountId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", acc_r8.accountNumberMasked, " \xB7 ", acc_r8.type, " \xB7 ", acc_r8.currency, " ");
  }
}
function InitiatePaymentComponent_div_13_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37)(2, "label");
    \u0275\u0275text(3, "From account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function InitiatePaymentComponent_div_13_ng_container_3_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedAccountId, $event) || (ctx_r0.selectedAccountId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 39);
    \u0275\u0275text(6, "Select one of your accounts\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, InitiatePaymentComponent_div_13_ng_container_3_option_7_Template, 2, 4, "option", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 37)(9, "label");
    \u0275\u0275text(10, "To account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function InitiatePaymentComponent_div_13_ng_container_3_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.payeeAccount, $event) || (ctx_r0.payeeAccount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 37)(13, "label");
    \u0275\u0275text(14, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 42)(16, "span", 43);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function InitiatePaymentComponent_div_13_ng_container_3_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.amount, $event) || (ctx_r0.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 37)(20, "label");
    \u0275\u0275text(21, "Reference (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function InitiatePaymentComponent_div_13_ng_container_3_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.narrative, $event) || (ctx_r0.narrative = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 46)(24, "button", 47);
    \u0275\u0275listener("click", function InitiatePaymentComponent_div_13_ng_container_3_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitPayment());
    });
    \u0275\u0275element(25, "i", 2);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 48);
    \u0275\u0275listener("click", function InitiatePaymentComponent_div_13_ng_container_3_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275text(29, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedAccountId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.accounts);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.payeeAccount);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.currency);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.narrative);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.selectedAccountId || !ctx_r0.payeeAccount || !ctx_r0.amount || ctx_r0.amount <= 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Pay ", ctx_r0.amount ? ctx_r0.currency + " " + \u0275\u0275pipeBind2(27, 9, ctx_r0.amount, "1.2-2") : "", " ");
  }
}
function InitiatePaymentComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, InitiatePaymentComponent_div_13_div_1_Template, 2, 1, "div", 31)(2, InitiatePaymentComponent_div_13_div_2_Template, 4, 0, "div", 32)(3, InitiatePaymentComponent_div_13_ng_container_3_Template, 30, 12, "ng-container", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.accounts.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.accounts.length > 0);
  }
}
function InitiatePaymentComponent_div_14_strong_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", ctx_r0.paymentRecord.paymentId);
  }
}
function InitiatePaymentComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "h3", 50);
    \u0275\u0275text(2, "Processing your payment\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 51)(4, "li");
    \u0275\u0275element(5, "i", 52);
    \u0275\u0275text(6, " Creating payment instruction ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "li");
    \u0275\u0275element(8, "i", 52);
    \u0275\u0275text(9, " Verifying with the bank ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275element(11, "i", 52);
    \u0275\u0275text(12, " Executing transfer ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 53);
    \u0275\u0275element(14, "i", 54);
    \u0275\u0275text(15);
    \u0275\u0275template(16, InitiatePaymentComponent_div_14_strong_16_Template, 2, 1, "strong", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r0.step === "verifying" || ctx_r0.step === "executing")("current", ctx_r0.step === "initiating");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.step === "initiating" ? "fa-spinner fa-spin" : "fa-check-circle");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.step === "executing")("current", ctx_r0.step === "verifying");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.step === "verifying" ? "fa-spinner fa-spin" : ctx_r0.step === "executing" ? "fa-check-circle" : "fa-circle");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("current", ctx_r0.step === "executing");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.step === "executing" ? "fa-spinner fa-spin" : "fa-circle");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Secure payment via ", ctx_r0.appName, " \xB7 payment ID ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentRecord);
  }
}
function InitiatePaymentComponent_div_15_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 27);
    \u0275\u0275text(2, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.narrative);
  }
}
function InitiatePaymentComponent_div_15_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 27);
    \u0275\u0275text(2, "Balance before");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.currency, " ", \u0275\u0275pipeBind2(5, 2, ctx_r0.preBalance, "1.2-2"));
  }
}
function InitiatePaymentComponent_div_15_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 27);
    \u0275\u0275text(2, "Balance now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 67);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.currency, " ", \u0275\u0275pipeBind2(5, 2, ctx_r0.postBalance, "1.2-2"));
  }
}
function InitiatePaymentComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57);
    \u0275\u0275element(3, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Payment successful");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 59)(9, "div", 60)(10, "span", 27);
    \u0275\u0275text(11, "Payment ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 60)(15, "span", 27);
    \u0275\u0275text(16, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 60)(20, "span", 27);
    \u0275\u0275text(21, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 60)(25, "span", 27);
    \u0275\u0275text(26, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, InitiatePaymentComponent_div_15_div_30_Template, 5, 1, "div", 61)(31, InitiatePaymentComponent_div_15_div_31_Template, 6, 5, "div", 61)(32, InitiatePaymentComponent_div_15_div_32_Template, 6, 5, "div", 61);
    \u0275\u0275elementStart(33, "div", 60)(34, "span", 27);
    \u0275\u0275text(35, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 62);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 63)(39, "button", 64);
    \u0275\u0275listener("click", function InitiatePaymentComponent_div_15_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewTransactions());
    });
    \u0275\u0275element(40, "i", 65);
    \u0275\u0275text(41, " View transaction history ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 48);
    \u0275\u0275listener("click", function InitiatePaymentComponent_div_15_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newPayment());
    });
    \u0275\u0275element(43, "i", 66);
    \u0275\u0275text(44, " Make another payment ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("#", ctx_r0.paymentRecord == null ? null : ctx_r0.paymentRecord.paymentId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.accountNumberMasked, " (", ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.type, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.payeeAccount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.currency, " ", \u0275\u0275pipeBind2(29, 11, ctx_r0.amount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.narrative);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.preBalance !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.postBalance !== null);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.paymentRecord == null ? null : ctx_r0.paymentRecord.status) || "EXECUTED");
  }
}
function InitiatePaymentComponent_div_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "span", 27);
    \u0275\u0275text(3, "Payment ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 60)(7, "span", 27);
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 74);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", ctx_r0.paymentRecord.paymentId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.paymentRecord.status);
  }
}
function InitiatePaymentComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 56)(2, "div", 69);
    \u0275\u0275element(3, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Payment failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, InitiatePaymentComponent_div_16_div_8_Template, 11, 2, "div", 72);
    \u0275\u0275elementStart(9, "div", 63)(10, "button", 64);
    \u0275\u0275listener("click", function InitiatePaymentComponent_div_16_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newPayment());
    });
    \u0275\u0275element(11, "i", 73);
    \u0275\u0275text(12, " Try again ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 48);
    \u0275\u0275listener("click", function InitiatePaymentComponent_div_16_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275text(14, "Close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentRecord);
  }
}
var InitiatePaymentComponent = class _InitiatePaymentComponent {
  route;
  router;
  accountService;
  paymentService;
  authService;
  consentService;
  accounts = [];
  selectedAccountId = null;
  payeeAccount = "";
  amount = null;
  narrative = "";
  successMessage = "";
  errorMessage = "";
  isCheckingPermission = true;
  hasPaymentAccess = false;
  eligibleApps = [];
  noConsentsAtAll = false;
  tppAppId = null;
  appName = "";
  /** Multi-step payment state, drives the inline progress UI. */
  step = "idle";
  /** The created PaymentInitiation (after backend save). */
  paymentRecord = null;
  /** Snapshot of the source account *before* the payment, so we can show
   *  both the previous and new balance after execution. */
  preBalance = null;
  postBalance = null;
  constructor(route, router, accountService, paymentService, authService, consentService) {
    this.route = route;
    this.router = router;
    this.accountService = accountService;
    this.paymentService = paymentService;
    this.authService = authService;
    this.consentService = consentService;
  }
  ngOnInit() {
    const userId = this.authService.getUserId();
    const qpId = Number(this.route.snapshot.queryParamMap.get("tppAppId"));
    this.tppAppId = qpId > 0 ? qpId : null;
    this.consentService.getConsentsByUser(userId).subscribe({
      next: (consents) => {
        const active = (consents || []).filter((c) => c.status === "ACTIVE");
        this.noConsentsAtAll = active.length === 0;
        this.eligibleApps = active.filter((c) => this.hasScope(c, "payments"));
        if (this.tppAppId) {
          const consent = active.find((c) => c.tppApp?.tppAppId === this.tppAppId);
          if (consent) {
            this.appName = consent.tppApp.appName;
            this.hasPaymentAccess = this.hasScope(consent, "payments");
            if (this.hasPaymentAccess) {
              this.accountService.getAccounts(userId, this.tppAppId).subscribe({
                next: (accs) => {
                  this.accounts = accs || [];
                  this.isCheckingPermission = false;
                },
                error: () => {
                  this.errorMessage = "Unable to load accounts.";
                  this.isCheckingPermission = false;
                }
              });
              return;
            }
          }
        }
        this.isCheckingPermission = false;
      },
      error: () => {
        this.errorMessage = "Unable to validate consent.";
        this.isCheckingPermission = false;
      }
    });
  }
  hasScope(consent, scope) {
    try {
      const scopes = JSON.parse(consent.scopeJSON);
      return scopes.includes(scope);
    } catch {
      return false;
    }
  }
  openThroughApp(consent) {
    this.router.navigate(["/customer/payment-initiate"], {
      queryParams: { tppAppId: consent.tppApp?.tppAppId }
    }).then(() => window.location.reload());
  }
  goToBrowseApps() {
    this.router.navigate(["/customer/apps"]);
  }
  /* ---------------- Selected source account ---------------- */
  get selectedAccount() {
    return this.accounts.find((a) => a.accountId === this.selectedAccountId);
  }
  get currency() {
    return this.selectedAccount?.currency || "GBP";
  }
  /* ---------------- Payment flow ---------------- */
  /** Step 1 — initiate */
  submitPayment() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.selectedAccountId || !this.payeeAccount || !this.amount || this.amount <= 0) {
      this.errorMessage = "Please fill all required fields correctly.";
      return;
    }
    if (!this.tppAppId) {
      this.errorMessage = "Open this page through an app to initiate a payment.";
      return;
    }
    if (this.selectedAccount && this.amount > this.selectedAccount.balance) {
      this.errorMessage = `Insufficient funds. Available balance is ${this.currency} ${this.selectedAccount.balance.toFixed(2)}.`;
      return;
    }
    this.preBalance = this.selectedAccount ? this.selectedAccount.balance : null;
    this.step = "initiating";
    this.paymentService.initiatePayment({
      tppAppId: this.tppAppId,
      debtorAccountRef: this.selectedAccountId.toString(),
      creditorAccountRef: this.payeeAccount,
      amount: this.amount,
      currency: this.currency
    }).subscribe({
      next: (payment) => {
        this.paymentRecord = payment;
        this.step = "verifying";
        setTimeout(() => this.executeStep(payment.paymentId), 700);
      },
      error: (err) => {
        this.step = "failed";
        this.errorMessage = this.describeError(err, "Could not create the payment instruction");
      }
    });
  }
  /** Step 2 — execute */
  executeStep(paymentId) {
    this.step = "executing";
    this.paymentService.executePayment(paymentId, this.tppAppId).subscribe({
      next: (payment) => {
        this.paymentRecord = payment;
        if (payment.status === "REJECTED") {
          this.step = "failed";
          this.errorMessage = "Payment rejected by the bank \u2014 most likely insufficient funds on the source account.";
          return;
        }
        const userId = this.authService.getUserId();
        this.accountService.getAccounts(userId, this.tppAppId).subscribe({
          next: (accs) => {
            this.accounts = accs || [];
            this.postBalance = this.accounts.find((a) => a.accountId === this.selectedAccountId)?.balance ?? null;
            this.step = "done";
            this.successMessage = `Payment of ${this.currency} ${this.amount?.toFixed(2)} executed successfully.`;
          },
          error: () => {
            this.step = "done";
            this.successMessage = `Payment of ${this.currency} ${this.amount?.toFixed(2)} executed successfully.`;
          }
        });
      },
      error: (err) => {
        this.step = "failed";
        this.errorMessage = this.describeError(err, "The bank could not execute the transfer");
      }
    });
  }
  /** Turn an HTTP / RxJS timeout error into something human-readable. */
  describeError(err, fallback) {
    if (err?.name === "TimeoutError") {
      return "The bank did not respond within 20 seconds. Check your network connection and try again \u2014 or contact support if it keeps failing.";
    }
    if (err?.status === 0)
      return "Cannot reach the bank service. Make sure the backend is running on port 8081.";
    if (err?.status === 401)
      return "Your session has expired. Please sign in again.";
    if (err?.status === 403)
      return "You do not have permission to initiate this payment.";
    const serverMsg = err?.error?.message || err?.error?.error;
    return serverMsg || `${fallback} (HTTP ${err?.status || "?"}).`;
  }
  /* ---------------- After completion ---------------- */
  viewTransactions() {
    this.router.navigate(["/customer/accounts"], {
      queryParams: { tppAppId: this.tppAppId, focus: this.selectedAccountId }
    });
  }
  newPayment() {
    this.payeeAccount = "";
    this.amount = null;
    this.narrative = "";
    this.paymentRecord = null;
    this.preBalance = null;
    this.postBalance = null;
    this.successMessage = "";
    this.errorMessage = "";
    this.step = "idle";
  }
  cancel() {
    this.router.navigate(["/customer/consents"]);
  }
  static \u0275fac = function InitiatePaymentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InitiatePaymentComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(PaymentService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ConsentService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InitiatePaymentComponent, selectors: [["app-initiate-payment"]], decls: 17, vars: 11, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-paper-plane"], ["class", "page-subtitle", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "glass-card", 4, "ngIf"], ["class", "glass-card no-consent-card", 4, "ngIf"], ["class", "glass-card max-w-600", 4, "ngIf"], ["class", "glass-card max-w-600 receipt success", 4, "ngIf"], ["class", "glass-card max-w-600 receipt error", 4, "ngIf"], [1, "page-subtitle"], [1, "loading-container"], [1, "spinner"], [1, "glass-card"], [1, "mb-12"], [1, "fas", "fa-hand-pointer"], [1, "text-muted", "mb-16"], [1, "app-picker"], ["class", "app-picker-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "app-picker-item", 3, "click"], [1, "app-picker-icon"], [1, "fas", "fa-cube"], [1, "app-picker-meta"], [1, "text-sm", "text-muted"], [1, "fas", "fa-chevron-right", "text-muted"], [1, "glass-card", "no-consent-card"], [1, "fas", "fa-lock", "no-consent-icon"], [1, "text-muted"], [1, "btn", "btn-primary", "mt-12", 3, "click"], [1, "fas", "fa-store"], [1, "glass-card", "max-w-600"], ["class", "alert alert-error", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-error"], [1, "empty-state"], [1, "fas", "fa-piggy-bank"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Recipient account number or IBAN (e.g. ****-5678)", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "amount-input-wrap"], [1, "amount-currency"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. May rent, dinner, etc.", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-16", "mt-20"], [1, "btn", "btn-primary", "flex-1", 3, "click", "disabled"], [1, "btn", "btn-secondary", "flex-1", 3, "click"], [3, "ngValue"], [1, "mb-16"], [1, "pay-progress"], [1, "fas", 3, "ngClass"], [1, "text-muted", "text-sm", "mt-12"], [1, "fas", "fa-shield-alt"], [1, "glass-card", "max-w-600", "receipt", "success"], [1, "receipt-header"], [1, "receipt-tick"], [1, "fas", "fa-check"], [1, "receipt-rows"], [1, "receipt-row"], ["class", "receipt-row", 4, "ngIf"], [1, "badge", "badge-active"], [1, "flex", "gap-12", "mt-20"], [1, "btn", "btn-primary", "flex-1", 3, "click"], [1, "fas", "fa-receipt"], [1, "fas", "fa-plus"], [1, "text-success"], [1, "glass-card", "max-w-600", "receipt", "error"], [1, "receipt-tick", "fail"], [1, "fas", "fa-times"], [1, "text-error"], ["class", "receipt-rows", 4, "ngIf"], [1, "fas", "fa-redo"], [1, "badge", "badge-revoked"]], template: function InitiatePaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Initiate Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, InitiatePaymentComponent_p_6_Template, 4, 1, "p", 3)(7, InitiatePaymentComponent_p_7_Template, 5, 0, "p", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, InitiatePaymentComponent_div_8_Template, 3, 0, "div", 4)(9, InitiatePaymentComponent_div_9_Template, 8, 3, "div", 5)(10, InitiatePaymentComponent_div_10_Template, 12, 0, "div", 6)(11, InitiatePaymentComponent_div_11_Template, 12, 0, "div", 6)(12, InitiatePaymentComponent_div_12_Template, 15, 1, "div", 6)(13, InitiatePaymentComponent_div_13_Template, 4, 3, "div", 7)(14, InitiatePaymentComponent_div_14_Template, 17, 15, "div", 7)(15, InitiatePaymentComponent_div_15_Template, 45, 14, "div", 8)(16, InitiatePaymentComponent_div_16_Template, 15, 2, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.appName);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.appName);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isCheckingPermission);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCheckingPermission && !ctx.tppAppId && ctx.eligibleApps.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCheckingPermission && !ctx.tppAppId && ctx.eligibleApps.length === 0 && ctx.noConsentsAtAll);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCheckingPermission && !ctx.tppAppId && ctx.eligibleApps.length === 0 && !ctx.noConsentsAtAll);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCheckingPermission && ctx.tppAppId && !ctx.hasPaymentAccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCheckingPermission && ctx.tppAppId && ctx.hasPaymentAccess && ctx.step === "idle");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step === "initiating" || ctx.step === "verifying" || ctx.step === "executing");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step === "done");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step === "failed");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ["\n.max-w-600[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.mt-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.gap-16[_ngcontent-%COMP%] {\n  gap: 16px;\n}\n.app-picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.app-picker-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 12px 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family: inherit;\n  text-align: left;\n}\n.app-picker-item[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.app-picker-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: #0a2540;\n  color: #c79a2a;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.app-picker-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.no-consent-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 24px;\n}\n.no-consent-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #d97706;\n  margin-bottom: 12px;\n}\n.amount-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.amount-currency[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.85rem;\n  pointer-events: none;\n}\n.amount-input-wrap[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  padding-left: 48px;\n}\n.pay-progress[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.pay-progress[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n  transition: all 0.2s ease;\n}\n.pay-progress[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 18px;\n  text-align: center;\n  color: #cbd5e1;\n}\n.pay-progress[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n  color: #0f172a;\n  font-weight: 600;\n}\n.pay-progress[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1e40af;\n}\n.pay-progress[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.pay-progress[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.receipt[_ngcontent-%COMP%] {\n  padding: 28px;\n  text-align: left;\n}\n.receipt-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.receipt-tick[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 14px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.6rem;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 3px solid #86efac;\n}\n.receipt-tick.fail[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n  border-color: #fca5a5;\n}\n.receipt.success[_ngcontent-%COMP%] {\n  border-top: 4px solid #16a34a;\n}\n.receipt.error[_ngcontent-%COMP%] {\n  border-top: 4px solid #dc2626;\n}\n.receipt-rows[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 8px 16px;\n  margin-top: 12px;\n}\n.receipt-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px dashed #e2e8f0;\n  font-size: 0.9rem;\n}\n.receipt-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.text-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n/*# sourceMappingURL=initiate-payment.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InitiatePaymentComponent, [{
    type: Component,
    args: [{ selector: "app-initiate-payment", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-content">

  <div class="page-header">
    <div>
      <h1><i class="fas fa-paper-plane"></i> Initiate Payment</h1>
      <p class="page-subtitle" *ngIf="appName">
        Accessed via <strong>{{ appName }}</strong>
      </p>
      <p class="page-subtitle" *ngIf="!appName">
        Open this page through an app that has the <em>Initiate payments</em> permission
      </p>
    </div>
  </div>

  <!-- LOADING -->
  <div class="loading-container" *ngIf="isCheckingPermission">
    <div class="spinner"></div>
    Checking consent...
  </div>

  <!-- DIRECT NAVIGATION \u2192 app picker -->
  <div *ngIf="!isCheckingPermission && !tppAppId && eligibleApps.length > 0"
       class="glass-card">
    <h3 class="mb-12"><i class="fas fa-hand-pointer"></i> Open through an app</h3>
    <p class="text-muted mb-16">
      You've granted payment access to {{ eligibleApps.length }} app{{ eligibleApps.length === 1 ? '' : 's' }}.
      Pick which one you'd like to use.
    </p>
    <div class="app-picker">
      <button *ngFor="let c of eligibleApps"
              class="app-picker-item"
              (click)="openThroughApp(c)">
        <div class="app-picker-icon"><i class="fas fa-cube"></i></div>
        <div class="app-picker-meta">
          <strong>{{ c.tppApp?.appName }}</strong>
          <span class="text-sm text-muted">{{ c.tppApp?.tpp?.legalName || '' }}</span>
        </div>
        <i class="fas fa-chevron-right text-muted"></i>
      </button>
    </div>
  </div>

  <!-- NO CONSENTS AT ALL -->
  <div *ngIf="!isCheckingPermission && !tppAppId && eligibleApps.length === 0 && noConsentsAtAll"
       class="glass-card no-consent-card">
    <i class="fas fa-lock no-consent-icon"></i>
    <h3>No active consents yet</h3>
    <p class="text-muted">
      You haven't granted any app access yet. Go to <strong>My Apps</strong> to get started.
    </p>
    <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
      <i class="fas fa-store"></i> Open My Apps
    </button>
  </div>

  <!-- HAS CONSENTS BUT NONE WITH payments SCOPE -->
  <div *ngIf="!isCheckingPermission && !tppAppId && eligibleApps.length === 0 && !noConsentsAtAll"
       class="glass-card no-consent-card">
    <i class="fas fa-lock no-consent-icon"></i>
    <h3>No app has payment access yet</h3>
    <p class="text-muted">
      None of your active consents include the <em>Initiate payments</em> permission.
    </p>
    <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
      <i class="fas fa-store"></i> Open My Apps
    </button>
  </div>

  <!-- OPENED VIA APP, BUT IT DOESN'T HAVE payments -->
  <div *ngIf="!isCheckingPermission && tppAppId && !hasPaymentAccess"
       class="glass-card no-consent-card">
    <i class="fas fa-lock no-consent-icon"></i>
    <h3>This app doesn't have payment access</h3>
    <p class="text-muted">
      Your consent for <strong>{{ appName || 'this app' }}</strong> doesn't include the
      <em>Initiate payments</em> permission.
    </p>
    <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
      <i class="fas fa-store"></i> Open another app
    </button>
  </div>

  <!-- =============================================================
       PAYMENT FORM (allowed AND not yet started)
       ============================================================= -->
  <div class="glass-card max-w-600"
       *ngIf="!isCheckingPermission && tppAppId && hasPaymentAccess && step === 'idle'">

    <div class="alert alert-error" *ngIf="errorMessage">{{ errorMessage }}</div>

    <div class="empty-state" *ngIf="accounts.length === 0">
      <i class="fas fa-piggy-bank"></i>
      <p>You have no bank accounts on file to pay from.</p>
    </div>

    <ng-container *ngIf="accounts.length > 0">

      <div class="form-group">
        <label>From account</label>
        <select class="form-control" [(ngModel)]="selectedAccountId">
          <option [ngValue]="null" disabled>Select one of your accounts\u2026</option>
          <option *ngFor="let acc of accounts" [ngValue]="acc.accountId">
            {{ acc.accountNumberMasked }} \xB7 {{ acc.type }} \xB7 {{ acc.currency }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label>To account</label>
        <input type="text" class="form-control"
               [(ngModel)]="payeeAccount"
               placeholder="Recipient account number or IBAN (e.g. ****-5678)">
      </div>

      <div class="form-group">
        <label>Amount</label>
        <div class="amount-input-wrap">
          <span class="amount-currency">{{ currency }}</span>
          <input type="number" class="form-control"
                 min="0" step="0.01"
                 placeholder="0.00"
                 [(ngModel)]="amount">
        </div>
      </div>

      <div class="form-group">
        <label>Reference (optional)</label>
        <input type="text" class="form-control"
               [(ngModel)]="narrative"
               placeholder="e.g. May rent, dinner, etc.">
      </div>

      <div class="flex gap-16 mt-20">
        <button class="btn btn-primary flex-1"
                (click)="submitPayment()"
                [disabled]="!selectedAccountId || !payeeAccount || !amount || amount <= 0">
          <i class="fas fa-paper-plane"></i> Pay {{ amount ? (currency + ' ' + (amount | number:'1.2-2')) : '' }}
        </button>
        <button class="btn btn-secondary flex-1" (click)="cancel()">Cancel</button>
      </div>

    </ng-container>
  </div>

  <!-- =============================================================
       PROGRESS \u2014 initiating / verifying / executing
       ============================================================= -->
  <div class="glass-card max-w-600"
       *ngIf="step === 'initiating' || step === 'verifying' || step === 'executing'">
    <h3 class="mb-16">Processing your payment\u2026</h3>

    <ul class="pay-progress">
      <li [class.active]="step === 'verifying' || step === 'executing'"
          [class.current]="step === 'initiating'">
        <i class="fas"
           [ngClass]="step === 'initiating' ? 'fa-spinner fa-spin' : 'fa-check-circle'"></i>
        Creating payment instruction
      </li>
      <li [class.active]="step === 'executing'"
          [class.current]="step === 'verifying'">
        <i class="fas"
           [ngClass]="step === 'verifying' ? 'fa-spinner fa-spin' :
                      step === 'executing' ? 'fa-check-circle' :
                      'fa-circle'"></i>
        Verifying with the bank
      </li>
      <li [class.current]="step === 'executing'">
        <i class="fas"
           [ngClass]="step === 'executing' ? 'fa-spinner fa-spin' : 'fa-circle'"></i>
        Executing transfer
      </li>
    </ul>

    <p class="text-muted text-sm mt-12">
      <i class="fas fa-shield-alt"></i> Secure payment via {{ appName }} \xB7 payment ID
      <strong *ngIf="paymentRecord">#{{ paymentRecord.paymentId }}</strong>
    </p>
  </div>

  <!-- =============================================================
       PAYMENT DONE \u2014 receipt
       ============================================================= -->
  <div class="glass-card max-w-600 receipt success" *ngIf="step === 'done'">
    <div class="receipt-header">
      <div class="receipt-tick"><i class="fas fa-check"></i></div>
      <h2>Payment successful</h2>
      <p class="text-muted">{{ successMessage }}</p>
    </div>

    <div class="receipt-rows">
      <div class="receipt-row">
        <span class="text-muted">Payment ID</span>
        <strong>#{{ paymentRecord?.paymentId }}</strong>
      </div>
      <div class="receipt-row">
        <span class="text-muted">From</span>
        <strong>{{ selectedAccount?.accountNumberMasked }} ({{ selectedAccount?.type }})</strong>
      </div>
      <div class="receipt-row">
        <span class="text-muted">To</span>
        <strong>{{ payeeAccount }}</strong>
      </div>
      <div class="receipt-row">
        <span class="text-muted">Amount</span>
        <strong>{{ currency }} {{ amount | number:'1.2-2' }}</strong>
      </div>
      <div class="receipt-row" *ngIf="narrative">
        <span class="text-muted">Reference</span>
        <strong>{{ narrative }}</strong>
      </div>
      <div class="receipt-row" *ngIf="preBalance !== null">
        <span class="text-muted">Balance before</span>
        <strong>{{ currency }} {{ preBalance | number:'1.2-2' }}</strong>
      </div>
      <div class="receipt-row" *ngIf="postBalance !== null">
        <span class="text-muted">Balance now</span>
        <strong class="text-success">{{ currency }} {{ postBalance | number:'1.2-2' }}</strong>
      </div>
      <div class="receipt-row">
        <span class="text-muted">Status</span>
        <span class="badge badge-active">{{ paymentRecord?.status || 'EXECUTED' }}</span>
      </div>
    </div>

    <div class="flex gap-12 mt-20">
      <button class="btn btn-primary flex-1" (click)="viewTransactions()">
        <i class="fas fa-receipt"></i> View transaction history
      </button>
      <button class="btn btn-secondary flex-1" (click)="newPayment()">
        <i class="fas fa-plus"></i> Make another payment
      </button>
    </div>
  </div>

  <!-- =============================================================
       PAYMENT FAILED
       ============================================================= -->
  <div class="glass-card max-w-600 receipt error" *ngIf="step === 'failed'">
    <div class="receipt-header">
      <div class="receipt-tick fail"><i class="fas fa-times"></i></div>
      <h2>Payment failed</h2>
      <p class="text-error">{{ errorMessage }}</p>
    </div>

    <div class="receipt-rows" *ngIf="paymentRecord">
      <div class="receipt-row">
        <span class="text-muted">Payment ID</span>
        <strong>#{{ paymentRecord.paymentId }}</strong>
      </div>
      <div class="receipt-row">
        <span class="text-muted">Status</span>
        <span class="badge badge-revoked">{{ paymentRecord.status }}</span>
      </div>
    </div>

    <div class="flex gap-12 mt-20">
      <button class="btn btn-primary flex-1" (click)="newPayment()">
        <i class="fas fa-redo"></i> Try again
      </button>
      <button class="btn btn-secondary flex-1" (click)="cancel()">Close</button>
    </div>
  </div>

</div>
`, styles: ["/* src/app/customer-portal/initiate-payment/initiate-payment.component.css */\n.max-w-600 {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.flex-1 {\n  flex: 1;\n}\n.gap-16 {\n  gap: 16px;\n}\n.app-picker {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.app-picker-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 12px 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family: inherit;\n  text-align: left;\n}\n.app-picker-item:hover {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.app-picker-icon {\n  width: 38px;\n  height: 38px;\n  background: #0a2540;\n  color: #c79a2a;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.app-picker-meta {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.no-consent-card {\n  text-align: center;\n  padding: 40px 24px;\n}\n.no-consent-icon {\n  font-size: 2.5rem;\n  color: #d97706;\n  margin-bottom: 12px;\n}\n.amount-input-wrap {\n  position: relative;\n}\n.amount-currency {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.85rem;\n  pointer-events: none;\n}\n.amount-input-wrap input.form-control {\n  padding-left: 48px;\n}\n.pay-progress {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.pay-progress li {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n  transition: all 0.2s ease;\n}\n.pay-progress li i {\n  width: 18px;\n  text-align: center;\n  color: #cbd5e1;\n}\n.pay-progress li.current {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n  color: #0f172a;\n  font-weight: 600;\n}\n.pay-progress li.current i {\n  color: #1e40af;\n}\n.pay-progress li.active {\n  color: #0f172a;\n}\n.pay-progress li.active i {\n  color: #16a34a;\n}\n.receipt {\n  padding: 28px;\n  text-align: left;\n}\n.receipt-header {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.receipt-tick {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 14px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.6rem;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 3px solid #86efac;\n}\n.receipt-tick.fail {\n  background: #fee2e2;\n  color: #dc2626;\n  border-color: #fca5a5;\n}\n.receipt.success {\n  border-top: 4px solid #16a34a;\n}\n.receipt.error {\n  border-top: 4px solid #dc2626;\n}\n.receipt-rows {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 8px 16px;\n  margin-top: 12px;\n}\n.receipt-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px dashed #e2e8f0;\n  font-size: 0.9rem;\n}\n.receipt-row:last-child {\n  border-bottom: 0;\n}\n.text-success {\n  color: #16a34a;\n}\n.text-error {\n  color: #dc2626;\n}\n/*# sourceMappingURL=initiate-payment.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: AccountService }, { type: PaymentService }, { type: AuthService }, { type: ConsentService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InitiatePaymentComponent, { className: "InitiatePaymentComponent", filePath: "src/app/customer-portal/initiate-payment/initiate-payment.component.ts", lineNumber: 20 });
})();
export {
  InitiatePaymentComponent
};
//# sourceMappingURL=chunk-LDQB7QEC.js.map
