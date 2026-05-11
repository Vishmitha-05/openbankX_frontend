import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Consent, ConsentEvent } from '../models/models';

/**
 * ConsentService — Manages customer consents.
 *
 * Backend mappings:
 *   POST /api/v1/consents                 → Create consent
 *   GET  /api/v1/consents                 → List all consents
 *   GET  /api/v1/consents/{id}             → Get consent by ID
 *   PUT  /api/v1/consents/{id}/revoke      → Revoke consent
 *   PUT  /api/v1/consents/{id}/activate    → Activate consent after SCA
 *   GET  /api/v1/consents/user/{userId}    → Get consents by user
 */
@Injectable({ providedIn: 'root' })
export class ConsentService {

  private apiUrl = environment.apiBaseUrl; // e.g. http://localhost:8080/api/v1

  constructor(private http: HttpClient) {}

  /**
   * Create a consent
   * Expiry date is calculated in the BACKEND
   */
  createConsent(consent: {
    user_id: number;
    tpp_app_id: number;
    scopeJSON: string;
  }): Observable<Consent> {
    return this.http.post<Consent>(
      `http://localhost:8081/api/v1/consents`, // Use full URL to avoid proxy issues
      consent
    );
  }

  /**
   * Get all consents (admin / ops)
   */
  getConsents(): Observable<Consent[]> {
    return this.http.get<Consent[]>(
      `${this.apiUrl}/consents`
    );
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
    return this.http.get<Consent>(
      `${this.apiUrl}/consents/${id}`
    );
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
   * (Optional)
   * Requires backend endpoint:
   * GET /api/v1/consents/{id}/events
   */
  getConsentEvents(consentId: number): Observable<ConsentEvent[]> {
    return this.http.get<ConsentEvent[]>(
      `${this.apiUrl}/consents/${consentId}/events`
    );
  }
}