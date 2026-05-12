import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PaymentInitiation, PaymentInitiationRequest } from '../models/models';

@Injectable({ providedIn: 'root' })
export class PaymentService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  initiatePayment(
    payload: PaymentInitiationRequest
  ): Observable<PaymentInitiation> {
    return this.http.post<PaymentInitiation>(
      `${this.apiUrl}/pisp/payments`,
      payload
    );
  }

  executePayment(paymentId: number): Observable<PaymentInitiation> {
    return this.http.post<PaymentInitiation>(
      `${this.apiUrl}/pisp/payments/${paymentId}/execute`,
      {}
    );
  }
}