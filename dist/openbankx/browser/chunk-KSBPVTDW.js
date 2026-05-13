import {
  environment
} from "./chunk-TX3HFKHN.js";
import {
  HttpClient
} from "./chunk-5C4TBQN6.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-6UHLKSNQ.js";

// src/app/core/services/tpp.service.ts
var TppService = class _TppService {
  http;
  apiUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  // ---------- TPP Company ----------
  registerTpp(tpp) {
    return this.http.post(`${this.apiUrl}/tpps`, tpp);
  }
  getTpps() {
    return this.http.get(`${this.apiUrl}/tpps`);
  }
  /** Return only TPP companies owned by the given user email. */
  getMyTpps(ownerEmail) {
    const email = (ownerEmail || "").trim().toLowerCase();
    return this.getTpps().pipe(map((tpps) => (tpps || []).filter((t) => (t.contactInfo || "").trim().toLowerCase() === email)));
  }
  getTppById(id) {
    return this.http.get(`${this.apiUrl}/tpps/${id}`);
  }
  updateTppStatus(id, status) {
    return this.http.put(`${this.apiUrl}/tpps/${id}`, { status });
  }
  // ---------- TPP Applications ----------
  getApps() {
    return this.http.get(`${this.apiUrl}/apps`);
  }
  /** Return only the apps belonging to TPP companies owned by the given user email. */
  getMyApps(ownerEmail) {
    const email = (ownerEmail || "").trim().toLowerCase();
    return this.getApps().pipe(map((apps) => (apps || []).filter((a) => (a.tpp?.contactInfo || "").trim().toLowerCase() === email)));
  }
  getAppById(id) {
    return this.http.get(`${this.apiUrl}/apps/${id}`);
  }
  createApp(app) {
    return this.http.post(`${this.apiUrl}/apps`, app);
  }
  updateApp(id, app) {
    return this.http.put(`${this.apiUrl}/apps/${id}`, app);
  }
  updateAppStatus(id, status) {
    return this.http.put(`${this.apiUrl}/apps/${id}`, { status });
  }
  /** Approve a TPP app — backend also auto-publishes it as an API Product. */
  approveApp(id) {
    return this.http.put(`${this.apiUrl}/apps/${id}/approve`, {});
  }
  /** Reject (or revoke) a TPP app. */
  rejectApp(id) {
    return this.http.put(`${this.apiUrl}/apps/${id}/reject`, {});
  }
  getAvailableApps() {
    return this.http.get(`${this.apiUrl}/apps/available`);
  }
  getAppStats(appId) {
    return this.http.get(`${this.apiUrl}/apps/${appId}/stats`);
  }
  static \u0275fac = function TppService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TppService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TppService, factory: _TppService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TppService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  TppService
};
//# sourceMappingURL=chunk-KSBPVTDW.js.map
