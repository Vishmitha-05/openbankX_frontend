import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsentService } from '../../core/services/consent.service';
import { Consent } from '../../core/models/models';

@Component({
  selector: 'app-consent-registry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-file-contract"></i> Consent Registry</h1>
        <p class="page-subtitle">Search and review all consents across the platform</p></div>
      </div>
      <div class="glass-card mb-20">
        <div class="flex gap-12" style="flex-wrap:wrap">
          <div class="search-bar" style="flex:1;min-width:200px"><i class="fas fa-search"></i>
            <input type="text" class="form-control" [(ngModel)]="searchTerm" placeholder="Search by app name, user..." style="padding-left:40px">
          </div>
          <select class="form-control" [(ngModel)]="statusFilter" style="width:160px">
            <option value="">All Statuses</option>
            <option *ngFor="let s of statuses" [value]="s">{{ s }}</option>
          </select>
        </div>
      </div>
      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>
      <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
      <div class="glass-card" *ngIf="!isLoading">
        <table class="data-table">
          <thead><tr><th>ID</th><th>User</th><th>TPP App</th><th>Scopes</th><th>Created</th><th>Expires</th><th>Status</th></tr></thead>
          <tbody>
            <tr *ngFor="let c of filteredConsents">
              <td class="font-mono text-sm">#{{ c.consentId }}</td>
              <td>{{ c.user?.name || 'N/A' }}</td>
              <td>{{ c.tppApp?.appName || 'N/A' }}</td>
              <td><span *ngFor="let s of parseJson(c.scopeJSON)" class="scope-pill">{{ s }}</span></td>
              <td class="text-sm">{{ c.createdDate | date:'mediumDate' }}</td>
              <td class="text-sm">{{ c.expiryDate | date:'mediumDate' }}</td>
              <td><span class="badge" [ngClass]="'badge-' + c.status.toLowerCase()">{{ c.status }}</span></td>
            </tr>
          </tbody>
        </table>
        <div class="empty-state" *ngIf="filteredConsents.length === 0 && !errorMessage"><p>No matching consents</p></div>
      </div>
    </div>
  `,
  styleUrl: './consent-registry.component.css'
})
export class ConsentRegistryComponent implements OnInit {
  consents: Consent[] = [];
  searchTerm = '';
  statusFilter = '';
  isLoading = true;
  errorMessage = '';
  statuses = ['ACTIVE', 'REVOKED', 'EXPIRED'];

  constructor(private consentService: ConsentService) {}

  ngOnInit(): void {
    this.consentService.getConsents().subscribe({
      next: (d) => { this.consents = d || []; this.isLoading = false; },
      error: () => { this.errorMessage = 'Unable to load consents.'; this.isLoading = false; }
    });
  }

  get filteredConsents(): Consent[] {
    return this.consents.filter(c => {
      const matchSearch = !this.searchTerm ||
        (c.tppApp?.appName || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (c.user?.name || '').toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchStatus = !this.statusFilter || c.status === this.statusFilter;
      return matchSearch && matchStatus;
    });
  }

  parseJson(s: string): string[] { try { return JSON.parse(s); } catch { return []; } }
}
