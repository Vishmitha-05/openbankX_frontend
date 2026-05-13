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
  templateUrl: './app-registration.component.html',
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
