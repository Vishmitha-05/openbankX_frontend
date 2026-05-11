import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { APIProduct, APIPlan } from '../../core/models/models';
 
@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-boxes"></i> API Products</h1>
        </div>
        <button class="btn btn-primary" (click)="openCreate()">
          <i class="fas fa-plus"></i> New Product
        </button>
      </div>
 
      <!-- CREATE / EDIT FORM -->
      <div class="glass-card mb-20" *ngIf="showForm" style="max-width:560px">
        <h3 class="mb-16">
          {{ editMode ? 'Edit API Product' : 'Create API Product' }}
        </h3>
 
        <div class="form-group">
          <label>Product Name</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.name"
            [readonly]="editMode"
            placeholder="e.g., Open Banking Core"
          />
        </div>
 
        <div class="form-group">
          <label>Description</label>
          <textarea
            class="form-control"
            [(ngModel)]="newProduct.description"
            rows="2"
          ></textarea>
        </div>
 
        <div class="form-group">
          <label>Endpoints (JSON array)</label>
          <textarea
            class="form-control font-mono"
            [(ngModel)]="newProduct.endpointsJSON"
            rows="2"
            placeholder='["/accounts","/payments"]'
          ></textarea>
        </div>
 
        <button class="btn btn-success" (click)="save()">
          <i class="fas fa-check"></i>
          {{ editMode ? 'Update' : 'Create' }}
        </button>
 
        <button class="btn btn-light ml-8" (click)="cancel()">
          Cancel
        </button>
      </div>
 
      <!-- LOADING -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
      </div>
 
      <!-- ERROR -->
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>
 
      <!-- PRODUCT LIST -->
      <div class="grid-2" *ngIf="!isLoading">
        <div *ngFor="let p of products" class="glass-card">
          <div class="flex items-center justify-between">
            <h4>{{ p.name }}</h4>
            <span
              class="badge"
              [ngClass]="p.status === 'ACTIVE' ? 'badge-active' : 'badge-deprecated'"
            >
              {{ p.status }}
            </span>
          </div>
 
          <p class="text-sm text-muted mt-8">{{ p.description }}</p>
 
          <div class="mt-12">
            <span *ngFor="let ep of parseJson(p.endpointsJSON)" class="scope-pill">
              {{ ep }}
            </span>
          </div>
 
          <!-- ✅ ASSOCIATED PLANS -->
          <div class="mt-12" *ngIf="getPlansForProduct(p.productId).length > 0">
            <h5 class="text-sm" style="margin-bottom:6px; opacity:0.7">Associated Plans:</h5>
            <div *ngFor="let plan of getPlansForProduct(p.productId)" 
                 style="display:flex; align-items:center; gap:8px; padding:4px 0; font-size:0.85rem;">
              <span class="badge"
                    [ngClass]="plan.environment === 'SANDBOX' ? 'badge-sandbox' : 'badge-production'">
                {{ plan.environment }}
              </span>
              <span>Rate: {{ plan.rateLimitPerMin }}/min</span>
              <span>| Quota: {{ plan.dailyQuota }}/day</span>
              <span>| {{ plan.durationValue }} {{ plan.durationUnit }}</span>
            </div>
          </div>
          <div class="mt-8 text-sm text-muted" *ngIf="getPlansForProduct(p.productId).length === 0">
            No plans configured
          </div>

          <!-- ✅ EDIT & DELETE -->
          <div class="mt-12 flex gap-8">
            <button class="btn btn-sm btn-secondary" (click)="edit(p)">
              Edit
            </button>
            <button
              class="btn btn-sm btn-danger"
              (click)="remove(p.productId)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
 
      <div
        class="empty-state"
        *ngIf="!isLoading && products.length === 0 && !errorMessage"
      >
        <p>No products found</p>
      </div>
    </div>
  `,
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent implements OnInit {
 
  products: APIProduct[] = [];
  plans: APIPlan[] = [];
  isLoading = true;
  showForm = false;
  editMode = false;
  errorMessage = '';
 
  newProduct: any = {
    productId: null,
    name: '',
    description: '',
    endpointsJSON: '',
    status: 'ACTIVE'
  };
 
  constructor(private productService: ProductService) {}
 
  ngOnInit(): void {
    this.loadProducts();
    this.loadPlans();
  }
 
  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (d) => {
        this.products = d || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load products.';
        this.isLoading = false;
      }
    });
  }
 
  loadPlans(): void {
    this.productService.getPlans().subscribe({
      next: (d) => this.plans = d || [],
      error: () => {} // silent — plans are supplementary
    });
  }

  getPlansForProduct(productId: number): APIPlan[] {
    return this.plans.filter(p => p.apiProduct?.productId === productId);
  }
 
  openCreate(): void {
    this.resetForm();
    this.showForm = true;
  }
 
  edit(p: APIProduct): void {
    this.newProduct = { ...p };
    this.editMode = true;
    this.showForm = true;
  }
 
  save(): void {
    if (this.editMode) {
      this.productService
        .updateProduct(this.newProduct.productId, this.newProduct)
        .subscribe({
          next: (updated) => {
            const i = this.products.findIndex(
              x => x.productId === updated.productId
            );
            this.products[i] = updated;
            this.resetForm();
          },
          error: () => {
            this.errorMessage = 'Failed to update product.';
          }
        });
    } else {
      this.productService.createProduct(this.newProduct).subscribe({
        next: (created) => {
          this.products.unshift(created);
          this.resetForm();
        },
        error: () => {
          this.errorMessage = 'Failed to create product.';
        }
      });
    }
  }
 
  remove(id: number): void {
    if (!confirm('Are you sure you want to delete this product?')) return;
 
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.productId !== id);
      },
      error: () => {
        this.errorMessage = 'Failed to delete product.';
      }
    });
  }
 
  cancel(): void {
    this.resetForm();
  }
 
  resetForm(): void {
    this.newProduct = {
      productId: null,
      name: '',
      description: '',
      endpointsJSON: '',
      status: 'ACTIVE'
    };
    this.showForm = false;
    this.editMode = false;
  }
 
  parseJson(s: string): string[] {
    try {
      return JSON.parse(s);
    } catch {
      return [];
    }
  }
}