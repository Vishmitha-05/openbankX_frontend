import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ConsentService } from '../../core/services/consent.service';
import { Consent } from '../../core/models/models';

@Component({
  selector: 'app-consent-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1>Consent Details</h1></div></div>
      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div><span>Loading...</span></div>
      <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
      <div class="glass-card" *ngIf="!isLoading && consent" style="max-width:640px">
        <div class="detail-row"><span class="detail-label">Consent ID</span><span>#{{ consent.consentId }}</span></div>
        <div class="detail-row"><span class="detail-label">Status</span>
          <span class="badge" [ngClass]="'badge-' + consent.status.toLowerCase()">{{ consent.status }}</span>
        </div>
        <div class="detail-row"><span class="detail-label">TPP App</span><span>{{ consent.tppApp?.appName }}</span></div>
        <div class="detail-row"><span class="detail-label">Created</span><span>{{ consent.createdDate | date:'medium' }}</span></div>
        <div class="detail-row"><span class="detail-label">Expires</span><span>{{ consent.expiryDate | date:'medium' }}</span></div>
        <div class="section-divider"></div>
        <h4 class="mb-8">Scopes</h4>
        <div class="flex gap-8" style="flex-wrap:wrap">
          <span *ngFor="let s of parseJson(consent.scopeJSON)" class="scope-pill">{{ s }}</span>
        </div>
        <div class="section-divider"></div>
        <h4 class="mb-8">Resource Filter</h4>
        <pre class="font-mono text-sm" style="color:var(--text-secondary)">{{ consent.resourceFilterJSON | json }}</pre>
        <div class="mt-24" *ngIf="consent.status === 'ACTIVE'">
          <button class="btn btn-danger" (click)="revoke()"><i class="fas fa-times"></i> Revoke Consent</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './consent-detail.component.css'
})
export class ConsentDetailComponent implements OnInit {
  consent: Consent | null = null;
  isLoading = true;
  errorMessage = '';
  constructor(private route: ActivatedRoute, private consentService: ConsentService) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.consentService.getConsentById(id).subscribe({
      next: (d) => { this.consent = d; this.isLoading = false; },
      error: () => {
        this.errorMessage = 'Unable to load consent details.';
        this.isLoading = false;
      }
    });
  }
  parseJson(s: string): string[] { try { return JSON.parse(s); } catch { return []; } }
  revoke(): void {
    if (this.consent && confirm('Revoke this consent?')) {
      this.consentService.revokeConsent(this.consent.consentId).subscribe({ next: () => { this.consent!.status = 'REVOKED'; } });
    }
  }
}
