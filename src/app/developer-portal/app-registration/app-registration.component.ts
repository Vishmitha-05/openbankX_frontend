import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TppService } from '../../core/services/tpp.service';

/**
 * AppRegistrationComponent — Register a new TPP application.
 *
 * DIRECTIVES:
 *   [(ngModel)]  → Two-way bind all form fields
 *   *ngIf        → Show/hide validation errors, success messages
 *   *ngFor       → Scope checkboxes
 */
@Component({
  selector: 'app-app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1>Register New Application</h1>
          <p class="page-subtitle">Create a new TPP application to start using the Open Banking APIs</p>
        </div>
      </div>

      <div class="alert alert-success" *ngIf="successMessage">
        <i class="fas fa-check-circle"></i> {{ successMessage }}
      </div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div class="glass-card" style="max-width: 640px;">
        <!-- App Name -->
        <div class="form-group">
          <label>Application Name</label>
          <input type="text" class="form-control" placeholder="e.g., FinTech Budget App"
                 [(ngModel)]="appName"
                 [ngClass]="{ 'invalid': submitted && !appName }">
        </div>

        <!-- TPP ID -->
        <div class="form-group">
          <label>TPP ID (Parent Company)</label>
          <input type="number" class="form-control" placeholder="e.g., 1"
                 [(ngModel)]="tppId">
        </div>

        <!-- Redirect URIs -->
        <div class="form-group">
          <label>Redirect URIs (JSON array)</label>
          <textarea class="form-control" placeholder='["https://myapp.com/callback"]'
                    [(ngModel)]="redirectURIs"></textarea>
        </div>

        <!-- JWK Set -->
        <div class="form-group">
          <label>Public Keys (JWK Set — JSON)</label>
          <textarea class="form-control" placeholder='{"keys":[{"kty":"RSA","kid":"key-1"}]}'
                    [(ngModel)]="publicKeys"></textarea>
        </div>

        <!-- Scopes Selection — using *ngFor and ngModel -->
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

        <!-- Submit -->
        <button class="btn btn-primary" (click)="submitApp()" [disabled]="isSubmitting">
          <span *ngIf="!isSubmitting"><i class="fas fa-paper-plane"></i> Register Application</span>
          <span *ngIf="isSubmitting"><i class="fas fa-spinner fa-spin"></i> Submitting...</span>
        </button>
      </div>
    </div>
  `,
  styleUrl: './app-registration.component.css'
})
export class AppRegistrationComponent {

  appName: string = '';
  tppId: number = 1;
  redirectURIs: string = '';
  publicKeys: string = '';
  selectedScopes: string[] = [];
  submitted = false;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  availableScopes = ['accounts', 'payments', 'funds-confirmations'];

  constructor(private tppService: TppService, private router: Router) {}

  toggleScope(scope: string): void {
    const index = this.selectedScopes.indexOf(scope);
    if (index > -1) {
      this.selectedScopes.splice(index, 1);
    } else {
      this.selectedScopes.push(scope);
    }
  }

  submitApp(): void {
    this.submitted = true;
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.appName) {
      this.errorMessage = 'Application name is required.';
      return;
    }

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
        this.successMessage = 'Application registered successfully! Awaiting admin approval.';
        this.isSubmitting = false;
        this.resetForm();
      },
      error: () => {
        this.errorMessage = 'Failed to register application. Please check the backend connection.';
        this.isSubmitting = false;
      }
    });
  }

  resetForm(): void {
    this.appName = '';
    this.redirectURIs = '';
    this.publicKeys = '';
    this.selectedScopes = [];
    this.submitted = false;
  }
}
