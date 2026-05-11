import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getAvailableApps(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/apps/available`);
  }

  getAppStats(appId: number): Observable<AppStats> {
    return this.http.get<AppStats>(`${this.apiUrl}/apps/${appId}/stats`);
  }
}
