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
  templateUrl: './keys-upload.component.html',
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
