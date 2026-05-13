import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { APIProduct, APIPlan, TPPSubscription } from '../../core/models/models';

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-boxes"></i> API Products</h1>
          <p class="page-subtitle">Manage product catalog and pricing plans</p>
        </div>
        <button class="btn btn-primary" (click)="openCreate()" *ngIf="!showForm">
          <i class="fas fa-plus"></i> New Product
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
        <h3 class="mb-16">{{ editMode ? 'Edit API Product' : 'Create API Product' }}</h3>

        <div class="form-group">
          <label>Product Name</label>
          <input type="text" class="form-control"
                 [(ngModel)]="form.name"
                 [readonly]="editMode"
                 placeholder="e.g., Open Banking Core" />
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea class="form-control"
                    [(ngModel)]="form.description"
                    rows="2"
                    placeholder="Describe what this product offers"></textarea>
        </div>

        <div class="form-group">
          <label>Endpoints (JSON array)</label>
          <textarea class="form-control font-mono"
                    [(ngModel)]="form.endpointsJSON"
                    rows="2"
                    placeholder='["/accounts","/payments"]'></textarea>
        </div>

        <div class="flex gap-8">
          <button class="btn btn-success" (click)="save()" [disabled]="isSaving">
            <span *ngIf="!isSaving"><i class="fas fa-check"></i> {{ editMode ? 'Update' : 'Create' }}</span>
            <span *ngIf="isSaving"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
          </button>
          <button class="btn btn-light" (click)="cancel()" [disabled]="isSaving">Cancel</button>
        </div>
      </div>

      <!-- LOADING -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
      </div>

      <!-- PRODUCT LIST -->
      <div class="grid-2" *ngIf="!isLoading && products.length > 0">
        <div *ngFor="let p of products" class="glass-card">
          <div class="flex items-center justify-between">
            <h4>{{ p.name }}</h4>
            <span class="badge"
                  [ngClass]="p.status === 'ACTIVE' ? 'badge-active' : 'badge-deprecated'">
              {{ p.status }}
            </span>
          </div>

          <p class="text-sm text-muted mt-8">{{ p.description || 'No description' }}</p>

          <div class="mt-12">
            <span *ngFor="let ep of parseJson(p.endpointsJSON)" class="scope-pill">
              {{ ep }}
            </span>
            <span class="text-sm text-muted"
                  *ngIf="parseJson(p.endpointsJSON).length === 0">
              No endpoints
            </span>
          </div>

          <div class="mt-12" *ngIf="getPlansForProduct(p.productId).length > 0">
            <h5 class="text-sm" style="margin-bottom:6px; opacity:0.7">Associated Plans:</h5>
            <div *ngFor="let plan of getPlansForProduct(p.productId)"
                 style="display:flex; align-items:center; gap:8px; padding:4px 0; font-size:0.85rem;">
              <span class="badge"
                    [ngClass]="plan.environment === 'SANDBOX' ? 'badge-sandbox' : 'badge-info'">
                {{ plan.environment }}
              </span>
              <span>{{ plan.rateLimitPerMin }}/min</span>
              <span class="text-muted">·</span>
              <span>{{ plan.dailyQuota }}/day</span>
              <span class="text-muted">·</span>
              <span>{{ plan.durationValue }} {{ plan.durationUnit }}</span>
            </div>
          </div>
          <div class="mt-8 text-sm text-muted" *ngIf="getPlansForProduct(p.productId).length === 0">
            No plans configured
          </div>

          <!-- Subscribers per product -->
          <div class="mt-12" *ngIf="getSubscribersForProduct(p.productId).length > 0">
            <h5 class="text-sm" style="margin-bottom:6px; opacity:0.7">
              Subscribers
              <span class="badge badge-info" style="margin-left:6px">
                {{ getSubscribersForProduct(p.productId).length }}
              </span>
            </h5>
            <div *ngFor="let sub of getSubscribersForProduct(p.productId)"
                 style="display:flex; align-items:center; gap:8px; padding:4px 0; font-size:0.85rem;">
              <i class="fas fa-cube text-muted"></i>
              <strong>{{ sub.tppApp?.appName || '—' }}</strong>
              <span class="text-muted">·</span>
              <span class="badge"
                    [ngClass]="sub.apiPlan?.environment === 'SANDBOX' ? 'badge-sandbox' : 'badge-info'">
                {{ sub.apiPlan?.environment }}
              </span>
              <span class="badge"
                    [ngClass]="{
                      'badge-active': sub.status === 'ACTIVE',
                      'badge-revoked': sub.status === 'SUSPENDED',
                      'badge-expired': sub.status === 'CANCELLED'
                    }">{{ sub.status }}</span>
            </div>
          </div>
          <div class="mt-8 text-sm text-muted"
               *ngIf="getPlansForProduct(p.productId).length > 0 && getSubscribersForProduct(p.productId).length === 0">
            No subscribers yet
          </div>

          <div class="mt-16 flex gap-8">
            <button class="btn btn-sm btn-secondary" (click)="edit(p)">
              <i class="fas fa-pen"></i> Edit
            </button>
            <button class="btn btn-sm btn-danger" (click)="remove(p)">
              <i class="fas fa-trash"></i> Delete
            </button>
            <button class="btn btn-sm btn-light" (click)="reloadSubscribers()" title="Refresh subscriber list">
              <i class="fas fa-sync"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="empty-state" *ngIf="!isLoading && products.length === 0 && !errorMessage">
        <i class="fas fa-boxes"></i>
        <p>No products yet. Click "New Product" to create one.</p>
      </div>
    </div>
  `,
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent implements OnInit, OnDestroy {

  products: APIProduct[] = [];
  plans: APIPlan[] = [];
  subscriptions: TPPSubscription[] = [];
  isLoading = true;
  isSaving = false;
  showForm = false;
  editMode = false;
  errorMessage = '';
  successMessage = '';

  private refreshTimer: any;

  form: any = this.blankForm();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadPlans();
    this.loadSubscriptions();
    // Live-poll subscribers every 15s so admins see new subscriptions appear.
    this.refreshTimer = setInterval(() => this.loadSubscriptions(), 15000);
  }

  ngOnDestroy(): void {
    if (this.refreshTimer) clearInterval(this.refreshTimer);
  }

  private blankForm() {
    return {
      productId: null,
      name: '',
      description: '',
      endpointsJSON: '',
      status: 'ACTIVE'
    };
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (d) => { this.products = d || []; this.isLoading = false; },
      error: () => { this.errorMessage = 'Unable to load products.'; this.isLoading = false; }
    });
  }

  loadPlans(): void {
    this.productService.getPlans().subscribe({
      next: (d) => this.plans = d || [],
      error: () => {}
    });
  }

  loadSubscriptions(): void {
    this.productService.getSubscriptions().subscribe({
      next: (d) => this.subscriptions = d || [],
      error: () => {}
    });
  }

  reloadSubscribers(): void {
    this.loadSubscriptions();
  }

  getPlansForProduct(productId: number): APIPlan[] {
    return this.plans.filter(p => p.apiProduct?.productId === productId);
  }

  getSubscribersForProduct(productId: number): TPPSubscription[] {
    return this.subscriptions.filter(s =>
      s.apiPlan?.apiProduct?.productId === productId
    );
  }

  openCreate(): void {
    this.editMode = false;
    this.form = this.blankForm();
    this.showForm = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  edit(p: APIProduct): void {
    this.editMode = true;
    this.form = {
      productId: p.productId,
      name: p.name || '',
      description: p.description || '',
      endpointsJSON: p.endpointsJSON || '[]',
      status: p.status || 'ACTIVE'
    };
    this.showForm = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  save(): void {
    if (!this.form.name) {
      this.errorMessage = 'Product name is required.';
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';

    const req = this.editMode
      ? this.productService.updateProduct(this.form.productId, this.form)
      : this.productService.createProduct(this.form);

    req.subscribe({
      next: (saved) => {
        if (this.editMode) {
          const idx = this.products.findIndex(x => x.productId === saved.productId);
          if (idx > -1) this.products[idx] = saved;
        } else {
          this.products.unshift(saved);
        }
        this.successMessage = `Product "${saved.name}" saved.`;
        setTimeout(() => (this.successMessage = ''), 3500);
        this.isSaving = false;
        this.showForm = false;
        this.form = this.blankForm();
      },
      error: () => {
        this.isSaving = false;
        this.errorMessage = this.editMode ? 'Failed to update product.' : 'Failed to create product.';
      }
    });
  }

  remove(p: APIProduct): void {
    if (!confirm(`Delete product "${p.name}"?`)) return;

    this.productService.deleteProduct(p.productId).subscribe({
      next: () => {
        this.products = this.products.filter(x => x.productId !== p.productId);
        this.successMessage = `Product "${p.name}" deleted.`;
        setTimeout(() => (this.successMessage = ''), 3500);
      },
      error: () => {
        this.errorMessage = 'Failed to delete product.';
      }
    });
  }

  cancel(): void {
    this.showForm = false;
    this.form = this.blankForm();
    this.errorMessage = '';
  }

  parseJson(s: string): string[] {
    try {
      const parsed = JSON.parse(s);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
}
