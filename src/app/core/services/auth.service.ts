import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginSession, SCAEvent } from '../models/models';

/**
 * AuthService — Handles login, registration, token management, and SCA verification.
 *
 * Stores the logged-in user session in localStorage so it persists across page reloads.
 * Uses real JWT authentication with the backend POST /api/v1/auth/login endpoint.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // ---------- Login ----------

  /**
   * Real login — POST email+password to /api/v1/auth/login.
   * Backend returns { accessToken, userId, name, email, role }.
   */
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password });
  }

  // ---------- Registration ----------

  /**
   * Register a new user via POST /api/v1/auth/register.
   */
  register(data: { name: string; email: string; phone: string; password: string; role: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, data);
  }

  // ---------- Session Management ----------

  /** Store session info in localStorage after successful login */
  saveSession(userId: number, name: string, email: string, role: string, token: string): void {
    const session: LoginSession = { userId, name, email, role: role as any, token };
    localStorage.setItem('obx_session', JSON.stringify(session));
  }

  /** Retrieve current session from localStorage */
  getSession(): LoginSession | null {
    const data = localStorage.getItem('obx_session');
    if (data) {
      return JSON.parse(data) as LoginSession;
    }
    return null;
  }

  /** Check if user is logged in */
  isLoggedIn(): boolean {
    return this.getSession() !== null;
  }

  /** Get current user's role */
  getRole(): string {
    const session = this.getSession();
    return session ? session.role : '';
  }

  /** Get current user's ID */
  getUserId(): number {
    const session = this.getSession();
    return session ? session.userId : 0;
  }

  /** Get the stored token */
  getToken(): string {
    const session = this.getSession();
    return session ? session.token : '';
  }

  /** Get the current user's email */
  getEmail(): string {
    const session = this.getSession();
    return session ? session.email : '';
  }

  /** Get the current user's display name */
  getName(): string {
    const session = this.getSession();
    return session ? session.name : '';
  }

  /** Logout — clear session */
  logout(): void {
    localStorage.removeItem('obx_session');
  }

  // ---------- SCA ----------

  /** Verify SCA (OTP) via POST /api/v1/sca/otp */
  verifySca(userId: number, method: string, referenceId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sca/otp?userId=${userId}&referenceId=${referenceId}`, {});
  }

  /** Get all SCA events (for compliance dashboard) */
  getScaEvents(): Observable<SCAEvent[]> {
    return this.http.get<SCAEvent[]>(`${this.apiUrl}/sca/events`);
  }
}
