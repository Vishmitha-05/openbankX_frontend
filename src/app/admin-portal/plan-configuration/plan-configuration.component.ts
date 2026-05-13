import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { APIPlan, APIProduct } from '../../core/models/models';

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
            Configure rate limits, quotas, SLA & subscription duration per API Product
          </p>
        </div>
        <button class="btn btn-primary" (click)="startCreate()" *ngIf="!showForm">
          <i class="fas fa-plus"></i> New Plan
        </button>
      </div>

      <div class="alert alert-success" *ngIf="successMessage">
        <i class="fas fa-check-circle"></i> {{ successMessage }}
      </div>
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <!-- CREATE / EDIT FORM -->
      <div class="glass-card mb-20" *ngIf="showForm" style="max-width:560px">
        <h3 class="mb-16">{{ editingPlan ? 'Edit Plan' : 'Create Plan' }}</h3>

        <!-- Product dropdown -->
        <div class="form-group">
          <label>API Product</label>
          <select class="form-control" [(ngModel)]="form.productId">
            <option [ngValue]="null" disabled>Choose an API product</option>
            <option *ngFor="let p of products" [ngValue]="p.productId">
              {{ p.name }} <span *ngIf="p.status !== 'ACTIVE'">({{ p.status }})</span>
            </option>
          </select>
          <small class="text-muted" *ngIf="products.length === 0">
            No API products available. Approve a TPP app first to auto-create one.
          </small>
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
          <input type="number" class="form-control" [(ngModel)]="form.rateLimitPerMin">
        </div>

        <div class="form-group">
          <label>Daily Quota</label>
          <input type="number" class="form-control" [(ngModel)]="form.dailyQuota">
        </div>

        <div class="form-group">
          <label>SLA (%)</label>
          <input type="number" class="form-control" [(ngModel)]="form.sla">
        </div>

        <div class="form-group">
          <label>Duration Value</label>
          <input type="number" class="form-control" [(ngModel)]="form.durationValue">
        </div>

        <div class="form-group">
          <label>Duration Unit</label>
          <select class="form-control" [(ngModel)]="form.durationUnit">
            <option value="DAYS">Days</option>
            <option value="MONTHS">Months</option>
            <option value="YEARS">Years</option>
          </select>
        </div>

        <div class="flex gap-8">
          <button class="btn btn-success" (click)="save()" [disabled]="isSaving">
            <span *ngIf="!isSaving"><i class="fas fa-check"></i> {{ editingPlan ? 'Update' : 'Create' }}</span>
            <span *ngIf="isSaving"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
          </button>
          <button class="btn btn-light" (click)="cancel()" [disabled]="isSaving">Cancel</button>
        </div>
      </div>

      <!-- LOADER -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
      </div>

      <!-- PLANS TABLE -->
      <div class="glass-card" *ngIf="!isLoading">
        <table class="data-table" *ngIf="plans.length > 0">
          <thead>
            <tr>
              <th>ID</th>
              <th>API Product</th>
              <th>Environment</th>
              <th>Rate/min</th>
              <th>Daily Quota</th>
              <th>SLA</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of plans">
              <td>#{{ p.planId }}</td>
              <td><strong>{{ resolveProductName(p) }}</strong></td>
              <td>
                <span class="badge" [ngClass]="p.environment === 'SANDBOX' ? 'badge-sandbox' : 'badge-info'">
                  {{ p.environment }}
                </span>
              </td>
              <td>{{ p.rateLimitPerMin }}</td>
              <td>{{ p.dailyQuota }}</td>
              <td>{{ p.sla }}%</td>
              <td>{{ p.durationValue }} {{ p.durationUnit }}</td>
              <td>
                <div class="flex gap-8">
                  <button class="btn btn-sm btn-secondary" (click)="edit(p)">
                    <i class="fas fa-pen"></i> Edit
                  </button>
                  <button class="btn btn-sm btn-danger" (click)="deletePlan(p)">
                    <i class="fas fa-trash"></i> Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="empty-state" *ngIf="plans.length === 0">
          <i class="fas fa-sliders-h"></i>
          <p>No plans configured yet. Click "New Plan" to create one.</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './plan-configuration.component.css'
})
export class PlanConfigurationComponent implements OnInit {

