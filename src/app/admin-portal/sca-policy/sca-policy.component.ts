import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface ScaPolicy { scope: string; description: string; requiresSca: boolean; }
interface ScaMethod { label: string; icon: string; enabled: boolean; }

@Component({
  selector: 'app-sca-policy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-lock"></i> SCA Policy Configuration</h1>
          <p class="page-subtitle">Define which scopes require Strong Customer Authentication</p>
        </div>
      </div>

      <div class="alert alert-success" *ngIf="saveMessage">
        <i class="fas fa-check-circle"></i> {{ saveMessage }}
      </div>
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div class="glass-card" style="max-width:580px">
        <h3 class="mb-16">Scope-level SCA Requirements</h3>
        <div *ngFor="let policy of scaPolicies" class="policy-item">
          <div class="flex items-center justify-between">
            <div>
              <span class="scope-pill">{{ policy.scope }}</span>
              <span class="text-sm text-muted" style="margin-left:8px">{{ policy.description }}</span>
            </div>
            <label class="toggle">
              <input type="checkbox" [(ngModel)]="policy.requiresSca">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div class="section-divider"></div>

        <h3 class="mb-16">SCA Methods Allowed</h3>
        <div *ngFor="let method of scaMethods" class="policy-item">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-8">
              <i [class]="method.icon"
                 [ngStyle]="{ 'color': method.enabled ? '#16a34a' : 'var(--text-muted)' }"></i>
              <span>{{ method.label }}</span>
            </div>
            <label class="toggle">
              <input type="checkbox" [(ngModel)]="method.enabled">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div class="flex items-center gap-8 mt-24">
          <button class="btn btn-primary" (click)="savePolicy()" [disabled]="isSaving">
            <span *ngIf="!isSaving"><i class="fas fa-save"></i> Save Policy</span>
            <span *ngIf="isSaving"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
          </button>
          <span class="text-sm text-muted" *ngIf="lastSavedAt">
            Last saved {{ lastSavedAt | date:'medium' }} ({{ savedLocation }})
          </span>
        </div>
      </div>
    </div>
  `,
  styleUrl: './sca-policy.component.css'
})
export class ScaPolicyComponent implements OnInit {
  isSaving = false;
  saveMessage = '';
  errorMessage = '';
  lastSavedAt: string | null = null;
  savedLocation = '';

  private readonly STORAGE_KEY = 'obx_sca_policy';

  scaPolicies: ScaPolicy[] = [
    { scope: 'accounts:read',  description: 'View account list',         requiresSca: false },
    { scope: 'balances:read',  description: 'View balances',             requiresSca: true  },
    { scope: 'payments:write', description: 'Initiate payments',         requiresSca: true  },
    { scope: 'funds:read',     description: 'Check funds availability',  requiresSca: true  }
  ];

  scaMethods: ScaMethod[] = [
    { label: 'OTP (SMS)',     icon: 'fas fa-sms',          enabled: true  },
    { label: 'Device Push',   icon: 'fas fa-mobile-alt',   enabled: true  },
    { label: 'App Approval',  icon: 'fas fa-fingerprint',  enabled: false }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const cached = localStorage.getItem(this.STORAGE_KEY);
    if (cached) {
      try {
        const data = JSON.parse(cached);
        if (data.policies) this.scaPolicies = data.policies;
        if (data.methods) this.scaMethods = data.methods;
        if (data.savedAt) {
          this.lastSavedAt = data.savedAt;
          this.savedLocation = data.location || 'local cache';
        }
      } catch { /* ignore */ }
    }
  }

  savePolicy(): void {
    this.isSaving = true;
    this.saveMessage = '';
    this.errorMessage = '';

    const payload = {
      policies: this.scaPolicies,
      methods: this.scaMethods
    };

    this.http.post(`${environment.apiBaseUrl}/sca/policy`, payload).subscribe({
      next: () => {
        this.persistLocally('database');
        this.isSaving = false;
        this.saveMessage = 'Policy saved to the SCA policy database.';
        setTimeout(() => (this.saveMessage = ''), 4000);
      },
      error: () => {
        this.persistLocally('local browser storage');
        this.isSaving = false;
        this.saveMessage = 'Policy saved locally (backend endpoint unavailable).';
        setTimeout(() => (this.saveMessage = ''), 4000);
      }
    });
  }

  private persistLocally(location: string): void {
    const stamp = new Date().toISOString();
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
      policies: this.scaPolicies,
      methods: this.scaMethods,
      savedAt: stamp,
      location
    }));
    this.lastSavedAt = stamp;
    this.savedLocation = location;
  }
}
