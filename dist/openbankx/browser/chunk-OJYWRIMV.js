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

// src/app/core/services/consent.service.ts
var ConsentService = class _ConsentService {
  http;
  apiUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  /**
   * ✅ Create a consent (correct payload shape)
   */
  createConsent(consent) {
    return this.http.post(`${this.apiUrl}/consents`, consent);
  }
  /**
   * Get all consents (admin / ops)
   */
  getConsents() {
    return this.http.get(`${this.apiUrl}/consents`);
  }
  /**
   * Get all consents for a specific user
   */
  getConsentsByUser(userId) {
    return this.http.get(`${this.apiUrl}/consents/user/${userId}`);
  }
  /**
   * Get a single consent by ID
   */
  getConsentById(id) {
    return this.http.get(`${this.apiUrl}/consents/${id}`);
  }
  /**
   * Revoke a consent
   */
  revokeConsent(id) {
    return this.http.put(`${this.apiUrl}/consents/${id}/revoke`, {});
  }
  /**
   * Update the scope list of an existing consent (used by the customer's
   * My Consents page to add or withdraw individual permissions).
   * Submitting an empty array effectively revokes the consent.
   */
  updateScopes(id, scopes) {
    return this.http.put(`${this.apiUrl}/consents/${id}/scopes`, { scopeJSON: JSON.stringify(scopes) });
  }
  /**
   * Activate consent after SCA completion. The chosen SCA method is
   * recorded server-side in sca_event for audit purposes.
   */
  activateAfterSca(id, method = "OTP") {
    return this.http.put(`${this.apiUrl}/consents/${id}/activate`, { method });
  }
  /**
   * Get consent events (optional)
   */
  getConsentEvents(consentId) {
    return this.http.get(`${this.apiUrl}/consents/${consentId}/events`);
  }
  static \u0275fac = function ConsentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConsentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsentService, factory: _ConsentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ConsentService
};
//# sourceMappingURL=chunk-OJYWRIMV.js.map
