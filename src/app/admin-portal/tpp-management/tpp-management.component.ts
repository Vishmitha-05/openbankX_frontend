import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TppService } from '../../core/services/tpp.service';
import { TPPApp } from '../../core/models/models';

@Component({
  selector: 'app-tpp-management',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-cube"></i> TPP App Management</h1>
        <p class="page-subtitle">Review, approve, reject, or suspend TPP applications</p></div>
      </div>
      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>
      <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
      <div class="glass-card" *ngIf="!isLoading">
        <table class="data-table">
          <thead><tr><th>App Name</th><th>TPP Company</th><th>Scopes</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            <tr *ngFor="let app of apps">
              <td><strong>{{ app.appName }}</strong></td>
              <td class="text-muted">{{ app.tpp.legalName }}</td>
              <td>
                <span *ngFor="let scope of parseScopes(app.scopesRequested)" class="scope-pill">{{ scope }}</span>
              </td>
              <td>
                <span class="badge" [ngClass]="{
                  'badge-approved': app.status === 'APPROVED',
                  'badge-pending': app.status === 'PENDING',
                  'badge-revoked': app.status === 'REJECTED'
                }">{{ app.status }}</span>
              </td>
              <td>
                <div class="flex gap-8">
                  <button *ngIf="app.status === 'PENDING'" class="btn btn-success btn-sm" (click)="updateAppStatus(app, 'APPROVED')">
                    <i class="fas fa-check"></i> Approve
                  </button>
                  <button *ngIf="app.status !== 'REJECTED'" class="btn btn-danger btn-sm" (click)="updateAppStatus(app, 'REJECTED')">
                    <i class="fas fa-times"></i> Reject
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="empty-state" *ngIf="apps.length === 0 && !errorMessage"><p>No TPP applications</p></div>
      </div>
    </div>
  `,
  styleUrl: './tpp-management.component.css'
})
export class TppManagementComponent implements OnInit {
  apps: TPPApp[] = [];
  isLoading = true;
  errorMessage = '';
  
  constructor(private tppService: TppService) {}
  
  ngOnInit(): void {
    this.loadApps();
  }

  loadApps(): void {
    this.tppService.getApps().subscribe({
      next: (d) => { this.apps = d || []; this.isLoading = false; },
      error: () => { this.errorMessage = 'Unable to load TPP applications.'; this.isLoading = false; }
    });
  }

  updateAppStatus(app: TPPApp, status: string): void {
    this.tppService.updateAppStatus(app.tppAppId, status).subscribe({
      next: () => { app.status = status as any; },
      error: () => { this.errorMessage = 'Failed to update app status.'; }
    });
  }

  parseScopes(scopeStr: string): string[] {
    try {
      return JSON.parse(scopeStr);
    } catch { return []; }
  }
}
