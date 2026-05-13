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

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  http;
  apiUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  getNotifications(recipientId, role) {
    let url = `${this.apiUrl}/notifications?recipientId=${recipientId}`;
    if (role) {
      url += `&role=${role}`;
    }
    return this.http.get(url);
  }
  markAsRead(id) {
    return this.http.put(`${this.apiUrl}/notifications/${id}`, { status: "READ" });
  }
  markAllRead(recipientId, role) {
    let url = `${this.apiUrl}/notifications/mark-all-read?recipientId=${recipientId}`;
    if (role) {
      url += `&role=${role}`;
    }
    return this.http.put(url, {});
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-L7ZLHMBC.js.map
