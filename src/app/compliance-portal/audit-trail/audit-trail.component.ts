import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuditService } from '../../core/services/audit.service';
import { AuditTrail } from '../../core/models/models';

@Component({
  selector: 'app-audit-trail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-search"></i> Audit Trail</h1>
        <p class="page-subtitle">Immutable record of all system actions</p></div>
      </div>
      <div class="glass-card mb-20">
        <div class="flex gap-12" style="flex-wrap:wrap">
          <div class="search-bar" style="flex:1;min-width:200px"><i class="fas fa-search"></i>
            <input type="text" class="form-control" [(ngModel)]="searchTerm" placeholder="Search by action, resource..." style="padding-left:40px">
          </div>
          <select class="form-control" [(ngModel)]="actorFilter" style="width:140px">
            <option value="">All Actors</option>
            <option *ngFor="let a of actorTypes" [value]="a">{{ a }}</option>
          </select>
        </div>
      </div>
      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>
      <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
      <div class="glass-card" *ngIf="!isLoading">
        <table class="data-table">
          <thead><tr><th>Timestamp</th><th>Actor</th><th>Action</th><th>Resource</th><th>Type</th></tr></thead>
          <tbody>
            <tr *ngFor="let trail of filteredTrails">
              <td class="text-sm">{{ trail.timestamp | date:'medium' }}</td>
              <td class="font-mono text-sm">{{ trail.actorId }}</td>
              <td><strong>{{ trail.action }}</strong></td>
              <td class="text-sm">{{ trail.resource }}</td>
              <td><span class="badge badge-info">{{ trail.actorType }}</span></td>
            </tr>
          </tbody>
        </table>
        <div class="empty-state" *ngIf="filteredTrails.length === 0 && !errorMessage"><p>No audit records found</p></div>
      </div>
    </div>
  `,
  styleUrl: './audit-trail.component.css'
})
export class AuditTrailComponent implements OnInit, OnDestroy {
  trails: AuditTrail[] = [];
  searchTerm = '';
  actorFilter = '';
  isLoading = true;
  errorMessage = '';
  actorTypes = ['USER', 'TPP', 'SYSTEM'];

  private pollHandle: any;

  constructor(private auditService: AuditService) {}

  ngOnInit(): void {
    this.fetch();
    // Live view: refresh every 8 s so new actions appear without a manual reload.
    this.pollHandle = setInterval(() => this.fetch(true), 8000);
  }

  ngOnDestroy(): void {
    if (this.pollHandle) clearInterval(this.pollHandle);
  }

  private fetch(silent: boolean = false): void {
    if (!silent) this.isLoading = true;
    this.auditService.getAuditTrails().subscribe({
      next: (d) => {
        // Newest first — the table feels alive when fresh rows land on top.
        this.trails = (d || []).sort((a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        this.isLoading = false;
      },
      error: () => {
        if (!silent) this.errorMessage = 'Unable to load audit trails.';
        this.isLoading = false;
      }
    });
  }

  get filteredTrails(): AuditTrail[] {
    return this.trails.filter(t => {
      const matchSearch = !this.searchTerm ||
        t.action.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        t.resource.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchActor = !this.actorFilter || t.actorType === this.actorFilter;
      return matchSearch && matchActor;
    });
  }
}
