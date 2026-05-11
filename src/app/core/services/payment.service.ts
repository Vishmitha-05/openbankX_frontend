import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PaymentInitiation } from '../models/models';

@Injectable({ providedIn: 'root' })
export class PaymentService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  initiatePayment(payment: Partial<PaymentInitiation>): Observable<PaymentInitiation> {
    return this.http.post<PaymentInitiation>(`${this.apiUrl}/pisp/payments`, payment);
  }

  getPayments(): Observable<PaymentInitiation[]> {
    return this.http.get<PaymentInitiation[]>(`${this.apiUrl}/pisp/payments`);
  }
}
