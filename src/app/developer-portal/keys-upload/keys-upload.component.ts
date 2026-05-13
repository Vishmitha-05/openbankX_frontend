import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TppService } from '../../core/services/tpp.service';
import { TPPApp } from '../../core/models/models';

@Component({
  selector: 'app-keys-upload',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-key"></i> Keys &amp; JWK Set</h1>
          <p class="page-subtitle" *ngIf="app">Managing keys for: <strong>{{ app.appName }}</strong></p>
        </div>
        <a routerLink="/developer/apps" class="btn btn-light">
          <i class="fas fa-arrow-left"></i> Back to Apps
        </a>
      </div>

      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading app details...</span>
      </div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>
      <div class="alert alert-success" *ngIf="saved">
        <i class="fas fa-check-circle"></i> Keys updated successfully.
      </div>

      <div class="glass-card" *ngIf="!isLoading && app" style="max-width:680px">
        <div class="form-group">
          <label>JWK Set (JSON)</label>
          <textarea class="form-control font-mono" [(ngModel)]="jwkSet" rows="8"
                    placeholder='{"keys":[{"kty":"RSA","kid":"key-1"}]}'></textarea>
        </div>

        <div class="form-group">
          <label>Redirect URIs (JSON array)</label>
          <textarea class="form-control font-mono" [(ngModel)]="redirectURIs" rows="3"
                    placeholder='["https://myapp.com/callback"]'></textarea>
        </div>

        <button class="btn btn-primary" (click)="saveKeys()" [disabled]="isSaving">
          <span *ngIf="!isSaving"><i class="fas fa-save"></i> Update Keys</span>
          <span *ngIf="isSaving"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
        </button>
      </div>

      <div class="empty-state" *ngIf="!isLoading && !app && !errorMessage">
        <i class="fas fa-key"></i>
        <p>No app found.</p>
      </div>
    </div>
  `,
  styleUrl: './keys-upload.component.css'
})
export class KeysUploadComponent implements OnInit {
  app: TPPApp | null = null;
  jwkSet = '';
  redirectURIs = '';
  isLoading = true;
  isSaving = false;
  saved = false;
  errorMessage = '';
  appId = 0;

  constructor(private route: ActivatedRoute, private tppService: TppService) {}

  ngOnInit(): void {
    this.appId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.appId) {
      this.isLoading = false;
      this.errorMessage = 'Invalid app id.';
      return;
    }

    this.tppService.getAppById(this.appId).subscribe({
      next: (d) => {
        this.app = d;
        this.jwkSet = d?.publicKeysJWKSet || '';
        this.redirectURIs = d?.redirectURIs || '';
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Unable to load app details.';
      }
    });
  }

  saveKeys(): void {
    if (this.isSaving) return;
    this.isSaving = true;
    this.saved = false;
    this.errorMessage = '';

    this.tppService.updateApp(this.appId, {
      publicKeysJWKSet: this.jwkSet,
      redirectURIs: this.redirectURIs
    }).subscribe({
      next: () => {
        this.isSaving = false;
        this.saved = true;
        setTimeout(() => (this.saved = false), 3500);
      },
      error: () => {
        this.isSaving = false;
        this.errorMessage = 'Failed to update keys.';
      }
    });
  }
}
