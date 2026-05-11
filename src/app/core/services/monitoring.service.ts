import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Incident, APILog } from '../models/models';

/**
 * MonitoringService — Incidents and gateway logs.
 *
 * Maps to:
 *   GET  /incidents             → List incidents
 *   POST /incidents             → Create incident
 *   PUT  /incidents/{id}/close  → Close incident
 *   GET  /gateway/logs          → API gateway logs
 */
@Injectable({ providedIn: 'root' })
export class MonitoringService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // ---------- Incidents ----------

  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(`${this.apiUrl}/incidents`);
  }

  createIncident(incident: Partial<Incident>): Observable<Incident> {
    return this.http.post<Incident>(`${this.apiUrl}/incidents`, incident);
  }

  closeIncident(id: number): Observable<Incident> {
    return this.http.put<Incident>(`${this.apiUrl}/incidents/${id}/close`, {});
  }

  // ---------- Gateway Logs ----------

  getGatewayLogs(): Observable<APILog[]> {
    return this.http.get<APILog[]>(`${this.apiUrl}/logs`);
  }

  getLogsByApp(appId: number): Observable<APILog[]> {
    return this.http.get<APILog[]>(`${this.apiUrl}/logs/app/${appId}`);
  }
}

