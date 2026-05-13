import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TppService } from '../../core/services/tpp.service';
import { AuthService } from '../../core/services/auth.service';
import { TPP } from '../../core/models/models';

@Component({
  selector: 'app-app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-plus-circle"></i> Register New Application</h1>
          <p class="page-subtitle">Create a new TPP application to start using the Open Banking APIs</p>
        </div>
      </div>

      <div class="alert alert-success" *ngIf="successMessage">
        <i class="fas fa-check-circle"></i> {{ successMessage }}
      </div>
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <!-- No TPP yet → guide user to register a company first -->
      <div class="glass-card" *ngIf="!isLoadingTpps && myTpps.length === 0" style="max-width:640px">
        <div class="empty-state">
          <i class="fas fa-building"></i>
          <p>You haven't registered a TPP company yet. Register one to start creating apps.</p>
          <a routerLink="/developer/tpp-register" class="btn btn-primary mt-12">
            <i class="fas fa-arrow-right"></i> Register TPP Company
          </a>
        </div>
      </div>

      <div class="loading-container" *ngIf="isLoadingTpps">
        <div class="spinner"></div>
      </div>

      <div class="glass-card" *ngIf="!isLoadingTpps && myTpps.length > 0" style="max-width: 640px;">
        <div class="form-group">
          <label>Application Name</label>
          <input type="text" class="form-control" placeholder="e.g., FinTech Budget App"
                 [(ngModel)]="appName">
        </div>

        <div class="form-group">
          <label>Parent TPP Company</label>
          <select class="form-control" [(ngModel)]="tppId">
            <option *ngFor="let t of myTpps" [ngValue]="t.tppId">
              {{ t.legalName }} ({{ t.status }})
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Redirect URIs (JSON array)</label>
          <textarea class="form-control font-mono" placeholder='["https://myapp.com/callback"]'
                    [(ngModel)]="redirectURIs"></textarea>
        </div>

        <div class="form-group">
          <label>Public Keys (JWK Set — JSON)</label>
          <textarea class="form-control font-mono" placeholder='{"keys":[{"kty":"RSA","kid":"key-1"}]}'
                    [(ngModel)]="publicKeys"></textarea>
        </div>

        <div class="form-group">
          <label>Requested Scopes</label>
          <div class="scope-checkboxes">
            <label *ngFor="let scope of availableScopes" class="scope-check-item">
              <input type="checkbox"
                     [checked]="selectedScopes.includes(scope)"
                     (change)="toggleScope(scope)">
              <span class="scope-pill">{{ scope }}</span>
            </label>
          </div>
        </div>

        <button class="btn btn-primary" (click)="submitApp()" [disabled]="isSubmitting">
          <span *ngIf="!isSubmitting"><i class="fas fa-paper-plane"></i> Register Application</span>
          <span *ngIf="isSubmitting"><i class="fas fa-spinner fa-spin"></i> Submitting...</span>
        </button>
      </div>
    </div>
  `,
  styleUrl: './app-registration.component.css'
})
export class AppRegistrationComponent implements OnInit {

  appName: string = '';
  tppId: number | null = null;
  redirectURIs: string = '';
  publicKeys: string = '';
  selectedScopes: string[] = [];

  myTpps: TPP[] = [];
  isLoadingTpps = true;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  availableScopes = ['accounts', 'payments', 'funds-confirmations'];

  constructor(
    private tppService: TppService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tppService.getMyTpps(this.authService.getEmail()).subscribe({
      next: (tpps) => {
        this.myTpps = tpps || [];
        if (this.myTpps.length > 0) {
          this.tppId = this.myTpps[0].tppId;
        }
        this.isLoadingTpps = false;
      },
      error: () => {
        this.isLoadingTpps = false;
        this.errorMessage = 'Unable to load your TPP companies.';
      }
    });
  }

  toggleScope(scope: string): void {
    const index = this.selectedScopes.indexOf(scope);
    if (index > -1) {
      this.selectedScopes.splice(index, 1);
    } else {
      this.selectedScopes.push(scope);
    }
  }

  submitApp(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.appName) {
      this.errorMessage = 'Application name is required.';
      return;
    }
    if (!this.tppId) {
      this.errorMessage = 'Please select a parent TPP company.';
      return;
    }

    if (this.isSubmitting) return;
    this.isSubmitting = true;

    const appData = {
      tpp: { tppId: this.tppId },
      appName: this.appName,
      redirectURIs: this.redirectURIs || '[]',
      publicKeysJWKSet: this.publicKeys || '{}',
      scopesRequested: JSON.stringify(this.selectedScopes),
      status: 'PENDING'
    };

    this.tppService.createApp(appData as any).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.successMessage = 'Application registered! Awaiting admin approval. Redirecting...';
        this.resetForm();
        setTimeout(() => this.router.navigate(['/developer/apps']), 1200);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = err?.error?.message || 'Failed to register application.';
      }
    });
  }

  resetForm(): void {
    this.appName = '';
    this.redirectURIs = '';
    this.publicKeys = '';
    this.selectedScopes = [];
  }
}
