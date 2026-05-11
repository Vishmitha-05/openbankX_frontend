import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sandbox-explorer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-flask"></i> Sandbox Explorer</h1>
          <p class="page-subtitle">Test Open Banking APIs with live requests</p>
        </div>
      </div>

      <div class="grid-2">
        <!-- Request Panel -->
        <div class="glass-card">
          <h3 class="mb-16">Request</h3>
          <div class="form-group">
            <label>HTTP Method</label>
            <select class="form-control" [(ngModel)]="method">
              <option *ngFor="let m of methods" [value]="m">{{ m }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Endpoint</label>
            <select class="form-control" [(ngModel)]="endpoint">
              <option *ngFor="let ep of endpoints" [value]="ep.path">{{ ep.label }}</option>
            </select>
          </div>
          <div class="form-group" *ngIf="method === 'POST'">
            <label>Request Body (JSON)</label>
            <textarea class="form-control font-mono" [(ngModel)]="requestBody" rows="6"></textarea>
          </div>
          <button class="btn btn-primary" (click)="sendRequest()" [disabled]="isSending">
            <span *ngIf="!isSending"><i class="fas fa-paper-plane"></i> Send Request</span>
            <span *ngIf="isSending"><i class="fas fa-spinner fa-spin"></i> Sending...</span>
          </button>
        </div>

        <!-- Response Panel -->
        <div class="glass-card">
          <div class="flex items-center justify-between mb-16">
            <h3>Response</h3>
            <span *ngIf="statusCode" class="badge" [ngClass]="statusCode < 400 ? 'badge-active' : 'badge-revoked'">
              {{ statusCode }}
            </span>
          </div>
          <div *ngIf="!responseData" class="empty-state">
            <i class="fas fa-arrow-left"></i>
            <p>Send a request to see the response</p>
          </div>
          <pre *ngIf="responseData" class="response-pre font-mono">{{ responseData }}</pre>
          <div class="alert alert-error mt-12" *ngIf="responseError">
            <i class="fas fa-times-circle"></i> {{ responseError }}
          </div>
        </div>
      </div>
    </div>
  `,
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
