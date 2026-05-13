import {
  ProductService
} from "./chunk-BXXXGKD4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  ɵɵpureFunction3,
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

// src/app/admin-portal/product-management/product-management.component.ts
var _c0 = (a0, a1, a2) => ({ "badge-active": a0, "badge-revoked": a1, "badge-expired": a2 });
function ProductManagementComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ProductManagementComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2, " New Product ");
    \u0275\u0275elementEnd();
  }
}
function ProductManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function ProductManagementComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function ProductManagementComponent_div_11_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editMode ? "Update" : "Create");
  }
}
function ProductManagementComponent_div_11_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2, " Saving...");
    \u0275\u0275elementEnd();
  }
}
function ProductManagementComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "h3", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "label");
    \u0275\u0275text(5, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ProductManagementComponent_div_11_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "label");
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ProductManagementComponent_div_11_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 19)(12, "label");
    \u0275\u0275text(13, "Endpoints (JSON array)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "textarea", 22);
    \u0275\u0275twoWayListener("ngModelChange", function ProductManagementComponent_div_11_Template_textarea_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.endpointsJSON, $event) || (ctx_r1.form.endpointsJSON = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 23)(16, "button", 24);
    \u0275\u0275listener("click", function ProductManagementComponent_div_11_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275template(17, ProductManagementComponent_div_11_span_17_Template, 3, 1, "span", 25)(18, ProductManagementComponent_div_11_span_18_Template, 3, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 26);
    \u0275\u0275listener("click", function ProductManagementComponent_div_11_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editMode ? "Edit API Product" : "Create API Product");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275property("readonly", ctx_r1.editMode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.endpointsJSON);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSaving);
  }
}
function ProductManagementComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementEnd();
  }
}
function ProductManagementComponent_div_13_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ep_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ep_r5, " ");
  }
}
function ProductManagementComponent_div_13_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, " No endpoints ");
    \u0275\u0275elementEnd();
  }
}
function ProductManagementComponent_div_13_div_1_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 54);
    \u0275\u0275text(10, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", plan_r6.environment === "SANDBOX" ? "badge-sandbox" : "badge-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r6.environment, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", plan_r6.rateLimitPerMin, "/min");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", plan_r6.dailyQuota, "/day");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", plan_r6.durationValue, " ", plan_r6.durationUnit);
  }
}
function ProductManagementComponent_div_13_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "h5", 51);
    \u0275\u0275text(2, "Associated Plans:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProductManagementComponent_div_13_div_1_div_11_div_3_Template, 13, 6, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getPlansForProduct(p_r7.productId));
  }
}
function ProductManagementComponent_div_13_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " No plans configured ");
    \u0275\u0275elementEnd();
  }
}
function ProductManagementComponent_div_13_div_1_div_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sub_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((sub_r8.tppApp == null ? null : sub_r8.tppApp.appName) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", (sub_r8.apiPlan == null ? null : sub_r8.apiPlan.environment) === "SANDBOX" ? "badge-sandbox" : "badge-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sub_r8.apiPlan == null ? null : sub_r8.apiPlan.environment, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c0, sub_r8.status === "ACTIVE", sub_r8.status === "SUSPENDED", sub_r8.status === "CANCELLED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sub_r8.status);
  }
}
function ProductManagementComponent_div_13_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "h5", 51);
    \u0275\u0275text(2, " Subscribers ");
    \u0275\u0275elementStart(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ProductManagementComponent_div_13_div_1_div_13_div_5_Template, 10, 9, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSubscribersForProduct(p_r7.productId).length, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getSubscribersForProduct(p_r7.productId));
  }
}
function ProductManagementComponent_div_13_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " No subscribers yet ");
    \u0275\u0275elementEnd();
  }
}
function ProductManagementComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 37);
    \u0275\u0275template(9, ProductManagementComponent_div_13_div_1_span_9_Template, 2, 1, "span", 38)(10, ProductManagementComponent_div_13_div_1_span_10_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ProductManagementComponent_div_13_div_1_div_11_Template, 4, 1, "div", 40)(12, ProductManagementComponent_div_13_div_1_div_12_Template, 2, 0, "div", 41)(13, ProductManagementComponent_div_13_div_1_div_13_Template, 6, 2, "div", 40)(14, ProductManagementComponent_div_13_div_1_div_14_Template, 2, 0, "div", 41);
    \u0275\u0275elementStart(15, "div", 42)(16, "button", 43);
    \u0275\u0275listener("click", function ProductManagementComponent_div_13_div_1_Template_button_click_16_listener() {
      const p_r7 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.edit(p_r7));
    });
    \u0275\u0275element(17, "i", 44);
    \u0275\u0275text(18, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 45);
    \u0275\u0275listener("click", function ProductManagementComponent_div_13_div_1_Template_button_click_19_listener() {
      const p_r7 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(p_r7));
    });
    \u0275\u0275element(20, "i", 46);
    \u0275\u0275text(21, " Delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 47);
    \u0275\u0275listener("click", function ProductManagementComponent_div_13_div_1_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reloadSubscribers());
    });
    \u0275\u0275element(23, "i", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r7.status === "ACTIVE" ? "badge-active" : "badge-deprecated");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r7.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.description || "No description");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.parseJson(p_r7.endpointsJSON));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parseJson(p_r7.endpointsJSON).length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPlansForProduct(p_r7.productId).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPlansForProduct(p_r7.productId).length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getSubscribersForProduct(p_r7.productId).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPlansForProduct(p_r7.productId).length > 0 && ctx_r1.getSubscribersForProduct(p_r7.productId).length === 0);
  }
}
function ProductManagementComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, ProductManagementComponent_div_13_div_1_Template, 24, 10, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.products);
  }
}
function ProductManagementComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, 'No products yet. Click "New Product" to create one.');
    \u0275\u0275elementEnd()();
  }
}
var ProductManagementComponent = class _ProductManagementComponent {
  productService;
  products = [];
  plans = [];
  subscriptions = [];
  isLoading = true;
  isSaving = false;
  showForm = false;
  editMode = false;
  errorMessage = "";
  successMessage = "";
  refreshTimer;
  form = this.blankForm();
  constructor(productService) {
    this.productService = productService;
  }
  ngOnInit() {
    this.loadProducts();
    this.loadPlans();
    this.loadSubscriptions();
    this.refreshTimer = setInterval(() => this.loadSubscriptions(), 15e3);
  }
  ngOnDestroy() {
    if (this.refreshTimer)
      clearInterval(this.refreshTimer);
  }
  blankForm() {
    return {
      productId: null,
      name: "",
      description: "",
      endpointsJSON: "",
      status: "ACTIVE"
    };
  }
  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (d) => {
        this.products = d || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load products.";
        this.isLoading = false;
      }
    });
  }
  loadPlans() {
    this.productService.getPlans().subscribe({
      next: (d) => this.plans = d || [],
      error: () => {
      }
    });
  }
  loadSubscriptions() {
    this.productService.getSubscriptions().subscribe({
      next: (d) => this.subscriptions = d || [],
      error: () => {
      }
    });
  }
  reloadSubscribers() {
    this.loadSubscriptions();
  }
  getPlansForProduct(productId) {
    return this.plans.filter((p) => p.apiProduct?.productId === productId);
  }
  getSubscribersForProduct(productId) {
    return this.subscriptions.filter((s) => s.apiPlan?.apiProduct?.productId === productId);
  }
  openCreate() {
    this.editMode = false;
    this.form = this.blankForm();
    this.showForm = true;
    this.successMessage = "";
    this.errorMessage = "";
  }
  edit(p) {
    this.editMode = true;
    this.form = {
      productId: p.productId,
      name: p.name || "",
      description: p.description || "",
      endpointsJSON: p.endpointsJSON || "[]",
      status: p.status || "ACTIVE"
    };
    this.showForm = true;
    this.successMessage = "";
    this.errorMessage = "";
  }
  save() {
    if (!this.form.name) {
      this.errorMessage = "Product name is required.";
      return;
    }
    this.isSaving = true;
    this.errorMessage = "";
    const req = this.editMode ? this.productService.updateProduct(this.form.productId, this.form) : this.productService.createProduct(this.form);
    req.subscribe({
      next: (saved) => {
        if (this.editMode) {
          const idx = this.products.findIndex((x) => x.productId === saved.productId);
          if (idx > -1)
            this.products[idx] = saved;
        } else {
          this.products.unshift(saved);
        }
        this.successMessage = `Product "${saved.name}" saved.`;
        setTimeout(() => this.successMessage = "", 3500);
        this.isSaving = false;
        this.showForm = false;
        this.form = this.blankForm();
      },
      error: () => {
        this.isSaving = false;
        this.errorMessage = this.editMode ? "Failed to update product." : "Failed to create product.";
      }
    });
  }
  remove(p) {
    if (!confirm(`Delete product "${p.name}"?`))
      return;
    this.productService.deleteProduct(p.productId).subscribe({
      next: () => {
        this.products = this.products.filter((x) => x.productId !== p.productId);
        this.successMessage = `Product "${p.name}" deleted.`;
        setTimeout(() => this.successMessage = "", 3500);
      },
      error: () => {
        this.errorMessage = "Failed to delete product.";
      }
    });
  }
  cancel() {
    this.showForm = false;
    this.form = this.blankForm();
    this.errorMessage = "";
  }
  parseJson(s) {
    try {
      const parsed = JSON.parse(s);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  static \u0275fac = function ProductManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductManagementComponent)(\u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductManagementComponent, selectors: [["app-product-management"]], decls: 15, vars: 7, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-boxes"], [1, "page-subtitle"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "glass-card mb-20", "style", "max-width:560px", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "grid-2", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "glass-card", "mb-20", 2, "max-width", "560px"], [1, "mb-16"], [1, "form-group"], ["type", "text", "placeholder", "e.g., Open Banking Core", 1, "form-control", 3, "ngModelChange", "ngModel", "readonly"], ["rows", "2", "placeholder", "Describe what this product offers", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", '["/accounts","/payments"]', 1, "form-control", "font-mono", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-8"], [1, "btn", "btn-success", 3, "click", "disabled"], [4, "ngIf"], [1, "btn", "btn-light", 3, "click", "disabled"], [1, "fas", "fa-check"], [1, "fas", "fa-spinner", "fa-spin"], [1, "loading-container"], [1, "spinner"], [1, "grid-2"], ["class", "glass-card", 4, "ngFor", "ngForOf"], [1, "glass-card"], [1, "flex", "items-center", "justify-between"], [1, "badge", 3, "ngClass"], [1, "text-sm", "text-muted", "mt-8"], [1, "mt-12"], ["class", "scope-pill", 4, "ngFor", "ngForOf"], ["class", "text-sm text-muted", 4, "ngIf"], ["class", "mt-12", 4, "ngIf"], ["class", "mt-8 text-sm text-muted", 4, "ngIf"], [1, "mt-16", "flex", "gap-8"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "fas", "fa-pen"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fas", "fa-trash"], ["title", "Refresh subscriber list", 1, "btn", "btn-sm", "btn-light", 3, "click"], [1, "fas", "fa-sync"], [1, "scope-pill"], [1, "text-sm", "text-muted"], [1, "text-sm", 2, "margin-bottom", "6px", "opacity", "0.7"], ["style", "display:flex; align-items:center; gap:8px; padding:4px 0; font-size:0.85rem;", 4, "ngFor", "ngForOf"], [2, "display", "flex", "align-items", "center", "gap", "8px", "padding", "4px 0", "font-size", "0.85rem"], [1, "text-muted"], [1, "mt-8", "text-sm", "text-muted"], [1, "badge", "badge-info", 2, "margin-left", "6px"], [1, "fas", "fa-cube", "text-muted"], [1, "empty-state"]], template: function ProductManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " API Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Manage product catalog and pricing plans");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ProductManagementComponent_button_8_Template, 3, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, ProductManagementComponent_div_9_Template, 3, 1, "div", 5)(10, ProductManagementComponent_div_10_Template, 3, 1, "div", 6)(11, ProductManagementComponent_div_11_Template, 21, 9, "div", 7)(12, ProductManagementComponent_div_12_Template, 2, 0, "div", 8)(13, ProductManagementComponent_div_13_Template, 2, 1, "div", 9)(14, ProductManagementComponent_div_14_Template, 4, 0, "div", 10);
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
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.products.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.products.length === 0 && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n/*# sourceMappingURL=product-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductManagementComponent, [{
    type: Component,
    args: [{ selector: "app-product-management", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-boxes"></i> API Products</h1>
          <p class="page-subtitle">Manage product catalog and pricing plans</p>
        </div>
        <button class="btn btn-primary" (click)="openCreate()" *ngIf="!showForm">
          <i class="fas fa-plus"></i> New Product
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
        <h3 class="mb-16">{{ editMode ? 'Edit API Product' : 'Create API Product' }}</h3>

        <div class="form-group">
          <label>Product Name</label>
          <input type="text" class="form-control"
                 [(ngModel)]="form.name"
                 [readonly]="editMode"
                 placeholder="e.g., Open Banking Core" />
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea class="form-control"
                    [(ngModel)]="form.description"
                    rows="2"
                    placeholder="Describe what this product offers"></textarea>
        </div>

        <div class="form-group">
          <label>Endpoints (JSON array)</label>
          <textarea class="form-control font-mono"
                    [(ngModel)]="form.endpointsJSON"
                    rows="2"
                    placeholder='["/accounts","/payments"]'></textarea>
        </div>

        <div class="flex gap-8">
          <button class="btn btn-success" (click)="save()" [disabled]="isSaving">
            <span *ngIf="!isSaving"><i class="fas fa-check"></i> {{ editMode ? 'Update' : 'Create' }}</span>
            <span *ngIf="isSaving"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
          </button>
          <button class="btn btn-light" (click)="cancel()" [disabled]="isSaving">Cancel</button>
        </div>
      </div>

      <!-- LOADING -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
      </div>

      <!-- PRODUCT LIST -->
      <div class="grid-2" *ngIf="!isLoading && products.length > 0">
        <div *ngFor="let p of products" class="glass-card">
          <div class="flex items-center justify-between">
            <h4>{{ p.name }}</h4>
            <span class="badge"
                  [ngClass]="p.status === 'ACTIVE' ? 'badge-active' : 'badge-deprecated'">
              {{ p.status }}
            </span>
          </div>

          <p class="text-sm text-muted mt-8">{{ p.description || 'No description' }}</p>

          <div class="mt-12">
            <span *ngFor="let ep of parseJson(p.endpointsJSON)" class="scope-pill">
              {{ ep }}
            </span>
            <span class="text-sm text-muted"
                  *ngIf="parseJson(p.endpointsJSON).length === 0">
              No endpoints
            </span>
          </div>

          <div class="mt-12" *ngIf="getPlansForProduct(p.productId).length > 0">
            <h5 class="text-sm" style="margin-bottom:6px; opacity:0.7">Associated Plans:</h5>
            <div *ngFor="let plan of getPlansForProduct(p.productId)"
                 style="display:flex; align-items:center; gap:8px; padding:4px 0; font-size:0.85rem;">
              <span class="badge"
                    [ngClass]="plan.environment === 'SANDBOX' ? 'badge-sandbox' : 'badge-info'">
                {{ plan.environment }}
              </span>
              <span>{{ plan.rateLimitPerMin }}/min</span>
              <span class="text-muted">\xB7</span>
              <span>{{ plan.dailyQuota }}/day</span>
              <span class="text-muted">\xB7</span>
              <span>{{ plan.durationValue }} {{ plan.durationUnit }}</span>
            </div>
          </div>
          <div class="mt-8 text-sm text-muted" *ngIf="getPlansForProduct(p.productId).length === 0">
            No plans configured
          </div>

          <!-- Subscribers per product -->
          <div class="mt-12" *ngIf="getSubscribersForProduct(p.productId).length > 0">
            <h5 class="text-sm" style="margin-bottom:6px; opacity:0.7">
              Subscribers
              <span class="badge badge-info" style="margin-left:6px">
                {{ getSubscribersForProduct(p.productId).length }}
              </span>
            </h5>
            <div *ngFor="let sub of getSubscribersForProduct(p.productId)"
                 style="display:flex; align-items:center; gap:8px; padding:4px 0; font-size:0.85rem;">
              <i class="fas fa-cube text-muted"></i>
              <strong>{{ sub.tppApp?.appName || '\u2014' }}</strong>
              <span class="text-muted">\xB7</span>
              <span class="badge"
                    [ngClass]="sub.apiPlan?.environment === 'SANDBOX' ? 'badge-sandbox' : 'badge-info'">
                {{ sub.apiPlan?.environment }}
              </span>
              <span class="badge"
                    [ngClass]="{
                      'badge-active': sub.status === 'ACTIVE',
                      'badge-revoked': sub.status === 'SUSPENDED',
                      'badge-expired': sub.status === 'CANCELLED'
                    }">{{ sub.status }}</span>
            </div>
          </div>
          <div class="mt-8 text-sm text-muted"
               *ngIf="getPlansForProduct(p.productId).length > 0 && getSubscribersForProduct(p.productId).length === 0">
            No subscribers yet
          </div>

          <div class="mt-16 flex gap-8">
            <button class="btn btn-sm btn-secondary" (click)="edit(p)">
              <i class="fas fa-pen"></i> Edit
            </button>
            <button class="btn btn-sm btn-danger" (click)="remove(p)">
              <i class="fas fa-trash"></i> Delete
            </button>
            <button class="btn btn-sm btn-light" (click)="reloadSubscribers()" title="Refresh subscriber list">
              <i class="fas fa-sync"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="empty-state" *ngIf="!isLoading && products.length === 0 && !errorMessage">
        <i class="fas fa-boxes"></i>
        <p>No products yet. Click "New Product" to create one.</p>
      </div>
    </div>
  `, styles: ["/* src/app/admin-portal/product-management/product-management.component.css */\n/*# sourceMappingURL=product-management.component.css.map */\n"] }]
  }], () => [{ type: ProductService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductManagementComponent, { className: "ProductManagementComponent", filePath: "src/app/admin-portal/product-management/product-management.component.ts", lineNumber: 166 });
})();
export {
  ProductManagementComponent
};
//# sourceMappingURL=chunk-JCL7J2GD.js.map
