import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ConsentService } from '../../core/services/consent.service';
import { AuthService } from '../../core/services/auth.service';
import { Consent } from '../../core/models/models';

@Component({
  selector: 'app-my-consents',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-handshake"></i> My Consents</h1>
          <p class="page-subtitle">Review pending requests and manage your data-sharing permissions</p>
        </div>
      </div>

      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div><span>Loading consents...</span>
      </div>

      <div class="alert alert-success" *ngIf="successMessage">
        <i class="fas fa-check-circle"></i> {{ successMessage }}
      </div>
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div class="empty-state" *ngIf="!isLoading && consents.length === 0 && !errorMessage">
        <i class="fas fa-handshake"></i>
        <p>No consents found. Browse apps to grant access.</p>
        <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
          <i class="fas fa-store"></i> Go to My Apps
        </button>
      </div>

      <!-- ============================================================
           AWAITING REVIEW (was the old "Review Consent" page)
           ============================================================ -->
      <section *ngIf="!isLoading && pendingConsents.length > 0" class="mb-24">
        <h3 class="section-title">
          <i class="fas fa-clipboard-check"></i> Awaiting your review
          <span class="badge badge-pending">{{ pendingConsents.length }}</span>
        </h3>

        <div class="grid-2">
          <div *ngFor="let consent of pendingConsents" class="glass-card review-card">

            <div class="review-header">
              <div class="review-app-icon"><i class="fas fa-cube"></i></div>
              <div>
                <h4>{{ consent.tppApp?.appName || 'App' }}</h4>
                <p class="text-sm text-muted">{{ consent.tppApp?.tpp?.legalName || '' }}</p>
              </div>
              <span class="badge badge-pending" style="margin-left:auto">AWAITING SCA</span>
            </div>

            <div class="section-divider"></div>

            <h5 class="mb-8">Requested permissions</h5>
            <div class="scope-list">
              <div *ngFor="let scope of parseJson(consent.scopeJSON)" class="scope-item">
                <i class="fas fa-check-circle text-success"></i>
                <span>{{ getScopeLabel(scope) }}</span>
              </div>
            </div>

            <div class="section-divider"></div>

            <div class="detail-row">
              <span class="text-muted">Consent ID</span>
              <span>#{{ consent.consentId }}</span>
            </div>
            <div class="detail-row">
              <span class="text-muted">Expires</span>
              <span>{{ consent.expiryDate | date:'mediumDate' }}</span>
            </div>

            <div class="flex gap-8 mt-16">
              <button class="btn btn-success btn-sm" (click)="goToSca(consent)">
                <i class="fas fa-shield-alt"></i> Approve &amp; verify (SCA)
              </button>
              <button class="btn btn-danger btn-sm" (click)="deny(consent)">
                <i class="fas fa-times"></i> Deny
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================================
           ACTIVE / EXPIRED / REVOKED consents
           ============================================================ -->
      <section *ngIf="!isLoading && otherConsents.length > 0">
        <h3 class="section-title">
          <i class="fas fa-list"></i> My consents
          <span class="badge badge-info">{{ otherConsents.length }}</span>
        </h3>

        <div class="grid-3">
          <div *ngFor="let consent of otherConsents" class="glass-card consent-card">
            <div class="flex items-center justify-between mb-12">
              <span class="badge"
                    [ngClass]="{
                      'badge-active':  consent.status === 'ACTIVE',
                      'badge-revoked': consent.status === 'REVOKED',
                      'badge-expired': consent.status === 'EXPIRED'
                    }">{{ consent.status }}</span>
              <span class="text-sm text-muted">#{{ consent.consentId }}</span>
            </div>

            <h4>{{ consent.tppApp?.appName || 'TPP App' }}</h4>
            <p class="text-sm text-muted mt-4">{{ consent.tppApp?.tpp?.legalName || '' }}</p>

            <!-- ===== View mode ===== -->
            <ng-container *ngIf="editingId !== consent.consentId">
              <div class="mt-12">
                <label class="text-sm text-muted">Permissions granted</label>
                <div class="mt-4">
                  <span *ngFor="let scope of parseJson(consent.scopeJSON)" class="scope-pill">
                    {{ getScopeLabel(scope) }}
                  </span>
                </div>
              </div>

              <div class="consent-dates mt-12">
                <div>
                  <span class="text-sm text-muted">Created:</span>
                  <span class="text-sm">{{ consent.createdDate | date:'mediumDate' }}</span>
                </div>
                <div>
                  <span class="text-sm text-muted">Expires:</span>
                  <span class="text-sm">{{ consent.expiryDate | date:'mediumDate' }}</span>
                </div>
              </div>

              <div class="flex gap-8 mt-16">
                <a [routerLink]="['/customer/consents', consent.consentId]"
                   class="btn btn-secondary btn-sm">
                  <i class="fas fa-eye"></i> Details
                </a>
                <button *ngIf="consent.status === 'ACTIVE'"
                        class="btn btn-light btn-sm"
                        (click)="startEdit(consent)">
                  <i class="fas fa-pen"></i> Edit permissions
                </button>
                <button *ngIf="consent.status === 'ACTIVE'"
                        class="btn btn-danger btn-sm"
                        (click)="revoke(consent)">
                  <i class="fas fa-times"></i> Revoke
                </button>
              </div>
            </ng-container>

            <!-- ===== Edit mode ===== -->
            <ng-container *ngIf="editingId === consent.consentId">
              <div class="mt-12">
                <label class="text-sm text-muted">
                  Toggle the permissions you want to keep.
                  Unchecking all is the same as revoking the consent.
                </label>

                <div class="scope-checkboxes mt-8">
                  <label *ngFor="let scope of editableScopes(consent)" class="scope-check-item">
                    <input type="checkbox"
                           [checked]="editingSelected.includes(scope)"
                           (change)="toggleEditScope(scope)">
                    <span class="scope-pill">{{ getScopeLabel(scope) }}</span>
                  </label>
                </div>
              </div>

              <div class="flex gap-8 mt-16">
                <button class="btn btn-success btn-sm" (click)="saveEdit(consent)" [disabled]="isSavingEdit">
                  <span *ngIf="!isSavingEdit"><i class="fas fa-check"></i> Save changes</span>
                  <span *ngIf="isSavingEdit"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
                </button>
                <button class="btn btn-light btn-sm" (click)="cancelEdit()" [disabled]="isSavingEdit">
                  Cancel
                </button>
              </div>
            </ng-container>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrl: './my-consents.component.css'
})
export class MyConsentsComponent implements OnInit {

