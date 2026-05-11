import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonitoringService } from '../../core/services/monitoring.service';
import { Incident } from '../../core/models/models';

@Component({
  selector: 'app-incident-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div><h1><i class="fas fa-exclamation-triangle"></i> Incident Management</h1></div>
        <button class="btn btn-primary" (click)="showForm = !showForm"><i class="fas fa-plus"></i> New Incident</button>
      </div>
      <div class="glass-card mb-20" *ngIf="showForm" style="max-width:560px">
        <h3 class="mb-16">Report New Incident</h3>
        <div class="form-group"><label>Category</label>
          <select class="form-control" [(ngModel)]="newIncident.category">
            <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>
          </select></div>
        <div class="form-group"><label>Description</label>
          <textarea class="form-control" [(ngModel)]="newIncident.description" rows="3"></textarea></div>
        <button class="btn btn-success" (click)="createIncident()"><i class="fas fa-check"></i> Submit</button>
      </div>
      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>
      <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
      <div *ngIf="!isLoading">
        <div *ngFor="let inc of incidents" class="glass-card mb-12">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-12">
              <div class="inc-icon" [ngStyle]="{ 'background': getCatColor(inc.category) }"><i [class]="getCatIcon(inc.category)"></i></div>
              <div><h4>{{ inc.description }}</h4><span class="text-sm text-muted">{{ inc.detectedDate | date:'medium' }}</span></div>
            </div>
            <div class="flex items-center gap-8">
              <span class="badge" [ngClass]="{'badge-open': inc.status === 'OPEN','badge-mitigated': inc.status === 'MITIGATED','badge-closed': inc.status === 'CLOSED'}">{{ inc.status }}</span>
              <span class="badge" [ngClass]="'badge-' + inc.category.toLowerCase()">{{ inc.category }}</span>
            </div>
          </div>
        </div>
        <div class="empty-state" *ngIf="incidents.length === 0 && !errorMessage"><i class="fas fa-check-circle"></i><p>No incidents</p></div>
      </div>
    </div>
  `,
  styleUrl: './incident-management.component.css'
})
export class IncidentManagementComponent implements OnInit {
  incidents: Incident[] = [];
  isLoading = true;
  showForm = false;
  errorMessage = '';
  categories = ['OUTAGE', 'LATENCY', 'SECURITY'];
  newIncident = { category: 'LATENCY', description: '' };

  constructor(private monitoringService: MonitoringService) {}

  ngOnInit(): void {
    this.monitoringService.getIncidents().subscribe({
      next: (d) => { this.incidents = d || []; this.isLoading = false; },
      error: () => { this.errorMessage = 'Unable to load incidents.'; this.isLoading = false; }
    });
  }

  createIncident(): void {
    this.monitoringService.createIncident(this.newIncident as any).subscribe({
      next: (d) => { this.incidents.unshift(d); this.showForm = false; this.newIncident.description = ''; },
      error: () => { this.errorMessage = 'Failed to create incident.'; }
    });
  }

  getCatIcon(cat: string): string {
    return cat === 'OUTAGE' ? 'fas fa-power-off' : cat === 'LATENCY' ? 'fas fa-clock' : 'fas fa-shield-alt';
  }
  getCatColor(cat: string): string {
    return cat === 'OUTAGE' ? 'linear-gradient(135deg,#ef4444,#dc2626)' : cat === 'LATENCY' ? 'linear-gradient(135deg,#f59e0b,#d97706)' : 'linear-gradient(135deg,#667eea,#764ba2)';
  }
}
