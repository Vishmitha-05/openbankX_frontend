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

// src/app/core/services/funds.service.ts
var FUNDS_REQUEST_TIMEOUT_MS = 2e4;
var FundsService = class _FundsService {
  http;
  apiUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  /**
   * Run a funds-confirmation against the given account. The tppAppId is sent
   * both inside the JSON (so it's persisted on the row) and as an
   * X-TPP-App-Id header (so api_log can attribute the call).
   */
  checkFunds(req) {
    const body = {
      tppApp: { tppAppId: req.tppAppId },
      accountRef: { accountId: req.accountId },
      amount: req.amount,
      currency: req.currency || "GBP"
    };
    const headers = new HttpHeaders({ "X-TPP-App-Id": String(req.tppAppId) });
    return this.http.post(`${this.apiUrl}/cbpii/funds-check`, body, { headers }).pipe(timeout(FUNDS_REQUEST_TIMEOUT_MS));
  }
  static \u0275fac = function FundsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FundsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FundsService, factory: _FundsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FundsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/customer-portal/funds-check/funds-check.component.ts
function FundsCheckComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
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
function FundsCheckComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, " Open this page through an app that has the ");
    \u0275\u0275elementStart(2, "em");
    \u0275\u0275text(3, "Confirm funds");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " permission ");
    \u0275\u0275elementEnd();
  }
}
function FundsCheckComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275text(2, " Checking consent... ");
    \u0275\u0275elementEnd();
  }
}
function FundsCheckComponent_div_9_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function FundsCheckComponent_div_9_button_7_Template_button_click_0_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openThroughApp(c_r3));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 22);
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
function FundsCheckComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "h3", 12);
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275text(3, " Open through an app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275template(7, FundsCheckComponent_div_9_button_7_Template, 9, 2, "button", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" You've granted funds-check access to ", ctx_r0.eligibleApps.length, " app", ctx_r0.eligibleApps.length === 1 ? "" : "s", ". Pick which one you'd like to use. ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.eligibleApps);
  }
}
function FundsCheckComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "No active consents yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 25);
    \u0275\u0275text(5, " You haven't granted any app access yet. Go to ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "My Apps");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " to get started. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 26);
    \u0275\u0275listener("click", function FundsCheckComponent_div_10_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToBrowseApps());
    });
    \u0275\u0275element(10, "i", 27);
    \u0275\u0275text(11, " Open My Apps ");
    \u0275\u0275elementEnd()();
  }
}
function FundsCheckComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "No app has funds-check access yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 25);
    \u0275\u0275text(5, " None of your active consents include the ");
    \u0275\u0275elementStart(6, "em");
    \u0275\u0275text(7, "Confirm funds");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " permission. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 26);
    \u0275\u0275listener("click", function FundsCheckComponent_div_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToBrowseApps());
    });
    \u0275\u0275element(10, "i", 27);
    \u0275\u0275text(11, " Open My Apps ");
    \u0275\u0275elementEnd()();
  }
}
function FundsCheckComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "This app doesn't have funds-check access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 25);
    \u0275\u0275text(5, " Your consent for ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " doesn't include the ");
    \u0275\u0275elementStart(9, "em");
    \u0275\u0275text(10, "Confirm funds");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " permission. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 26);
    \u0275\u0275listener("click", function FundsCheckComponent_div_12_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToBrowseApps());
    });
    \u0275\u0275element(13, "i", 27);
    \u0275\u0275text(14, " Open another app ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.appName || "this app");
  }
}
function FundsCheckComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "You have no bank accounts on file to run a funds check against.");
    \u0275\u0275elementEnd()();
  }
}
function FundsCheckComponent_div_13_ng_container_2_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", acc_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", acc_r8.accountNumberMasked, " \xB7 ", acc_r8.type, " \xB7 ", acc_r8.currency, " ");
  }
}
function FundsCheckComponent_div_13_ng_container_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedAccount.currency);
  }
}
function FundsCheckComponent_div_13_ng_container_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function FundsCheckComponent_div_13_ng_container_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2, " Check funds availability");
    \u0275\u0275elementEnd();
  }
}
function FundsCheckComponent_div_13_ng_container_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275text(2, " Checking...");
    \u0275\u0275elementEnd();
  }
}
function FundsCheckComponent_div_13_ng_container_2_div_18_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2, " Sufficient funds available ");
    \u0275\u0275elementEnd();
  }
}
function FundsCheckComponent_div_13_ng_container_2_div_18_h3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 56);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275text(2, " Insufficient funds ");
    \u0275\u0275elementEnd();
  }
}
function FundsCheckComponent_div_13_ng_container_2_div_18_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 25);
    \u0275\u0275text(2, "Additional amount needed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 56);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency, " ", \u0275\u0275pipeBind2(5, 2, ctx_r0.result.shortage, "1.2-2"), " ");
  }
}
function FundsCheckComponent_div_13_ng_container_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, FundsCheckComponent_div_13_ng_container_2_div_18_h3_1_Template, 3, 0, "h3", 50)(2, FundsCheckComponent_div_13_ng_container_2_div_18_h3_2_Template, 3, 0, "h3", 51);
    \u0275\u0275elementStart(3, "div", 52)(4, "span", 25);
    \u0275\u0275text(5, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 52)(9, "span", 25);
    \u0275\u0275text(10, "Amount requested");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 52)(15, "span", 25);
    \u0275\u0275text(16, "Current balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, FundsCheckComponent_div_13_ng_container_2_div_18_div_20_Template, 6, 5, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("success", ctx_r0.result.sufficient)("error", !ctx_r0.result.sufficient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.result.sufficient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.result.sufficient);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.accountNumberMasked, " (", ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.type, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency, " ", \u0275\u0275pipeBind2(13, 13, ctx_r0.amount, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency, " ", \u0275\u0275pipeBind2(19, 16, ctx_r0.result.balance, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.result.sufficient);
  }
}
function FundsCheckComponent_div_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33)(2, "label");
    \u0275\u0275text(3, "Choose an account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function FundsCheckComponent_div_13_ng_container_2_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedAccount, $event) || (ctx_r0.selectedAccount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FundsCheckComponent_div_13_ng_container_2_Template_select_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onAccountChange());
    });
    \u0275\u0275elementStart(5, "option", 35);
    \u0275\u0275text(6, "Select one of your accounts\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FundsCheckComponent_div_13_ng_container_2_option_7_Template, 2, 4, "option", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 33)(9, "label");
    \u0275\u0275text(10, "Amount to check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 37);
    \u0275\u0275template(12, FundsCheckComponent_div_13_ng_container_2_span_12_Template, 2, 1, "span", 38);
    \u0275\u0275elementStart(13, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function FundsCheckComponent_div_13_ng_container_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.amount, $event) || (ctx_r0.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FundsCheckComponent_div_13_ng_container_2_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.result = null);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, FundsCheckComponent_div_13_ng_container_2_div_14_Template, 3, 1, "div", 40);
    \u0275\u0275elementStart(15, "button", 41);
    \u0275\u0275listener("click", function FundsCheckComponent_div_13_ng_container_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.checkFunds());
    });
    \u0275\u0275template(16, FundsCheckComponent_div_13_ng_container_2_span_16_Template, 3, 0, "span", 30)(17, FundsCheckComponent_div_13_ng_container_2_span_17_Template, 3, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, FundsCheckComponent_div_13_ng_container_2_div_18_Template, 21, 19, "div", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedAccount);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.accounts);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.selectedAccount);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.amount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.selectedAccount || !ctx_r0.amount || ctx_r0.amount <= 0 || ctx_r0.isChecking);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isChecking);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isChecking);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.result);
  }
}
function FundsCheckComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, FundsCheckComponent_div_13_div_1_Template, 4, 0, "div", 29)(2, FundsCheckComponent_div_13_ng_container_2_Template, 19, 10, "ng-container", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.accounts.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.accounts.length > 0);
  }
}
var FundsCheckComponent = class _FundsCheckComponent {
  route;
  router;
  accountService;
  authService;
  consentService;
  fundsService;
  accounts = [];
  selectedAccount = null;
  amount = null;
  appName = "";
  tppAppId = null;
  isCheckingPermission = true;
  hasFundsAccess = false;
  /** All consents that grant funds-confirmations on an ACTIVE consent. */
  eligibleApps = [];
  /** True only if the user has no ACTIVE consents at all. */
  noConsentsAtAll = false;
  errorMessage = "";
  isChecking = false;
  result = null;
  constructor(route, router, accountService, authService, consentService, fundsService) {
    this.route = route;
    this.router = router;
    this.accountService = accountService;
    this.authService = authService;
    this.consentService = consentService;
    this.fundsService = fundsService;
  }
  ngOnInit() {
    const userId = this.authService.getUserId();
    const qpId = Number(this.route.snapshot.queryParamMap.get("tppAppId"));
    this.tppAppId = qpId > 0 ? qpId : null;
    this.consentService.getConsentsByUser(userId).subscribe({
      next: (consents) => {
        const active = (consents || []).filter((c) => c.status === "ACTIVE");
        this.noConsentsAtAll = active.length === 0;
        this.eligibleApps = active.filter((c) => this.hasScope(c, "funds-confirmations"));
        if (this.tppAppId) {
          const consent = active.find((c) => c.tppApp?.tppAppId === this.tppAppId);
          if (consent) {
            this.appName = consent.tppApp.appName;
            this.hasFundsAccess = this.hasScope(consent, "funds-confirmations");
            if (this.hasFundsAccess) {
              this.accountService.getAccounts(userId).subscribe({
                next: (accs) => {
                  this.accounts = accs || [];
                  this.isCheckingPermission = false;
                },
                error: () => {
                  this.errorMessage = "Unable to load accounts for funds check.";
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
  /** Reset any prior result when the user picks a different account. */
  onAccountChange() {
    this.result = null;
    this.errorMessage = "";
  }
  openThroughApp(consent) {
    this.router.navigate(["/customer/funds-check"], {
      queryParams: { tppAppId: consent.tppApp?.tppAppId }
    }).then(() => window.location.reload());
  }
  goToBrowseApps() {
    this.router.navigate(["/customer/apps"]);
  }
  checkFunds() {
    this.result = null;
    this.errorMessage = "";
    if (!this.selectedAccount || !this.amount || this.amount <= 0) {
      this.errorMessage = "Please select an account and enter a valid amount.";
      return;
    }
    if (!this.tppAppId) {
      this.errorMessage = "Open this page through an app to run a funds check.";
      return;
    }
    this.isChecking = true;
    this.fundsService.checkFunds({
      tppAppId: this.tppAppId,
      accountId: this.selectedAccount.accountId,
      amount: this.amount,
      currency: this.selectedAccount.currency
    }).subscribe({
      next: (saved) => {
        this.isChecking = false;
        const balance = this.selectedAccount.balance;
        const sufficient = (saved?.result ?? "SUFFICIENT") === "SUFFICIENT";
        this.result = sufficient ? { sufficient: true, balance, recordId: saved?.fundsCheckId } : { sufficient: false, balance, shortage: this.amount - balance, recordId: saved?.fundsCheckId };
      },
      error: (err) => {
        this.isChecking = false;
        if (err?.name === "TimeoutError") {
          this.errorMessage = "The bank did not respond within 20 seconds. Please try again.";
        } else if (err?.status === 0) {
          this.errorMessage = "Cannot reach the backend. Make sure it is running on port 8081.";
        } else if (err?.error?.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = "Funds check failed.";
        }
      }
    });
  }
  static \u0275fac = function FundsCheckComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FundsCheckComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ConsentService), \u0275\u0275directiveInject(FundsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FundsCheckComponent, selectors: [["app-funds-check"]], decls: 14, vars: 8, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-search-dollar"], ["class", "page-subtitle", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "glass-card", 4, "ngIf"], ["class", "glass-card no-consent-card", 4, "ngIf"], ["class", "glass-card max-w-600", 4, "ngIf"], [1, "page-subtitle"], [1, "loading-container"], [1, "spinner"], [1, "glass-card"], [1, "mb-12"], [1, "fas", "fa-hand-pointer"], [1, "text-muted", "mb-16"], [1, "app-picker"], ["class", "app-picker-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "app-picker-item", 3, "click"], [1, "app-picker-icon"], [1, "fas", "fa-cube"], [1, "app-picker-meta"], [1, "text-sm", "text-muted"], [1, "fas", "fa-chevron-right", "text-muted"], [1, "glass-card", "no-consent-card"], [1, "fas", "fa-lock", "no-consent-icon"], [1, "text-muted"], [1, "btn", "btn-primary", "mt-12", 3, "click"], [1, "fas", "fa-store"], [1, "glass-card", "max-w-600"], ["class", "empty-state", 4, "ngIf"], [4, "ngIf"], [1, "empty-state"], [1, "fas", "fa-piggy-bank"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "amount-input-wrap"], ["class", "amount-currency", 4, "ngIf"], ["type", "number", "placeholder", "0.00", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "alert alert-error", 4, "ngIf"], [1, "btn", "btn-primary", "btn-full", 3, "click", "disabled"], ["class", "funds-result mt-20", 3, "success", "error", 4, "ngIf"], [3, "ngValue"], [1, "amount-currency"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-search"], [1, "fas", "fa-spinner", "fa-spin"], [1, "funds-result", "mt-20"], ["class", "text-success", 4, "ngIf"], ["class", "text-error", 4, "ngIf"], [1, "result-row"], ["class", "result-row", 4, "ngIf"], [1, "text-success"], [1, "fas", "fa-check-circle"], [1, "text-error"], [1, "fas", "fa-times-circle"]], template: function FundsCheckComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Funds Confirmation");
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, FundsCheckComponent_p_6_Template, 4, 1, "p", 3)(7, FundsCheckComponent_p_7_Template, 5, 0, "p", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, FundsCheckComponent_div_8_Template, 3, 0, "div", 4)(9, FundsCheckComponent_div_9_Template, 8, 3, "div", 5)(10, FundsCheckComponent_div_10_Template, 12, 0, "div", 6)(11, FundsCheckComponent_div_11_Template, 12, 0, "div", 6)(12, FundsCheckComponent_div_12_Template, 15, 1, "div", 6)(13, FundsCheckComponent_div_13_Template, 3, 2, "div", 7);
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
      \u0275\u0275property("ngIf", !ctx.isCheckingPermission && ctx.tppAppId && !ctx.hasFundsAccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCheckingPermission && ctx.tppAppId && ctx.hasFundsAccess);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ["\n.max-w-600[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mt-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.funds-result[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  background: #f8fafc;\n}\n.funds-result.success[_ngcontent-%COMP%] {\n  border-left: 5px solid #16a34a;\n  background: #f0fdf4;\n}\n.funds-result.error[_ngcontent-%COMP%] {\n  border-left: 5px solid #dc2626;\n  background: #fef2f2;\n}\n.funds-result[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.result-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  border-bottom: 1px dashed #e2e8f0;\n  font-size: 0.9rem;\n}\n.result-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.text-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.amount-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.amount-currency[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.85rem;\n  pointer-events: none;\n}\n.amount-input-wrap[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  padding-left: 48px;\n}\n.app-picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.app-picker-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 12px 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family: inherit;\n  text-align: left;\n}\n.app-picker-item[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.app-picker-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: #0a2540;\n  color: #c79a2a;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.app-picker-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.no-consent-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 24px;\n}\n.no-consent-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #d97706;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=funds-check.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FundsCheckComponent, [{
    type: Component,
    args: [{ selector: "app-funds-check", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-content">

  <div class="page-header">
    <div>
      <h1><i class="fas fa-search-dollar"></i> Funds Confirmation</h1>
      <p class="page-subtitle" *ngIf="appName">
        Accessed via <strong>{{ appName }}</strong>
      </p>
      <p class="page-subtitle" *ngIf="!appName">
        Open this page through an app that has the <em>Confirm funds</em> permission
      </p>
    </div>
  </div>

  <!-- LOADING -->
  <div class="loading-container" *ngIf="isCheckingPermission">
    <div class="spinner"></div>
    Checking consent...
  </div>

  <!-- ============================================================
       DIRECT NAVIGATION \u2014 show app picker
       ============================================================ -->
  <div *ngIf="!isCheckingPermission && !tppAppId && eligibleApps.length > 0"
       class="glass-card">
    <h3 class="mb-12"><i class="fas fa-hand-pointer"></i> Open through an app</h3>
    <p class="text-muted mb-16">
      You've granted funds-check access to {{ eligibleApps.length }} app{{ eligibleApps.length === 1 ? '' : 's' }}.
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

  <!-- HAS CONSENTS BUT NONE WITH funds-confirmations SCOPE -->
  <div *ngIf="!isCheckingPermission && !tppAppId && eligibleApps.length === 0 && !noConsentsAtAll"
       class="glass-card no-consent-card">
    <i class="fas fa-lock no-consent-icon"></i>
    <h3>No app has funds-check access yet</h3>
    <p class="text-muted">
      None of your active consents include the <em>Confirm funds</em> permission.
    </p>
    <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
      <i class="fas fa-store"></i> Open My Apps
    </button>
  </div>

  <!-- OPENED VIA APP, BUT IT DOESN'T HAVE funds-confirmations -->
  <div *ngIf="!isCheckingPermission && tppAppId && !hasFundsAccess"
       class="glass-card no-consent-card">
    <i class="fas fa-lock no-consent-icon"></i>
    <h3>This app doesn't have funds-check access</h3>
    <p class="text-muted">
      Your consent for <strong>{{ appName || 'this app' }}</strong> doesn't include the
      <em>Confirm funds</em> permission.
    </p>
    <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
      <i class="fas fa-store"></i> Open another app
    </button>
  </div>

  <!-- ============================================================
       FUNDS CHECK FORM (allowed)
       ============================================================ -->
  <div class="glass-card max-w-600"
       *ngIf="!isCheckingPermission && tppAppId && hasFundsAccess">

    <div class="empty-state" *ngIf="accounts.length === 0">
      <i class="fas fa-piggy-bank"></i>
      <p>You have no bank accounts on file to run a funds check against.</p>
    </div>

    <ng-container *ngIf="accounts.length > 0">

      <div class="form-group">
        <label>Choose an account</label>
        <select class="form-control"
                [(ngModel)]="selectedAccount"
                (ngModelChange)="onAccountChange()">
          <option [ngValue]="null" disabled>Select one of your accounts\u2026</option>
          <option *ngFor="let acc of accounts" [ngValue]="acc">
            {{ acc.accountNumberMasked }} \xB7 {{ acc.type }} \xB7 {{ acc.currency }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label>Amount to check</label>
        <div class="amount-input-wrap">
          <span class="amount-currency" *ngIf="selectedAccount">{{ selectedAccount.currency }}</span>
          <input type="number"
                 class="form-control"
                 placeholder="0.00"
                 min="0"
                 step="0.01"
                 [(ngModel)]="amount"
                 (ngModelChange)="result = null">
        </div>
      </div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <button class="btn btn-primary btn-full"
              (click)="checkFunds()"
              [disabled]="!selectedAccount || !amount || amount <= 0 || isChecking">
        <span *ngIf="!isChecking"><i class="fas fa-search"></i> Check funds availability</span>
        <span *ngIf="isChecking"><i class="fas fa-spinner fa-spin"></i> Checking...</span>
      </button>

      <!-- ============================================================
           RESULT
           ============================================================ -->
      <div *ngIf="result" class="funds-result mt-20"
           [class.success]="result.sufficient"
           [class.error]="!result.sufficient">

        <h3 *ngIf="result.sufficient" class="text-success">
          <i class="fas fa-check-circle"></i> Sufficient funds available
        </h3>
        <h3 *ngIf="!result.sufficient" class="text-error">
          <i class="fas fa-times-circle"></i> Insufficient funds
        </h3>

        <div class="result-row">
          <span class="text-muted">Account</span>
          <strong>{{ selectedAccount?.accountNumberMasked }} ({{ selectedAccount?.type }})</strong>
        </div>
        <div class="result-row">
          <span class="text-muted">Amount requested</span>
          <strong>{{ selectedAccount?.currency }} {{ amount | number:'1.2-2' }}</strong>
        </div>
        <div class="result-row">
          <span class="text-muted">Current balance</span>
          <strong>{{ selectedAccount?.currency }} {{ result.balance | number:'1.2-2' }}</strong>
        </div>
        <div class="result-row" *ngIf="!result.sufficient">
          <span class="text-muted">Additional amount needed</span>
          <strong class="text-error">
            {{ selectedAccount?.currency }} {{ result.shortage | number:'1.2-2' }}
          </strong>
        </div>
      </div>

    </ng-container>
  </div>
</div>
`, styles: ["/* src/app/customer-portal/funds-check/funds-check.component.css */\n.max-w-600 {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.funds-result {\n  padding: 20px;\n  border-radius: 10px;\n  background: #f8fafc;\n}\n.funds-result.success {\n  border-left: 5px solid #16a34a;\n  background: #f0fdf4;\n}\n.funds-result.error {\n  border-left: 5px solid #dc2626;\n  background: #fef2f2;\n}\n.funds-result h3 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.result-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  border-bottom: 1px dashed #e2e8f0;\n  font-size: 0.9rem;\n}\n.result-row:last-child {\n  border-bottom: 0;\n}\n.text-success {\n  color: #16a34a;\n}\n.text-error {\n  color: #dc2626;\n}\n.amount-input-wrap {\n  position: relative;\n}\n.amount-currency {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.85rem;\n  pointer-events: none;\n}\n.amount-input-wrap input.form-control {\n  padding-left: 48px;\n}\n.app-picker {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.app-picker-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 12px 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family: inherit;\n  text-align: left;\n}\n.app-picker-item:hover {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.app-picker-icon {\n  width: 38px;\n  height: 38px;\n  background: #0a2540;\n  color: #c79a2a;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.app-picker-meta {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.no-consent-card {\n  text-align: center;\n  padding: 40px 24px;\n}\n.no-consent-icon {\n  font-size: 2.5rem;\n  color: #d97706;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=funds-check.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: AccountService }, { type: AuthService }, { type: ConsentService }, { type: FundsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FundsCheckComponent, { className: "FundsCheckComponent", filePath: "src/app/customer-portal/funds-check/funds-check.component.ts", lineNumber: 18 });
})();
export {
  FundsCheckComponent
};
//# sourceMappingURL=chunk-PPXA322I.js.map
