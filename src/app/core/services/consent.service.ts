import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Consent, ConsentEvent } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ConsentService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  /**
   * ✅ Create a consent (correct payload shape)
   */
  createConsent(consent: {
    user: { userId: number };
    tppApp: { tppAppId: number };
    scopeJSON: string;
  }): Observable<Consent> {
    return this.http.post<Consent>(
      `${this.apiUrl}/consents`,
      consent
    );
  }

  /**
   * Get all consents (admin / ops)
   */
  getConsents(): Observable<Consent[]> {
    return this.http.get<Consent[]>(`${this.apiUrl}/consents`);
  }

  /**
   * Get all consents for a specific user
   */
  getConsentsByUser(userId: number): Observable<Consent[]> {
    return this.http.get<Consent[]>(
      `${this.apiUrl}/consents/user/${userId}`
    );
  }

  /**
   * Get a single consent by ID
   */
  getConsentById(id: number): Observable<Consent> {
    return this.http.get<Consent>(`${this.apiUrl}/consents/${id}`);
  }

  /**
   * Revoke a consent
   */
  revokeConsent(id: number): Observable<Consent> {
    return this.http.put<Consent>(
      `${this.apiUrl}/consents/${id}/revoke`,
      {}
    );
  }

  /**
   * Update the scope list of an existing consent (used by the customer's
   * My Consents page to add or withdraw individual permissions).
   * Submitting an empty array effectively revokes the consent.
   */
  updateScopes(id: number, scopes: string[]): Observable<Consent> {
    return this.http.put<Consent>(
      `${this.apiUrl}/consents/${id}/scopes`,
      { scopeJSON: JSON.stringify(scopes) }
    );
  }

  /**
   * Activate consent after SCA completion. The chosen SCA method is
   * recorded server-side in sca_event for audit purposes.
   */
  activateAfterSca(id: number, method: string = 'OTP'): Observable<Consent> {
    return this.http.put<Consent>(
      `${this.apiUrl}/consents/${id}/activate`,
      { method }
    );
  }

  /**
   * Get consent events (optional)
   */
  getConsentEvents(consentId: number): Observable<ConsentEvent[]> {
    return this.http.get<ConsentEvent[]>(
      `${this.apiUrl}/consents/${consentId}/events`
    );
  }
}