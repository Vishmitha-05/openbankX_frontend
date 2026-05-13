import {
  ProductService
} from "./chunk-BXXXGKD4.js";
import {
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
  Router
} from "./chunk-QS26HGQT.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6UHLKSNQ.js";

// src/app/developer-portal/subscribe-plan/subscribe-plan.component.ts
var _c0 = (a0) => ({ "selected-plan": a0 });
var _c1 = (a0, a1, a2) => ({ "badge-active": a0, "badge-revoked": a1, "badge-expired": a2 });
function SubscriptionPlanComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
function SubscriptionPlanComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage);
  }
}
function SubscriptionPlanComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage);
  }
}
function SubscriptionPlanComponent_div_9_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", app_r3.tppAppId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", app_r3.appName, " ");
  }
}
function SubscriptionPlanComponent_div_9_small_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 24);
    \u0275\u0275text(1, " You don't have any approved apps yet. Wait for an admin to approve one. ");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlanComponent_div_9_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No plans configured for this app's API product yet. Ask the admin to add one.");
    \u0275\u0275elementEnd()();
  }
}
function SubscriptionPlanComponent_div_9_div_11_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function SubscriptionPlanComponent_div_9_div_11_div_4_div_1_Template_div_click_0_listener() {
      const plan_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectedPlanId = plan_r5.planId);
    });
    \u0275\u0275elementStart(1, "div", 33)(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36)(9, "div")(10, "span", 35);
    \u0275\u0275text(11, "Rate Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "br");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "span", 35);
    \u0275\u0275text(17, "Daily Quota");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "br");
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "span", 35);
    \u0275\u0275text(24, "SLA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "br");
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div")(29, "span", 35);
    \u0275\u0275text(30, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "br");
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const plan_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c0, ctx_r1.selectedPlanId === plan_r5.planId));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", plan_r5.environment === "SANDBOX" ? "badge-sandbox" : "badge-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r5.environment, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", plan_r5.planId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((plan_r5.apiProduct == null ? null : plan_r5.apiProduct.name) || "API Product");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", plan_r5.rateLimitPerMin, "/min");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 10, plan_r5.dailyQuota));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", plan_r5.sla, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", plan_r5.durationValue, " ", plan_r5.durationUnit);
  }
}
function SubscriptionPlanComponent_div_9_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, SubscriptionPlanComponent_div_9_div_11_div_4_div_1_Template, 34, 14, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.plansForSelectedApp);
  }
}
function SubscriptionPlanComponent_div_9_div_11_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275text(2, "Selected plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "span");
    \u0275\u0275text(5, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42)(9, "span");
    \u0275\u0275text(10, "Environment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 42)(14, "span");
    \u0275\u0275text(15, "Rate / Quota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r1.selectedPlan.apiProduct == null ? null : ctx_r1.selectedPlan.apiProduct.name) || "API Product");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedPlan.environment);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedPlan.rateLimitPerMin, "/min \xB7 ", \u0275\u0275pipeBind1(18, 4, ctx_r1.selectedPlan.dailyQuota), "/day");
  }
}
function SubscriptionPlanComponent_div_9_div_11_div_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Click a plan card above to pick one.");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlanComponent_div_9_div_11_div_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2, " Subscribe this app to the plan");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlanComponent_div_9_div_11_div_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2, " Subscribing...");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlanComponent_div_9_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, SubscriptionPlanComponent_div_9_div_11_div_5_div_1_Template, 19, 6, "div", 38)(2, SubscriptionPlanComponent_div_9_div_11_div_5_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function SubscriptionPlanComponent_div_9_div_11_div_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.subscribe());
    });
    \u0275\u0275template(5, SubscriptionPlanComponent_div_9_div_11_div_5_span_5_Template, 3, 0, "span", 6)(6, SubscriptionPlanComponent_div_9_div_11_div_5_span_6_Template, 3, 0, "span", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noPlan_r7 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPlan)("ngIfElse", noPlan_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isSubscribing || ctx_r1.selectedPlanId == null || ctx_r1.selectedAppId == null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSubscribing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubscribing);
  }
}
function SubscriptionPlanComponent_div_9_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SubscriptionPlanComponent_div_9_div_11_div_3_Template, 4, 0, "div", 25)(4, SubscriptionPlanComponent_div_9_div_11_div_4_Template, 2, 1, "div", 26)(5, SubscriptionPlanComponent_div_9_div_11_div_5_Template, 7, 5, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('2. Choose a plan for "', ctx_r1.selectedAppName, '"');
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.plansForSelectedApp.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.plansForSelectedApp.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.plansForSelectedApp.length > 0);
  }
}
function SubscriptionPlanComponent_div_9_div_12_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 34);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 50);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 50);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sub_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", sub_r8.subscriptionId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", sub_r8.apiPlan == null ? null : sub_r8.apiPlan.planId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((sub_r8.apiPlan == null ? null : sub_r8.apiPlan.apiProduct == null ? null : sub_r8.apiPlan.apiProduct.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", (sub_r8.apiPlan == null ? null : sub_r8.apiPlan.environment) === "SANDBOX" ? "badge-sandbox" : "badge-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (sub_r8.apiPlan == null ? null : sub_r8.apiPlan.environment) || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(15, _c1, sub_r8.status === "ACTIVE", sub_r8.status === "SUSPENDED", sub_r8.status === "CANCELLED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sub_r8.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 9, sub_r8.subscribedDate, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 12, sub_r8.expiryDate, "mediumDate"));
  }
}
function SubscriptionPlanComponent_div_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "h3", 46);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275text(3, " Active subscriptions for this app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "table", 48)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Environment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Subscribed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Expires");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, SubscriptionPlanComponent_div_9_div_12_tr_22_Template, 19, 19, "tr", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r1.subscriptions);
  }
}
function SubscriptionPlanComponent_div_9_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No subscriptions yet for this app.");
    \u0275\u0275elementEnd()();
  }
}
function SubscriptionPlanComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, SubscriptionPlanComponent_div_9_div_1_Template, 3, 1, "div", 9)(2, SubscriptionPlanComponent_div_9_div_2_Template, 3, 1, "div", 10);
    \u0275\u0275elementStart(3, "div", 11)(4, "h3", 12);
    \u0275\u0275text(5, "1. Select your app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionPlanComponent_div_9_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAppId, $event) || (ctx_r1.selectedAppId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SubscriptionPlanComponent_div_9_Template_select_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAppChange());
    });
    \u0275\u0275elementStart(7, "option", 14);
    \u0275\u0275text(8, "Choose an approved app");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SubscriptionPlanComponent_div_9_option_9_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SubscriptionPlanComponent_div_9_small_10_Template, 2, 0, "small", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SubscriptionPlanComponent_div_9_div_11_Template, 6, 4, "div", 6)(12, SubscriptionPlanComponent_div_9_div_12_Template, 23, 1, "div", 17)(13, SubscriptionPlanComponent_div_9_div_13_Template, 4, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.successMessage);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedAppId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getApprovedApps());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getApprovedApps().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAppId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAppId && ctx_r1.subscriptions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAppId && ctx_r1.subscriptions.length === 0);
  }
}
var SubscriptionPlanComponent = class _SubscriptionPlanComponent {
  productService;
  tppService;
  authService;
  router;
  plans = [];
  apps = [];
  subscriptions = [];
  selectedPlanId = null;
  selectedAppId = null;
  isLoading = true;
  isSubscribing = false;
  errorMessage = "";
  successMessage = "";
  constructor(productService, tppService, authService, router) {
    this.productService = productService;
    this.tppService = tppService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.loadData();
  }
  /* ---------------- Selected plan / app helpers ---------------- */
  get selectedPlan() {
    return this.plans.find((p) => p.planId === this.selectedPlanId);
  }
  get selectedAppName() {
    const app = this.apps.find((a) => a.tppAppId === this.selectedAppId);
    return app ? app.appName : "";
  }
  /**
   * Plans relevant to the currently-selected app.
   *
   * When an admin approves a TPP app, the backend auto-publishes an API Product
   * with the same name as the app. So a plan belongs to this app if its
   * apiProduct.name matches the app name (case-insensitively).
   */
  get plansForSelectedApp() {
    if (!this.selectedAppId)
      return [];
    const app = this.apps.find((a) => a.tppAppId === this.selectedAppId);
    if (!app)
      return [];
    const target = (app.appName || "").trim().toLowerCase();
    return this.plans.filter((p) => (p.apiProduct?.name || "").trim().toLowerCase() === target);
  }
  /* ---------------- Load ---------------- */
  loadData() {
    this.isLoading = true;
    this.productService.getPlans().subscribe({
      next: (p) => this.plans = p || [],
      error: () => this.errorMessage = "Failed to load plans"
    });
    this.tppService.getMyApps(this.authService.getEmail()).subscribe({
      next: (a) => {
        this.apps = a || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Failed to load apps";
        this.isLoading = false;
      }
    });
  }
  loadSubscriptions() {
    if (!this.selectedAppId) {
      this.subscriptions = [];
      return;
    }
    this.productService.getSubscriptionsByApp(this.selectedAppId).subscribe({
      next: (d) => this.subscriptions = d || [],
      error: () => this.subscriptions = []
    });
  }
  onAppChange() {
    this.selectedPlanId = null;
    this.successMessage = "";
    this.errorMessage = "";
    this.loadSubscriptions();
  }
  /* ---------------- Filter helpers (used by template) ---------------- */
  getApprovedApps() {
    return this.apps.filter((app) => app.status === "APPROVED");
  }
  /* ---------------- Subscribe ---------------- */
  subscribe() {
    if (this.selectedPlanId == null || this.selectedAppId == null) {
      this.errorMessage = "Please select both an app and a plan.";
      return;
    }
    const selectedPlan = this.plans.find((p) => p.planId === this.selectedPlanId);
    const selectedApp = this.apps.find((a) => a.tppAppId === this.selectedAppId);
    if (!selectedPlan || !selectedApp) {
      this.errorMessage = "Invalid plan or app selection.";
      return;
    }
    this.errorMessage = "";
    this.successMessage = "";
    this.isSubscribing = true;
    const payload = {
      apiPlan: { planId: selectedPlan.planId },
      tppApp: { tppAppId: selectedApp.tppAppId }
    };
    this.productService.createSubscription(payload).subscribe({
      next: (saved) => {
        this.isSubscribing = false;
        this.successMessage = `Subscribed "${selectedApp.appName}" to "${selectedPlan.apiProduct?.name || "plan"}". Active until ${saved?.expiryDate ? new Date(saved.expiryDate).toLocaleDateString() : "plan expiry"}.`;
        this.selectedPlanId = null;
        this.loadSubscriptions();
        setTimeout(() => this.router.navigate(["/developer/apps"]), 2e3);
      },
      error: (err) => {
        this.isSubscribing = false;
        const serverMsg = err?.error?.message || err?.error?.error;
        if (err?.status === 0) {
          this.errorMessage = "Cannot reach the backend. Make sure it is running on port 8081.";
        } else if (err?.status === 401) {
          this.errorMessage = "Your session has expired. Please sign in again.";
        } else if (serverMsg) {
          this.errorMessage = serverMsg;
        } else {
          this.errorMessage = `Subscription failed (HTTP ${err?.status || "?"})`;
        }
      }
    });
  }
  static \u0275fac = function SubscriptionPlanComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubscriptionPlanComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(TppService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionPlanComponent, selectors: [["app-subscription-plan"]], decls: 10, vars: 2, consts: [["noPlan", ""], [1, "page-content"], [1, "page-header"], [1, "fas", "fa-plug"], [1, "page-subtitle"], ["class", "loading-container", 4, "ngIf"], [4, "ngIf"], [1, "loading-container"], [1, "spinner"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "glass-card", "mb-20", 2, "max-width", "560px"], [1, "mb-12"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "text-muted", 4, "ngIf"], ["class", "glass-card mt-20", 4, "ngIf"], ["class", "empty-state", "style", "margin-top:20px", 4, "ngIf"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [3, "ngValue"], [1, "text-muted"], ["class", "empty-state", 4, "ngIf"], ["class", "grid-3 mb-20", 4, "ngIf"], ["class", "glass-card", "style", "max-width:560px", 4, "ngIf"], [1, "empty-state"], [1, "fas", "fa-sliders-h"], [1, "grid-3", "mb-20"], ["class", "glass-card plan-card", "role", "button", "tabindex", "0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["role", "button", "tabindex", "0", 1, "glass-card", "plan-card", 3, "click", "ngClass"], [1, "flex", "items-center", "justify-between", "mb-12"], [1, "badge", 3, "ngClass"], [1, "text-sm", "text-muted"], [1, "plan-stats", "mt-12"], [1, "glass-card", 2, "max-width", "560px"], ["class", "plan-summary-box", 4, "ngIf", "ngIfElse"], [1, "btn", "btn-primary", "btn-full", "mt-16", 3, "click", "disabled"], [1, "plan-summary-box"], [1, "plan-summary-title"], [1, "plan-summary-field"], [1, "fas", "fa-link"], [1, "fas", "fa-spinner", "fa-spin"], [1, "glass-card", "mt-20"], [1, "mb-16"], [1, "fas", "fa-clipboard-list"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "text-sm"], [1, "empty-state", 2, "margin-top", "20px"], [1, "fas", "fa-inbox"]], template: function SubscriptionPlanComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275text(5, " Subscribe to API Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Pick one of your approved apps, then choose a plan that matches its product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, SubscriptionPlanComponent_div_8_Template, 4, 0, "div", 5)(9, SubscriptionPlanComponent_div_9_Template, 14, 9, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionPlanComponent, [{
    type: Component,
    args: [{ selector: "app-subscription-plan", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-content">
  <div class="page-header">
    <div>
      <h1><i class="fas fa-plug"></i> Subscribe to API Plan</h1>
      <p class="page-subtitle">Pick one of your approved apps, then choose a plan that matches its product</p>
    </div>
  </div>

  <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div><span>Loading...</span></div>

  <div *ngIf="!isLoading">
    <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
    <div class="alert alert-success" *ngIf="successMessage"><i class="fas fa-check-circle"></i> {{ successMessage }}</div>

    <!-- Step 1: pick your app -->
    <div class="glass-card mb-20" style="max-width:560px">
      <h3 class="mb-12">1. Select your app</h3>
      <select class="form-control" [(ngModel)]="selectedAppId" (ngModelChange)="onAppChange()">
        <option [ngValue]="null" disabled>Choose an approved app</option>
        <option *ngFor="let app of getApprovedApps()" [ngValue]="app.tppAppId">
          {{ app.appName }}
        </option>
      </select>
      <small class="text-muted" *ngIf="getApprovedApps().length === 0">
        You don't have any approved apps yet. Wait for an admin to approve one.
      </small>
    </div>

    <!-- Step 2: pick a plan for that app -->
    <div *ngIf="selectedAppId">
      <h3 class="mb-12">2. Choose a plan for "{{ selectedAppName }}"</h3>

      <div class="empty-state" *ngIf="plansForSelectedApp.length === 0">
        <i class="fas fa-sliders-h"></i>
        <p>No plans configured for this app's API product yet. Ask the admin to add one.</p>
      </div>

      <div class="grid-3 mb-20" *ngIf="plansForSelectedApp.length > 0">
        <div *ngFor="let plan of plansForSelectedApp" class="glass-card plan-card"
             [ngClass]="{ 'selected-plan': selectedPlanId === plan.planId }"
             (click)="selectedPlanId = plan.planId"
             role="button"
             tabindex="0">
          <div class="flex items-center justify-between mb-12">
            <span class="badge" [ngClass]="plan.environment === 'SANDBOX' ? 'badge-sandbox' : 'badge-info'">
              {{ plan.environment }}
            </span>
            <span class="text-sm text-muted">#{{ plan.planId }}</span>
          </div>
          <h4>{{ plan.apiProduct?.name || 'API Product' }}</h4>
          <div class="plan-stats mt-12">
            <div><span class="text-sm text-muted">Rate Limit</span><br><strong>{{ plan.rateLimitPerMin }}/min</strong></div>
            <div><span class="text-sm text-muted">Daily Quota</span><br><strong>{{ plan.dailyQuota | number }}</strong></div>
            <div><span class="text-sm text-muted">SLA</span><br><strong>{{ plan.sla }}%</strong></div>
            <div><span class="text-sm text-muted">Duration</span><br><strong>{{ plan.durationValue }} {{ plan.durationUnit }}</strong></div>
          </div>
        </div>
      </div>

      <!-- Confirm bar -->
      <div class="glass-card" style="max-width:560px" *ngIf="plansForSelectedApp.length > 0">
        <div *ngIf="selectedPlan; else noPlan" class="plan-summary-box">
          <div class="plan-summary-title">Selected plan</div>
          <div class="plan-summary-field">
            <span>Product</span>
            <strong>{{ selectedPlan.apiProduct?.name || 'API Product' }}</strong>
          </div>
          <div class="plan-summary-field">
            <span>Environment</span>
            <strong>{{ selectedPlan.environment }}</strong>
          </div>
          <div class="plan-summary-field">
            <span>Rate / Quota</span>
            <strong>{{ selectedPlan.rateLimitPerMin }}/min \xB7 {{ selectedPlan.dailyQuota | number }}/day</strong>
          </div>
        </div>
        <ng-template #noPlan>
          <div class="text-muted">Click a plan card above to pick one.</div>
        </ng-template>

        <button class="btn btn-primary btn-full mt-16"
                (click)="subscribe()"
                [disabled]="isSubscribing || selectedPlanId == null || selectedAppId == null">
          <span *ngIf="!isSubscribing"><i class="fas fa-link"></i> Subscribe this app to the plan</span>
          <span *ngIf="isSubscribing"><i class="fas fa-spinner fa-spin"></i> Subscribing...</span>
        </button>
      </div>
    </div>

    <!-- Active subscriptions for the selected app -->
    <div class="glass-card mt-20" *ngIf="selectedAppId && subscriptions.length > 0">
      <h3 class="mb-16"><i class="fas fa-clipboard-list"></i> Active subscriptions for this app</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Plan</th>
            <th>Product</th>
            <th>Environment</th>
            <th>Status</th>
            <th>Subscribed</th>
            <th>Expires</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let sub of subscriptions">
            <td>#{{ sub.subscriptionId }}</td>
            <td>#{{ sub.apiPlan?.planId }}</td>
            <td>{{ sub.apiPlan?.apiProduct?.name || '\u2014' }}</td>
            <td>
              <span class="badge" [ngClass]="sub.apiPlan?.environment === 'SANDBOX' ? 'badge-sandbox' : 'badge-info'">
                {{ sub.apiPlan?.environment || '\u2014' }}
              </span>
            </td>
            <td>
              <span class="badge" [ngClass]="{
                'badge-active': sub.status === 'ACTIVE',
                'badge-revoked': sub.status === 'SUSPENDED',
                'badge-expired': sub.status === 'CANCELLED'
              }">{{ sub.status }}</span>
            </td>
            <td class="text-sm">{{ sub.subscribedDate | date:'mediumDate' }}</td>
            <td class="text-sm">{{ sub.expiryDate | date:'mediumDate' }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="empty-state" *ngIf="selectedAppId && subscriptions.length === 0" style="margin-top:20px">
      <i class="fas fa-inbox"></i>
      <p>No subscriptions yet for this app.</p>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: ProductService }, { type: TppService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionPlanComponent, { className: "SubscriptionPlanComponent", filePath: "src/app/developer-portal/subscribe-plan/subscribe-plan.component.ts", lineNumber: 17 });
})();
export {
  SubscriptionPlanComponent
};
//# sourceMappingURL=chunk-PJWYPMHV.js.map
