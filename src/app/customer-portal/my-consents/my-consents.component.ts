import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ConsentService } from '../../core/services/consent.service';
import { AuthService } from '../../core/services/auth.service';
import { Consent } from '../../core/models/models';

@Component({
  selector: 'app-my-consents',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-handshake"></i> My Consents</h1>
          <p class="page-subtitle">View and manage your active data sharing consents</p>
        </div>
      </div>

      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div><span>Loading consents...</span></div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div class="empty-state" *ngIf="!isLoading && consents.length === 0 && !errorMessage">
        <i class="fas fa-handshake"></i>
        <p>No consents found. Browse apps to grant access.</p>
        <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
          <i class="fas fa-store"></i> Browse Apps
        </button>
      </div>

      <div class="grid-3" *ngIf="!isLoading">
        <div *ngFor="let consent of consents" class="glass-card consent-card">
          <div class="flex items-center justify-between mb-12">
            <span class="badge" [ngClass]="{
              'badge-active': consent.status === 'ACTIVE',
              'badge-pending': consent.status === 'AWAITING_SCA',
              'badge-revoked': consent.status === 'REVOKED',
              'badge-expired': consent.status === 'EXPIRED'
            }">{{ consent.status === 'AWAITING_SCA' ? 'Awaiting SCA' : consent.status }}</span>
            <span class="text-sm text-muted">#{{ consent.consentId }}</span>
          </div>

          <h4>{{ consent.tppApp?.appName || 'TPP App' }}</h4>
          <p class="text-sm text-muted mt-4">{{ consent.tppApp?.tpp?.legalName || '' }}</p>

          <div class="mt-12">
            <label class="text-sm text-muted">Scopes Granted</label>
            <div class="mt-4">
              <span *ngFor="let scope of parseJson(consent.scopeJSON)" class="scope-pill">{{ scope }}</span>
            </div>
          </div>

          <div class="consent-dates mt-12">
            <div><span class="text-sm text-muted">Created:</span> <span class="text-sm">{{ consent.createdDate | date:'mediumDate' }}</span></div>
            <div><span class="text-sm text-muted">Expires:</span> <span class="text-sm">{{ consent.expiryDate | date:'mediumDate' }}</span></div>
          </div>

          <div class="flex gap-8 mt-16">
            <a [routerLink]="['/customer/consents', consent.consentId]" class="btn btn-secondary btn-sm">
              <i class="fas fa-eye"></i> Details
            </a>
            <button *ngIf="consent.status === 'AWAITING_SCA'" class="btn btn-primary btn-sm" (click)="goToSca(consent)">
              <i class="fas fa-shield-alt"></i> Complete SCA
            </button>
            <button *ngIf="consent.status === 'ACTIVE'" class="btn btn-danger btn-sm" (click)="revoke(consent)">
              <i class="fas fa-times"></i> Revoke
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './my-consents.component.css'
})
export class MyConsentsComponent implements OnInit {
  consents: Consent[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private consentService: ConsentService,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();

    this.consentService.getConsentsByUser(userId).subscribe({
      next: (d) => {
        this.consents = d || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Unable to load consents.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  parseJson(str: string): string[] {
    try { return JSON.parse(str); } catch { return []; }
  }

  goToBrowseApps(): void {
    this.router.navigate(['/customer/apps']);
  }

  goToSca(consent: Consent): void {
    this.router.navigate(['/customer/sca'], {
      queryParams: { consentId: consent.consentId }
    });
  }

  revoke(consent: Consent): void {
    if (confirm('Are you sure you want to revoke this consent?')) {
      this.consentService.revokeConsent(consent.consentId).subscribe({
        next: () => { consent.status = 'REVOKED'; this.cdr.detectChanges(); }
      });
    }
  }
}

