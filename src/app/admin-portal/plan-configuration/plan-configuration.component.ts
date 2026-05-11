import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { APIPlan } from '../../core/models/models';

@Component({
  selector: 'app-plan-configuration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-sliders-h"></i> Plan Configuration</h1>
          <p class="page-subtitle">
            Configure rate limits, quotas, SLA & subscription duration
          </p>
        </div>
        <button class="btn btn-primary" (click)="startCreate()">
          <i class="fas fa-plus"></i> New Plan
        </button>
      </div>

      <!-- CREATE / EDIT FORM -->
      <div class="glass-card mb-20" *ngIf="showForm" style="max-width:560px">
        <h3 class="mb-16">
          {{ editingPlan ? 'Edit Plan' : 'Create Plan' }}
        </h3>

        <div class="form-group">
          <label>Product ID</label>
          <input type="number" class="form-control"
                 [(ngModel)]="form.productId">
        </div>

        <div class="form-group">
          <label>Environment</label>
          <select class="form-control" [(ngModel)]="form.environment">
            <option value="SANDBOX">Sandbox</option>
            <option value="PRODUCTION">Production</option>
          </select>
        </div>

        <div class="form-group">
          <label>Rate Limit / min</label>
          <input type="number" class="form-control"
                 [(ngModel)]="form.rateLimitPerMin">
        </div>

        <div class="form-group">
          <label>Daily Quota</label>
          <input type="number" class="form-control"
                 [(ngModel)]="form.dailyQuota">
        </div>

        <div class="form-group">
          <label>SLA</label>
          <input type="number" class="form-control"
                 [(ngModel)]="form.sla">
        </div>

        <div class="form-group">
          <label>Duration Value</label>
          <input type="number" class="form-control"
                 [(ngModel)]="form.durationValue">
        </div>

        <div class="form-group">
          <label>Duration Unit</label>
          <select class="form-control"
                  [(ngModel)]="form.durationUnit">
            <option value="DAYS">Days</option>
            <option value="MONTHS">Months</option>
            <option value="YEARS">Years</option>
          </select>
        </div>

        <button class="btn btn-success" (click)="save()">
          {{ editingPlan ? 'Update' : 'Create' }}
        </button>
        <button class="btn btn-light ml-8" (click)="cancel()">Cancel</button>
      </div>

      <!-- LOADER -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
      </div>

      <!-- ERROR -->
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <!-- PLANS TABLE -->
      <div class="glass-card" *ngIf="!isLoading">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Environment</th>
              <th>Rate</th>
              <th>Quota</th>
              <th>SLA</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of plans">
              <td>#{{ p.planId }}</td>
              <td>{{ p.apiProduct?.productId }}</td>
              <td>{{ p.environment }}</td>
              <td>{{ p.rateLimitPerMin }}</td>
              <td>{{ p.dailyQuota }}</td>
              <td>{{ p.sla }}</td>
              <td>{{ p.durationValue }} {{ p.durationUnit }}</td>
              <td>
                <div class="flex gap-4">
                  <button class="btn btn-sm btn-secondary"
                          (click)="edit(p)">
                    <i class="fas fa-edit"></i> Edit
                  </button>
                  <button class="btn btn-sm btn-danger"
                          (click)="deletePlan(p)">
                    <i class="fas fa-trash"></i> Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="empty-state" *ngIf="plans.length === 0">
          <p>No plans configured</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './plan-configuration.component.css'
})
export class PlanConfigurationComponent implements OnInit {

  plans: APIPlan[] = [];
  isLoading = true;
  showForm = false;
  errorMessage = '';

  editingPlan: APIPlan | null = null;

  form: any = {
    productId: 1,
    environment: 'SANDBOX',
    rateLimitPerMin: 100,
    dailyQuota: 1000,
    sla: 500,
    durationValue: 1,
    durationUnit: 'MONTHS'
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans(): void {
    this.isLoading = true;
    this.productService.getPlans().subscribe({
      next: d => {
        this.plans = d || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load plans';
        this.isLoading = false;
      }
    });
  }

  startCreate(): void {
    this.editingPlan = null;
    this.resetForm();
    this.showForm = true;
  }

  edit(plan: APIPlan): void {
    this.editingPlan = plan;
    this.showForm = true;

    this.form = {
      productId: plan.apiProduct?.productId,
      environment: plan.environment,
      rateLimitPerMin: plan.rateLimitPerMin,
      dailyQuota: plan.dailyQuota,
      sla: plan.sla,
      durationValue: plan.durationValue,
      durationUnit: plan.durationUnit
    };
  }

  save(): void {
    const payload = {
      ...this.form,
      apiProduct: { productId: this.form.productId }
    };

    if (this.editingPlan) {
      this.productService
        .updatePlan(this.editingPlan.planId, payload)
        .subscribe({
          next: () => {
            this.loadPlans();
            this.cancel();
          },
          error: err => {
            this.errorMessage = err?.error?.message || 'Update failed';
          }
        });
    } else {
      this.productService.createPlan(payload).subscribe({
        next: () => {
          this.loadPlans();
          this.cancel();
        },
        error: err => {
          this.errorMessage = err?.error?.message || 'Duplicate plan not allowed';
        }
      });
    }
  }

  cancel(): void {
    this.showForm = false;
    this.editingPlan = null;
    this.resetForm();
  }

  resetForm(): void {
    this.form = {
      productId: 1,
      environment: 'SANDBOX',
      rateLimitPerMin: 100,
      dailyQuota: 1000,
      sla: 500,
      durationValue: 1,
      durationUnit: 'MONTHS'
    };
  }

  deletePlan(plan: APIPlan): void {
    if (confirm(`Are you sure you want to delete plan #${plan.planId}?`)) {
      this.productService.deletePlan(plan.planId).subscribe({
        next: () => {
          this.loadPlans();
        },
        error: err => {
          this.errorMessage = err?.error?.message || 'Delete failed';
        }
      });
    }
  }
}