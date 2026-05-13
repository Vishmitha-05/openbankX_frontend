import {
  ProductService
} from "./chunk-BXXXGKD4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IBGG5UE3.js";
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

// src/app/admin-portal/plan-configuration/plan-configuration.component.ts
function PlanConfigurationComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function PlanConfigurationComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startCreate());
    });
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2, " New Plan ");
    \u0275\u0275elementEnd();
  }
}
function PlanConfigurationComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function PlanConfigurationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function PlanConfigurationComponent_div_11_option_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", p_r4.status, ")");
  }
}
function PlanConfigurationComponent_div_11_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275template(2, PlanConfigurationComponent_div_11_option_9_span_2_Template, 2, 1, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r4.productId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.status !== "ACTIVE");
  }
}
function PlanConfigurationComponent_div_11_small_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " No API products available. Approve a TPP app first to auto-create one. ");
    \u0275\u0275elementEnd();
  }
}
function PlanConfigurationComponent_div_11_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingPlan ? "Update" : "Create");
  }
}
function PlanConfigurationComponent_div_11_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2, " Saving...");
    \u0275\u0275elementEnd();
  }
}
function PlanConfigurationComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "h3", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "label");
    \u0275\u0275text(5, "API Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PlanConfigurationComponent_div_11_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.productId, $event) || (ctx_r1.form.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(7, "option", 20);
    \u0275\u0275text(8, "Choose an API product");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PlanConfigurationComponent_div_11_option_9_Template, 3, 3, "option", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, PlanConfigurationComponent_div_11_small_10_Template, 2, 0, "small", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "label");
    \u0275\u0275text(13, "Environment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PlanConfigurationComponent_div_11_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.environment, $event) || (ctx_r1.form.environment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 23);
    \u0275\u0275text(16, "Sandbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 24);
    \u0275\u0275text(18, "Production");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 18)(20, "label");
    \u0275\u0275text(21, "Rate Limit / min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PlanConfigurationComponent_div_11_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.rateLimitPerMin, $event) || (ctx_r1.form.rateLimitPerMin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 18)(24, "label");
    \u0275\u0275text(25, "Daily Quota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PlanConfigurationComponent_div_11_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dailyQuota, $event) || (ctx_r1.form.dailyQuota = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 18)(28, "label");
    \u0275\u0275text(29, "SLA (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PlanConfigurationComponent_div_11_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sla, $event) || (ctx_r1.form.sla = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 18)(32, "label");
    \u0275\u0275text(33, "Duration Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PlanConfigurationComponent_div_11_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.durationValue, $event) || (ctx_r1.form.durationValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 18)(36, "label");
    \u0275\u0275text(37, "Duration Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PlanConfigurationComponent_div_11_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.durationUnit, $event) || (ctx_r1.form.durationUnit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(39, "option", 26);
    \u0275\u0275text(40, "Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 27);
    \u0275\u0275text(42, "Months");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 28);
    \u0275\u0275text(44, "Years");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 29)(46, "button", 30);
    \u0275\u0275listener("click", function PlanConfigurationComponent_div_11_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275template(47, PlanConfigurationComponent_div_11_span_47_Template, 3, 1, "span", 31)(48, PlanConfigurationComponent_div_11_span_48_Template, 3, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 32);
    \u0275\u0275listener("click", function PlanConfigurationComponent_div_11_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(50, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editingPlan ? "Edit Plan" : "Create Plan");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.productId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.products);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.products.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.environment);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.rateLimitPerMin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dailyQuota);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.sla);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.durationValue);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.durationUnit);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSaving);
  }
}
function PlanConfigurationComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementEnd();
  }
}
function PlanConfigurationComponent_div_13_table_1_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 29)(19, "button", 45);
    \u0275\u0275listener("click", function PlanConfigurationComponent_div_13_table_1_tr_20_Template_button_click_19_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.edit(p_r6));
    });
    \u0275\u0275element(20, "i", 46);
    \u0275\u0275text(21, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 47);
    \u0275\u0275listener("click", function PlanConfigurationComponent_div_13_table_1_tr_20_Template_button_click_22_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePlan(p_r6));
    });
    \u0275\u0275element(23, "i", 48);
    \u0275\u0275text(24, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", p_r6.planId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.resolveProductName(p_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", p_r6.environment === "SANDBOX" ? "badge-sandbox" : "badge-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r6.environment, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.rateLimitPerMin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.dailyQuota);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r6.sla, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r6.durationValue, " ", p_r6.durationUnit);
  }
}
function PlanConfigurationComponent_div_13_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 42)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "API Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Environment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Rate/min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Daily Quota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "SLA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, PlanConfigurationComponent_div_13_table_1_tr_20_Template, 25, 9, "tr", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.plans);
  }
}
function PlanConfigurationComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, 'No plans configured yet. Click "New Plan" to create one.');
    \u0275\u0275elementEnd()();
  }
}
function PlanConfigurationComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, PlanConfigurationComponent_div_13_table_1_Template, 21, 1, "table", 40)(2, PlanConfigurationComponent_div_13_div_2_Template, 4, 0, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.plans.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.plans.length === 0);
  }
}
var PlanConfigurationComponent = class _PlanConfigurationComponent {
  productService;
  plans = [];
  products = [];
  isLoading = true;
  isSaving = false;
  showForm = false;
  errorMessage = "";
  successMessage = "";
  editingPlan = null;
  form = this.blankForm();
  constructor(productService) {
    this.productService = productService;
  }
  ngOnInit() {
    this.loadProducts();
    this.loadPlans();
  }
  blankForm() {
    return {
      productId: null,
      environment: "SANDBOX",
      rateLimitPerMin: 100,
      dailyQuota: 1e3,
      sla: 99,
      durationValue: 1,
      durationUnit: "MONTHS"
    };
  }
  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (d) => this.products = d || [],
      error: () => {
      }
      // table-level error already covers it
    });
  }
  loadPlans() {
    this.isLoading = true;
    this.productService.getPlans().subscribe({
      next: (d) => {
        this.plans = d || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load plans";
        this.isLoading = false;
      }
    });
  }
  resolveProductName(p) {
    if (p.apiProduct?.name)
      return p.apiProduct.name;
    const match = this.products.find((prod) => prod.productId === p.apiProduct?.productId);
    return match?.name || `#${p.apiProduct?.productId ?? "?"}`;
  }
  startCreate() {
    this.editingPlan = null;
    this.form = this.blankForm();
    if (this.products.length > 0 && this.form.productId == null) {
      this.form.productId = this.products[0].productId;
    }
    this.successMessage = "";
    this.errorMessage = "";
    this.showForm = true;
  }
  edit(plan) {
    this.editingPlan = plan;
    this.form = {
      productId: plan.apiProduct?.productId ?? null,
      environment: plan.environment,
      rateLimitPerMin: plan.rateLimitPerMin,
      dailyQuota: plan.dailyQuota,
      sla: plan.sla,
      durationValue: plan.durationValue,
      durationUnit: plan.durationUnit
    };
    this.successMessage = "";
    this.errorMessage = "";
    this.showForm = true;
  }
  save() {
    this.errorMessage = "";
    if (this.form.productId == null) {
      this.errorMessage = "Please choose an API product.";
      return;
    }
    this.isSaving = true;
    const payload = {
      environment: this.form.environment,
      rateLimitPerMin: this.form.rateLimitPerMin,
      dailyQuota: this.form.dailyQuota,
      sla: this.form.sla,
      durationValue: this.form.durationValue,
      durationUnit: this.form.durationUnit,
      apiProduct: { productId: this.form.productId }
    };
    const request$ = this.editingPlan ? this.productService.updatePlan(this.editingPlan.planId, payload) : this.productService.createPlan(payload);
    request$.subscribe({
      next: () => {
        const productName = this.products.find((p) => p.productId === this.form.productId)?.name || "product";
        this.successMessage = this.editingPlan ? `Plan updated for "${productName}".` : `Plan created for "${productName}".`;
        setTimeout(() => this.successMessage = "", 3500);
        this.isSaving = false;
        this.loadPlans();
        this.cancel();
      },
      error: (err) => {
        this.isSaving = false;
        this.errorMessage = err?.error?.message || (this.editingPlan ? "Update failed" : "Create failed");
      }
    });
  }
  cancel() {
    this.showForm = false;
    this.editingPlan = null;
    this.form = this.blankForm();
    this.errorMessage = "";
  }
  deletePlan(plan) {
    if (!confirm(`Delete plan #${plan.planId}?`))
      return;
    this.productService.deletePlan(plan.planId).subscribe({
      next: () => {
        this.successMessage = `Plan #${plan.planId} deleted.`;
        setTimeout(() => this.successMessage = "", 3500);
        this.loadPlans();
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || "Delete failed";
      }
    });
  }
  static \u0275fac = function PlanConfigurationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlanConfigurationComponent)(\u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlanConfigurationComponent, selectors: [["app-plan-configuration"]], decls: 14, vars: 6, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-sliders-h"], [1, "page-subtitle"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "glass-card mb-20", "style", "max-width:560px", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "glass-card", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "glass-card", "mb-20", 2, "max-width", "560px"], [1, "mb-16"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "text-muted", 4, "ngIf"], ["value", "SANDBOX"], ["value", "PRODUCTION"], ["type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "DAYS"], ["value", "MONTHS"], ["value", "YEARS"], [1, "flex", "gap-8"], [1, "btn", "btn-success", 3, "click", "disabled"], [4, "ngIf"], [1, "btn", "btn-light", 3, "click", "disabled"], [3, "ngValue"], [1, "text-muted"], [1, "fas", "fa-check"], [1, "fas", "fa-spinner", "fa-spin"], [1, "loading-container"], [1, "spinner"], [1, "glass-card"], ["class", "data-table", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "fas", "fa-pen"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fas", "fa-trash"], [1, "empty-state"]], template: function PlanConfigurationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Plan Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, " Configure rate limits, quotas, SLA & subscription duration per API Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, PlanConfigurationComponent_button_8_Template, 3, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, PlanConfigurationComponent_div_9_Template, 3, 1, "div", 5)(10, PlanConfigurationComponent_div_10_Template, 3, 1, "div", 6)(11, PlanConfigurationComponent_div_11_Template, 51, 15, "div", 7)(12, PlanConfigurationComponent_div_12_Template, 2, 0, "div", 8)(13, PlanConfigurationComponent_div_13_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", !ctx.showForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n/*# sourceMappingURL=plan-configuration.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlanConfigurationComponent, [{
    type: Component,
    args: [{ selector: "app-plan-configuration", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-sliders-h"></i> Plan Configuration</h1>
          <p class="page-subtitle">
            Configure rate limits, quotas, SLA & subscription duration per API Product
          </p>
        </div>
        <button class="btn btn-primary" (click)="startCreate()" *ngIf="!showForm">
          <i class="fas fa-plus"></i> New Plan
        </button>
      </div>

      <div class="alert alert-success" *ngIf="successMessage">
        <i class="fas fa-check-circle"></i> {{ successMessage }}
      </div>
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <!-- CREATE / EDIT FORM -->
      <div class="glass-card mb-20" *ngIf="showForm" style="max-width:560px">
        <h3 class="mb-16">{{ editingPlan ? 'Edit Plan' : 'Create Plan' }}</h3>

        <!-- Product dropdown -->
        <div class="form-group">
          <label>API Product</label>
          <select class="form-control" [(ngModel)]="form.productId">
            <option [ngValue]="null" disabled>Choose an API product</option>
            <option *ngFor="let p of products" [ngValue]="p.productId">
              {{ p.name }} <span *ngIf="p.status !== 'ACTIVE'">({{ p.status }})</span>
            </option>
          </select>
          <small class="text-muted" *ngIf="products.length === 0">
            No API products available. Approve a TPP app first to auto-create one.
          </small>
        </div>

        <div class="form-group">
          <label>Environment</label>
          <select class="form-control" [(ngModel)]="form.environment">
            <option value="SANDBOX">Sandbox</option>
            <option value="PRODUCTION">Production</option>
          </select>
        </div>

        <div class="form-group">
          <label>Rate Limit / min</label>
          <input type="number" class="form-control" [(ngModel)]="form.rateLimitPerMin">
        </div>

        <div class="form-group">
          <label>Daily Quota</label>
          <input type="number" class="form-control" [(ngModel)]="form.dailyQuota">
        </div>

        <div class="form-group">
          <label>SLA (%)</label>
          <input type="number" class="form-control" [(ngModel)]="form.sla">
        </div>

        <div class="form-group">
          <label>Duration Value</label>
          <input type="number" class="form-control" [(ngModel)]="form.durationValue">
        </div>

        <div class="form-group">
          <label>Duration Unit</label>
          <select class="form-control" [(ngModel)]="form.durationUnit">
            <option value="DAYS">Days</option>
            <option value="MONTHS">Months</option>
            <option value="YEARS">Years</option>
          </select>
        </div>

        <div class="flex gap-8">
          <button class="btn btn-success" (click)="save()" [disabled]="isSaving">
            <span *ngIf="!isSaving"><i class="fas fa-check"></i> {{ editingPlan ? 'Update' : 'Create' }}</span>
            <span *ngIf="isSaving"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
          </button>
          <button class="btn btn-light" (click)="cancel()" [disabled]="isSaving">Cancel</button>
        </div>
      </div>

      <!-- LOADER -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
      </div>

      <!-- PLANS TABLE -->
      <div class="glass-card" *ngIf="!isLoading">
        <table class="data-table" *ngIf="plans.length > 0">
          <thead>
            <tr>
              <th>ID</th>
              <th>API Product</th>
              <th>Environment</th>
              <th>Rate/min</th>
              <th>Daily Quota</th>
              <th>SLA</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of plans">
              <td>#{{ p.planId }}</td>
              <td><strong>{{ resolveProductName(p) }}</strong></td>
              <td>
                <span class="badge" [ngClass]="p.environment === 'SANDBOX' ? 'badge-sandbox' : 'badge-info'">
                  {{ p.environment }}
                </span>
              </td>
              <td>{{ p.rateLimitPerMin }}</td>
              <td>{{ p.dailyQuota }}</td>
              <td>{{ p.sla }}%</td>
              <td>{{ p.durationValue }} {{ p.durationUnit }}</td>
              <td>
                <div class="flex gap-8">
                  <button class="btn btn-sm btn-secondary" (click)="edit(p)">
                    <i class="fas fa-pen"></i> Edit
                  </button>
                  <button class="btn btn-sm btn-danger" (click)="deletePlan(p)">
                    <i class="fas fa-trash"></i> Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="empty-state" *ngIf="plans.length === 0">
          <i class="fas fa-sliders-h"></i>
          <p>No plans configured yet. Click "New Plan" to create one.</p>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/admin-portal/plan-configuration/plan-configuration.component.css */\n/*# sourceMappingURL=plan-configuration.component.css.map */\n"] }]
  }], () => [{ type: ProductService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlanConfigurationComponent, { className: "PlanConfigurationComponent", filePath: "src/app/admin-portal/plan-configuration/plan-configuration.component.ts", lineNumber: 152 });
})();
export {
  PlanConfigurationComponent
};
//# sourceMappingURL=chunk-7DPG5T4H.js.map
