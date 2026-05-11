import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AccountRef, TransactionRef } from '../models/models';

/**
 * AccountService — AISP (Account Information) APIs.
 *
 * Maps to:
 *   GET /aisp/accounts                    → List accounts
 *   GET /aisp/accounts/{id}/transactions  → Get transactions
 */
@Injectable({ providedIn: 'root' })
export class AccountService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getAccounts(userId: number): Observable<AccountRef[]> {
    return this.http.get<AccountRef[]>(`${this.apiUrl}/aisp/accounts`);
  }

  getTransactions(accountId: number): Observable<TransactionRef[]> {
    return this.http.get<TransactionRef[]>(`${this.apiUrl}/aisp/accounts/${accountId}/transactions`);
  }
}
