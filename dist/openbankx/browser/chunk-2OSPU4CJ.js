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

// src/app/core/services/audit.service.ts
var AuditService = class _AuditService {
  http;
  apiUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  getAuditTrails() {
    return this.http.get("/api/audit-trails");
  }
  getComplianceReports() {
    return this.http.get(`${this.apiUrl}/compliance/reports`);
  }
  generateReport(scope) {
    return this.http.post(`${this.apiUrl}/compliance/reports?scope=${encodeURIComponent(scope)}&metrics=auto-generated`, {});
  }
  static \u0275fac = function AuditService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditService, factory: _AuditService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuditService
};
//# sourceMappingURL=chunk-2OSPU4CJ.js.map
