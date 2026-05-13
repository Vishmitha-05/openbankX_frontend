import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sandbox-explorer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sandbox-explorer.component.html',
  styleUrl: './sandbox-explorer.component.css'
})
export class SandboxExplorerComponent {
  method = 'GET';
  endpoint = '/aisp/accounts?userId=1';
  requestBody = '';
  responseData = '';
  responseError = '';
  statusCode: number | null = null;
  isSending = false;

  methods = ['GET', 'POST', 'PUT', 'DELETE'];
  endpoints = [
    { label: 'GET /aisp/accounts?userId=1', path: '/aisp/accounts?userId=1' },
    { label: 'GET /aisp/accounts/1/txns', path: '/aisp/accounts/1/txns' },
    { label: 'GET /apps', path: '/apps' },
    { label: 'GET /apps/1/stats', path: '/apps/1/stats' },
    { label: 'GET /consents', path: '/consents' },
    { label: 'POST /pisp/payments', path: '/pisp/payments' },
    { label: 'POST /cbpii/funds-check', path: '/cbpii/funds-check' },
    { label: 'GET /monitoring/incidents', path: '/monitoring/incidents' },
    { label: 'GET /notifications', path: '/notifications' },
    { label: 'GET /users', path: '/users' }
  ];

  constructor(private http: HttpClient) {}

  sendRequest(): void {
    this.isSending = true;
    this.responseData = '';
    this.responseError = '';
    this.statusCode = null;
    const url = environment.apiBaseUrl + this.endpoint;

    const req = this.method === 'POST' || this.method === 'PUT'
      ? this.http.request(this.method, url, { body: this.parseBody(), observe: 'response' })
      : this.http.request(this.method, url, { observe: 'response' });

    req.subscribe({
      next: (res: any) => {
        this.statusCode = res.status;
        this.responseData = JSON.stringify(res.body, null, 2);
        this.isSending = false;
      },
      error: (err: any) => {
        this.statusCode = err.status || 0;
        this.responseError = err.message || 'Request failed';
        this.responseData = JSON.stringify(err.error, null, 2);
        this.isSending = false;
      }
    });
  }

  parseBody(): any {
    try { return JSON.parse(this.requestBody); }
    catch { return {}; }
  }
}
