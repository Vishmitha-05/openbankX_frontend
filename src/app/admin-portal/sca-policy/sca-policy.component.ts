import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sca-policy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-lock"></i> SCA Policy Configuration</h1>
        <p class="page-subtitle">Define which scopes require Strong Customer Authentication</p></div>
      </div>

      <div class="glass-card" style="max-width:560px">
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
              <i [class]="method.icon" [ngStyle]="{ 'color': method.enabled ? '#10b981' : 'var(--text-muted)' }"></i>
              <span>{{ method.label }}</span>
            </div>
            <label class="toggle">
              <input type="checkbox" [(ngModel)]="method.enabled">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>

        <button class="btn btn-primary mt-24" (click)="savePolicy()"><i class="fas fa-save"></i> Save Policy</button>
        <div class="alert alert-success mt-12" *ngIf="saved"><i class="fas fa-check-circle"></i> Policy saved!</div>
      </div>
    </div>
  `,
  styleUrl: './sca-policy.component.css'
})
export class ScaPolicyComponent {
  saved = false;

  scaPolicies = [
    { scope: 'accounts:read', description: 'View account list', requiresSca: false },
    { scope: 'balances:read', description: 'View balances', requiresSca: true },
    { scope: 'payments:write', description: 'Initiate payments', requiresSca: true },
    { scope: 'funds:read', description: 'Check funds availability', requiresSca: true }
  ];

  scaMethods = [
    { label: 'OTP (SMS)', icon: 'fas fa-sms', enabled: true },
    { label: 'Device Push', icon: 'fas fa-mobile-alt', enabled: true },
    { label: 'App Approval', icon: 'fas fa-fingerprint', enabled: false }
  ];

  savePolicy(): void { this.saved = true; setTimeout(() => this.saved = false, 3000); }
}
