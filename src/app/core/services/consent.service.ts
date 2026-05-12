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
   * Activate consent after SCA completion
   */
  activateAfterSca(id: number): Observable<Consent> {
    return this.http.put<Consent>(
      `${this.apiUrl}/consents/${id}/activate`,
      {}
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