  plans: APIPlan[] = [];
  products: APIProduct[] = [];
  isLoading = true;
  isSaving = false;
  showForm = false;
  errorMessage = '';
  successMessage = '';

  editingPlan: APIPlan | null = null;

  form: any = this.blankForm();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadPlans();
  }

  private blankForm() {
    return {
      productId: null as number | null,
      environment: 'SANDBOX',
      rateLimitPerMin: 100,
      dailyQuota: 1000,
      sla: 99,
      durationValue: 1,
      durationUnit: 'MONTHS'
    };
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: d => this.products = d || [],
      error: () => {} // table-level error already covers it
    });
  }

  loadPlans(): void {
    this.isLoading = true;
    this.productService.getPlans().subscribe({
      next: d => { this.plans = d || []; this.isLoading = false; },
      error: () => { this.errorMessage = 'Unable to load plans'; this.isLoading = false; }
    });
  }

  resolveProductName(p: APIPlan): string {
    if (p.apiProduct?.name) return p.apiProduct.name;
    const match = this.products.find(prod => prod.productId === p.apiProduct?.productId);
    return match?.name || `#${p.apiProduct?.productId ?? '?'}`;
  }

  startCreate(): void {
    this.editingPlan = null;
    this.form = this.blankForm();
    if (this.products.length > 0 && this.form.productId == null) {
      this.form.productId = this.products[0].productId;
    }
    this.successMessage = '';
    this.errorMessage = '';
    this.showForm = true;
  }

  edit(plan: APIPlan): void {
    this.editingPlan = plan;
    this.form = {
      productId: plan.apiProduct?.productId ?? null,
      environment: plan.environment,
      rateLimitPerMin: plan.rateLimitPerMin,
      dailyQuota: plan.dailyQuota,
      sla: plan.sla,
      durationValue: plan.durationValue,
      durationUnit: plan.durationUnit
    };
    this.successMessage = '';
    this.errorMessage = '';
    this.showForm = true;
  }

  save(): void {
    this.errorMessage = '';
    if (this.form.productId == null) {
      this.errorMessage = 'Please choose an API product.';
      return;
    }

    this.isSaving = true;
    const payload = {
      environment: this.form.environment,
      rateLimitPerMin: this.form.rateLimitPerMin,
      dailyQuota: this.form.dailyQuota,
      sla: this.form.sla,
      durationValue: this.form.durationValue,
      durationUnit: this.form.durationUnit,
      apiProduct: { productId: this.form.productId }
    };

    const request$ = this.editingPlan
      ? this.productService.updatePlan(this.editingPlan.planId, payload as any)
      : this.productService.createPlan(payload as any);

    request$.subscribe({
      next: () => {
        const productName = this.products.find(p => p.productId === this.form.productId)?.name || 'product';
        this.successMessage = this.editingPlan
          ? `Plan updated for "${productName}".`
          : `Plan created for "${productName}".`;
        setTimeout(() => (this.successMessage = ''), 3500);
        this.isSaving = false;
        this.loadPlans();
        this.cancel();
      },
      error: err => {
        this.isSaving = false;
        this.errorMessage = err?.error?.message || (this.editingPlan ? 'Update failed' : 'Create failed');
      }
    });
  }

  cancel(): void {
    this.showForm = false;
    this.editingPlan = null;
    this.form = this.blankForm();
    this.errorMessage = '';
  }

  deletePlan(plan: APIPlan): void {
    if (!confirm(`Delete plan #${plan.planId}?`)) return;
    this.productService.deletePlan(plan.planId).subscribe({
      next: () => {
        this.successMessage = `Plan #${plan.planId} deleted.`;
        setTimeout(() => (this.successMessage = ''), 3500);
        this.loadPlans();
      },
      error: err => {
        this.errorMessage = err?.error?.message || 'Delete failed';
      }
    });
  }
}
