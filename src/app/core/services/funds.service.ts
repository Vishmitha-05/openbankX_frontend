import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FundsCheck } from '../models/models';

/**
 * FundsService — CBPII (Funds Confirmation) APIs.
 *
 * Maps to:
 *   POST /cbpii/funds-check → Check funds availability
 */
@Injectable({ providedIn: 'root' })
export class FundsService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  checkFunds(data: any): Observable<FundsCheck> {
    return this.http.post<FundsCheck>(`${this.apiUrl}/cbpii/funds-check`, data);
  }
}
