import {
  environment
} from "./chunk-TX3HFKHN.js";
import {
  HttpClient
} from "./chunk-5C4TBQN6.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-6UHLKSNQ.js";

// src/app/core/services/product.service.ts
var ProductService = class _ProductService {
  http;
  apiUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  // ======================================================
  // API PRODUCTS
  // ======================================================
  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }
  createProduct(product) {
    return this.http.post(`${this.apiUrl}/products`, product);
  }
  updateProduct(id, product) {
    return this.http.put(`${this.apiUrl}/products/${id}`, product);
  }
  deleteProduct(id) {
    return this.http.delete(`${this.apiUrl}/api-products/${id}`);
  }
  // ======================================================
  // ✅ API PLANS (CREATE / EDIT / DELETE)
  // ======================================================
  getPlans() {
    return this.http.get(`${this.apiUrl}/api-plans`);
  }
  getPlansByProduct(productId) {
    return this.http.get(`${this.apiUrl}/api-plans/product/${productId}`);
  }
  /** ✅ CREATE API PLAN */
  createPlan(plan) {
    return this.http.post(`${this.apiUrl}/api-plans`, plan);
  }
  /** ✅ UPDATE API PLAN */
  updatePlan(id, plan) {
    return this.http.put(`${this.apiUrl}/api-plans/${id}`, plan);
  }
  /** ✅ DELETE API PLAN */
  deletePlan(id) {
    return this.http.delete(`${this.apiUrl}/api-plans/${id}`);
  }
  // ======================================================
  // ✅ TPP APPS (for subscriptions)
  // ======================================================
  getApps() {
    return this.http.get(`${this.apiUrl}/apps`);
  }
  // ======================================================
  // ✅ SUBSCRIPTIONS
  // ======================================================
  getSubscriptions() {
    return this.http.get(`${this.apiUrl}/subscriptions`);
  }
  getSubscriptionsByApp(tppAppId) {
    return this.http.get(`${this.apiUrl}/subscriptions/app/${tppAppId}`);
  }
  createSubscription(sub) {
    return this.http.post(`${this.apiUrl}/subscriptions`, sub);
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ProductService
};
//# sourceMappingURL=chunk-BXXXGKD4.js.map