  consents: Consent[] = [];
  isLoading = true;
  errorMessage = '';
  successMessage = '';

  /** Consent currently being edited (id), and the in-progress scope selection. */
  editingId: number | null = null;
  editingSelected: string[] = [];
  /** Full list of scopes the app *originally* requested — used to allow
   *  re-adding a previously-withdrawn permission in the editor. */
  editingAllScopes: string[] = [];
  isSavingEdit = false;

  /** All scopes a customer can grant — fallback when the app request list
   *  doesn't include something the customer previously had. */
  private readonly KNOWN_SCOPES = ['accounts', 'balances', 'payments', 'funds-confirmations'];

  constructor(
    private consentService: ConsentService,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadConsents();
  }

  loadConsents(): void {
    const userId = this.authService.getUserId();
    this.isLoading = true;
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

  get pendingConsents(): Consent[] {
    return this.consents.filter(c => c.status === 'AWAITING_SCA');
  }

  get otherConsents(): Consent[] {
    return this.consents.filter(c => c.status !== 'AWAITING_SCA');
  }

  parseJson(str: string): string[] {
    try { return JSON.parse(str) || []; } catch { return []; }
  }

  getScopeLabel(scope: string): string {
    const map: { [k: string]: string } = {
      'accounts':            'View accounts',
      'balances':            'View balances',
      'payments':            'Initiate payments',
      'funds-confirmations': 'Confirm funds availability',
      'accounts:read':       'View account information',
      'balances:read':       'View account balances',
      'payments:write':      'Initiate payments',
      'funds:read':          'Check funds availability'
    };
    return map[scope] || scope;
  }

  goToBrowseApps(): void {
    this.router.navigate(['/customer/apps']);
  }

  goToSca(consent: Consent): void {
    this.router.navigate(['/customer/sca'], {
      queryParams: { consentId: consent.consentId, method: 'OTP' }
    });
  }

  /* ---------- Edit permissions ---------- */

  startEdit(consent: Consent): void {
    this.editingId = consent.consentId;
    this.editingSelected = [...this.parseJson(consent.scopeJSON)];

    // Allow re-adding any permission the parent app originally requested
    const requested = this.parseJson(consent.tppApp?.scopesRequested || '[]');
    const combined = new Set<string>([
      ...this.editingSelected,
      ...requested,
      ...this.KNOWN_SCOPES.filter(s => this.editingSelected.includes(s))
    ]);
    this.editingAllScopes = Array.from(combined);

    this.errorMessage = '';
    this.successMessage = '';
  }

  editableScopes(_consent: Consent): string[] {
    return this.editingAllScopes;
  }

  toggleEditScope(scope: string): void {
    this.editingSelected = this.editingSelected.includes(scope)
      ? this.editingSelected.filter(s => s !== scope)
      : [...this.editingSelected, scope];
  }

  cancelEdit(): void {
    this.editingId = null;
    this.editingSelected = [];
    this.editingAllScopes = [];
  }

  saveEdit(consent: Consent): void {
    this.errorMessage = '';
    this.isSavingEdit = true;

    this.consentService.updateScopes(consent.consentId, this.editingSelected).subscribe({
      next: (updated) => {
        this.isSavingEdit = false;
        // Persist the change locally so the UI updates immediately
        consent.scopeJSON = updated.scopeJSON;
        if (updated.status) consent.status = updated.status;

        this.successMessage = this.editingSelected.length === 0
          ? `All permissions withdrawn — consent #${consent.consentId} revoked.`
          : `Permissions updated for consent #${consent.consentId}.`;
        setTimeout(() => (this.successMessage = ''), 3500);

        this.cancelEdit();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isSavingEdit = false;
        this.errorMessage = err?.error?.message || 'Failed to update permissions.';
      }
    });
  }

  /* ---------- Deny / Revoke ---------- */

  deny(consent: Consent): void {
    if (!confirm(`Deny the consent request from "${consent.tppApp?.appName || 'this app'}"?`)) return;
    this.consentService.revokeConsent(consent.consentId).subscribe({
      next: () => {
        consent.status = 'REVOKED';
        this.successMessage = `Consent request denied.`;
        setTimeout(() => (this.successMessage = ''), 3000);
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Failed to deny consent. Please try again.';
      }
    });
  }

  revoke(consent: Consent): void {
    if (!confirm('Revoke this consent? The app will lose access immediately.')) return;
    this.consentService.revokeConsent(consent.consentId).subscribe({
      next: () => {
        consent.status = 'REVOKED';
        this.successMessage = `Consent #${consent.consentId} revoked.`;
        setTimeout(() => (this.successMessage = ''), 3000);
        this.cdr.detectChanges();
      }
    });
  }
}
