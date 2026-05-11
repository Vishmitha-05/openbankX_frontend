import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { AuthorizeResponse } from '../../core/models/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-consent-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-clipboard-check"></i> Review Consent Request</h1>
        <p class="page-subtitle">Review what an app is requesting access to</p></div>
      </div>

      <div class="glass-card" style="max-width:560px">
        <div class="form-group">
          <label>Consent ID</label>
          <input type="number" class="form-control" [(ngModel)]="consentId" placeholder="Enter Consent ID">
        </div>
        <button class="btn btn-primary mb-20" (click)="loadReview()">
          <i class="fas fa-search"></i> Load Consent
        </button>

        <div *ngIf="authData" class="review-card glass-card">
          <div class="review-header">
            <div class="review-app-icon"><i class="fas fa-cube"></i></div>
            <div>
              <h3>{{ authData.tppAppName }}</h3>
              <p class="text-sm text-muted">requests access to your data</p>
            </div>
          </div>
          <div class="section-divider"></div>
          <h4 class="mb-8">Requested Permissions</h4>
          <div class="scope-list">
            <div *ngFor="let scope of parseScopes(authData.scopes)" class="scope-item">
              <i class="fas fa-check-circle text-success"></i>
              <span>{{ getScopeLabel(scope) }}</span>
            </div>
          </div>
          <div class="section-divider"></div>
          <div class="detail-row"><span class="text-muted">Expires</span><span>{{ authData.expiryDate | date:'mediumDate' }}</span></div>
          <div class="detail-row"><span class="text-muted">Status</span>
            <span class="badge badge-active">{{ authData.status }}</span>
          </div>
          <div class="flex gap-8 mt-20">
            <button class="btn btn-success" (click)="approve()"><i class="fas fa-check"></i> Approve</button>
            <button class="btn btn-danger" (click)="deny()"><i class="fas fa-times"></i> Deny</button>
          </div>
          <div class="alert alert-success mt-12" *ngIf="approved"><i class="fas fa-check-circle"></i> Consent approved! Proceed to SCA verification.</div>
        </div>

        <div class="alert alert-error" *ngIf="error"><i class="fas fa-times-circle"></i> {{ error }}</div>
      </div>
    </div>
  `,
  styleUrl: './consent-review.component.css'
})
export class ConsentReviewComponent {
  consentId: number = 1;
  authData: AuthorizeResponse | null = null;
  error = '';
  approved = false;

  constructor(private authService: AuthService, private http: HttpClient) {}

  loadReview(): void {
    this.error = '';
    this.authData = null;
    this.approved = false;
    const userId = this.authService.getUserId();
    this.http.get<any>(`${environment.apiBaseUrl}/consents/${this.consentId}`).subscribe({
      next: (consent) => {
        this.authData = {
          consentId: consent.consentId,
          tppAppName: consent.tppApp?.appName || 'Unknown App',
          scopes: consent.scopeJSON || '[]',
          expiryDate: consent.expiryDate,
          status: consent.status,
          redirectUri: '',
          state: ''
        } as any;
      },
      error: () => {
        this.error = 'Unable to load consent. Please ensure backend is running.';
      }
    });
  }

  parseScopes(s: string): string[] { try { return JSON.parse(s); } catch { return s ? [s] : []; } }

  getScopeLabel(scope: string): string {
    const map: any = {
      'accounts:read': 'View your account information',
      'balances:read': 'View your account balances',
      'payments:write': 'Initiate payments on your behalf',
      'funds:read': 'Check if funds are available'
    };
    return map[scope] || scope;
  }

  approve(): void { this.approved = true; }
  deny(): void { this.authData = null; }
}
