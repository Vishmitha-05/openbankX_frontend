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

// src/app/core/services/monitoring.service.ts
var MonitoringService = class _MonitoringService {
  http;
  apiUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  // ---------- Incidents ----------
  getIncidents() {
    return this.http.get(`${this.apiUrl}/incidents`);
  }
  createIncident(incident) {
    return this.http.post(`${this.apiUrl}/incidents`, incident);
  }
  closeIncident(id) {
    return this.http.put(`${this.apiUrl}/incidents/${id}/close`, {});
  }
  // ---------- Gateway Logs ----------
  getGatewayLogs() {
    return this.http.get(`${this.apiUrl}/logs`);
  }
  getLogsByApp(appId) {
    return this.http.get(`${this.apiUrl}/logs/app/${appId}`);
  }
  static \u0275fac = function MonitoringService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MonitoringService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MonitoringService, factory: _MonitoringService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonitoringService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MonitoringService
};
//# sourceMappingURL=chunk-WTLHAO6Q.js.map
