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

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  apiUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  // ---------- Login ----------
  /**
   * Real login — POST email+password to /api/v1/auth/login.
   * Backend returns { accessToken, userId, name, email, role }.
   */
  login(email, password) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password });
  }
  // ---------- Registration ----------
  /**
   * Register a new user via POST /api/v1/auth/register.
   */
  register(data) {
    return this.http.post(`${this.apiUrl}/auth/register`, data);
  }
  // ---------- Session Management ----------
  /** Store session info in localStorage after successful login */
  saveSession(userId, name, email, role, token) {
    const session = { userId, name, email, role, token };
    localStorage.setItem("obx_session", JSON.stringify(session));
  }
  /** Retrieve current session from localStorage */
  getSession() {
    const data = localStorage.getItem("obx_session");
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
  /** Check if user is logged in */
  isLoggedIn() {
    return this.getSession() !== null;
  }
  /** Get current user's role */
  getRole() {
    const session = this.getSession();
    return session ? session.role : "";
  }
  /** Get current user's ID */
  getUserId() {
    const session = this.getSession();
    return session ? session.userId : 0;
  }
  /** Get the stored token */
  getToken() {
    const session = this.getSession();
    return session ? session.token : "";
  }
  /** Get the current user's email */
  getEmail() {
    const session = this.getSession();
    return session ? session.email : "";
  }
  /** Get the current user's display name */
  getName() {
    const session = this.getSession();
    return session ? session.name : "";
  }
  /** Logout — clear session */
  logout() {
    localStorage.removeItem("obx_session");
  }
  /**
   * Refresh the stored token with a fresh one from the backend.
   * Called by the auth interceptor when X-Auth-Token is received in a response.
   * This keeps the session token fresh after every API operation.
   */
  refreshToken(newToken) {
    const session = this.getSession();
    if (session) {
      session.token = newToken;
      localStorage.setItem("obx_session", JSON.stringify(session));
    }
  }
  // ---------- SCA ----------
  /** Verify SCA (OTP) via POST /api/v1/sca/otp */
  verifySca(userId, method, referenceId) {
    return this.http.post(`${this.apiUrl}/sca/otp?userId=${userId}&referenceId=${referenceId}`, {});
  }
  /** Get all SCA events (for compliance dashboard) */
  getScaEvents() {
    return this.http.get(`${this.apiUrl}/sca/events`);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-WCVDOMTU.js.map
