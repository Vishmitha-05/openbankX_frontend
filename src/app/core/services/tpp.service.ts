import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TPP, TPPApp, AppStats } from '../models/models';

/**
 * TppService — Manages TPP companies and their applications.
 *
 * Maps to:
 *   POST /tpps         → Register a new TPP
 *   GET  /tpps         → List all TPPs
 *   POST /apps         → Register an app
 *   GET  /apps         → List all apps
 *   GET  /apps/{id}    → Get app by ID
 *   PUT  /apps/{id}    → Update app
 *   GET  /apps/{id}/stats → Get app usage stats
 */
@Injectable({ providedIn: 'root' })
export class TppService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // ---------- TPP Company ----------

  registerTpp(tpp: Partial<TPP>): Observable<TPP> {
    return this.http.post<TPP>(`${this.apiUrl}/tpps`, tpp);
  }

  getTpps(): Observable<TPP[]> {
    return this.http.get<TPP[]>(`${this.apiUrl}/tpps`);
  }

  /** Return only TPP companies owned by the given user email. */
  getMyTpps(ownerEmail: string): Observable<TPP[]> {
    const email = (ownerEmail || '').trim().toLowerCase();
    return this.getTpps().pipe(
      map(tpps => (tpps || []).filter(t => (t.contactInfo || '').trim().toLowerCase() === email))
    );
  }

  getTppById(id: number): Observable<TPP> {
    return this.http.get<TPP>(`${this.apiUrl}/tpps/${id}`);
  }

  updateTppStatus(id: number, status: string): Observable<TPP> {
    return this.http.put<TPP>(`${this.apiUrl}/tpps/${id}`, { status });
  }

  // ---------- TPP Applications ----------

  getApps(): Observable<TPPApp[]> {
    return this.http.get<TPPApp[]>(`${this.apiUrl}/apps`);
  }

  /** Return only the apps belonging to TPP companies owned by the given user email. */
  getMyApps(ownerEmail: string): Observable<TPPApp[]> {
    const email = (ownerEmail || '').trim().toLowerCase();
    return this.getApps().pipe(
      map(apps => (apps || []).filter(a =>
        (a.tpp?.contactInfo || '').trim().toLowerCase() === email
      ))
    );
  }

  getAppById(id: number): Observable<TPPApp> {
    return this.http.get<TPPApp>(`${this.apiUrl}/apps/${id}`);
  }

  createApp(app: Partial<TPPApp>): Observable<TPPApp> {
    return this.http.post<TPPApp>(`${this.apiUrl}/apps`, app);
  }

  updateApp(id: number, app: Partial<TPPApp>): Observable<TPPApp> {
    return this.http.put<TPPApp>(`${this.apiUrl}/apps/${id}`, app);
  }

  updateAppStatus(id: number, status: string): Observable<TPPApp> {
    return this.http.put<TPPApp>(`${this.apiUrl}/apps/${id}`, { status });
  }

  /** Approve a TPP app — backend also auto-publishes it as an API Product. */
  approveApp(id: number): Observable<TPPApp> {
    return this.http.put<TPPApp>(`${this.apiUrl}/apps/${id}/approve`, {});
  }

  /** Reject (or revoke) a TPP app. */
  rejectApp(id: number): Observable<TPPApp> {
    return this.http.put<TPPApp>(`${this.apiUrl}/apps/${id}/reject`, {});
  }

  getAvailableApps(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/apps/available`);
  }

  getAppStats(appId: number): Observable<AppStats> {
    return this.http.get<AppStats>(`${this.apiUrl}/apps/${appId}/stats`);
  }
}
