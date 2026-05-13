import {
  environment
} from "./chunk-TX3HFKHN.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-5C4TBQN6.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-6UHLKSNQ.js";

// src/app/core/services/account.service.ts
var AccountService = class _AccountService {
  http;
  apiUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  /** Get a user's accounts. Pass the TPP app id so the call lands in
   *  api_log attributed to that app (this is the AISP read endpoint). */
  getAccounts(userId, tppAppId) {
    return this.http.get(`${this.apiUrl}/aisp/accounts/user/${userId}`, { headers: this.tppHeaders(tppAppId) });
  }
  /** Get transactions for an account (AISP read). */
  getTransactions(accountId, tppAppId) {
    return this.http.get(`${this.apiUrl}/aisp/accounts/${accountId}/transactions`, { headers: this.tppHeaders(tppAppId) });
  }
  tppHeaders(tppAppId) {
    if (!tppAppId)
      return void 0;
    return new HttpHeaders({ "X-TPP-App-Id": String(tppAppId) });
  }
  static \u0275fac = function AccountService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountService, factory: _AccountService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AccountService
};
//# sourceMappingURL=chunk-J35VJXPN.js.map
