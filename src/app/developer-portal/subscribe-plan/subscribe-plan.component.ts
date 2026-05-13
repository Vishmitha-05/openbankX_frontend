import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { APIPlan, TPPApp, TPPSubscription } from '../../core/models/models';
import { ProductService } from '../../core/services/product.service';
import { TppService } from '../../core/services/tpp.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-subscription-plan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subscribe-plan.component.html'
})
export class SubscriptionPlanComponent implements OnInit {

  plans: APIPlan[] = [];
  apps: TPPApp[] = [];
  subscriptions: TPPSubscription[] = [];

  selectedPlanId: number | null = null;
  selectedAppId: number | null = null;

  isLoading = true;
  isSubscribing = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private productService: ProductService,
    private tppService: TppService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  /* ---------------- Selected plan / app helpers ---------------- */

  get selectedPlan(): APIPlan | undefined {
    return this.plans.find(p => p.planId === this.selectedPlanId!);
  }

  get selectedAppName(): string {
    const app = this.apps.find(a => a.tppAppId === this.selectedAppId);
    return app ? app.appName : '';
  }

  /**
   * Plans relevant to the currently-selected app.
   *
   * When an admin approves a TPP app, the backend auto-publishes an API Product
   * with the same name as the app. So a plan belongs to this app if its
   * apiProduct.name matches the app name (case-insensitively).
   */
  get plansForSelectedApp(): APIPlan[] {
    if (!this.selectedAppId) return [];
    const app = this.apps.find(a => a.tppAppId === this.selectedAppId);
    if (!app) return [];
    const target = (app.appName || '').trim().toLowerCase();
    return this.plans.filter(p =>
      (p.apiProduct?.name || '').trim().toLowerCase() === target
    );
  }

  /* ---------------- Load ---------------- */

  loadData(): void {
    this.isLoading = true;

    this.productService.getPlans().subscribe({
      next: p => this.plans = p || [],
      error: () => this.errorMessage = 'Failed to load plans'
    });

    this.tppService.getMyApps(this.authService.getEmail()).subscribe({
      next: a => {
        this.apps = a || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load apps';
        this.isLoading = false;
      }
    });
  }

  loadSubscriptions(): void {
    if (!this.selectedAppId) {
      this.subscriptions = [];
      return;
    }

    this.productService.getSubscriptionsByApp(this.selectedAppId).subscribe({
      next: d => this.subscriptions = d || [],
      error: () => this.subscriptions = []
    });
  }

  onAppChange(): void {
    this.selectedPlanId = null;
    this.successMessage = '';
    this.errorMessage = '';
    this.loadSubscriptions();
  }

  /* ---------------- Filter helpers (used by template) ---------------- */

  getApprovedApps(): TPPApp[] {
    return this.apps.filter(app => app.status === 'APPROVED');
  }

  /* ---------------- Subscribe ---------------- */

  subscribe(): void {
    if (this.selectedPlanId == null || this.selectedAppId == null) {
      this.errorMessage = 'Please select both an app and a plan.';
      return;
    }

    const selectedPlan = this.plans.find(p => p.planId === this.selectedPlanId);
    const selectedApp = this.apps.find(a => a.tppAppId === this.selectedAppId);

    if (!selectedPlan || !selectedApp) {
      this.errorMessage = 'Invalid plan or app selection.';
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';
    this.isSubscribing = true;

    // Send only IDs — the backend re-fetches the plan/app, sets status=ACTIVE
    // and computes subscribedDate/expiryDate from the plan duration.
    const payload = {
      apiPlan: { planId: selectedPlan.planId },
      tppApp:  { tppAppId: selectedApp.tppAppId }
    } as Partial<TPPSubscription>;

    this.productService.createSubscription(payload).subscribe({
      next: (saved) => {
        this.isSubscribing = false;
        this.successMessage = `Subscribed "${selectedApp.appName}" to "${selectedPlan.apiProduct?.name || 'plan'}". Active until ${saved?.expiryDate ? new Date(saved.expiryDate).toLocaleDateString() : 'plan expiry'}.`;
        this.selectedPlanId = null;
        this.loadSubscriptions();
        setTimeout(() => this.router.navigate(['/developer/apps']), 2000);
      },
      error: (err) => {
        this.isSubscribing = false;
        const serverMsg = err?.error?.message || err?.error?.error;
        if (err?.status === 0) {
          this.errorMessage = 'Cannot reach the backend. Make sure it is running on port 8081.';
        } else if (err?.status === 401) {
          this.errorMessage = 'Your session has expired. Please sign in again.';
        } else if (serverMsg) {
          this.errorMessage = serverMsg;
        } else {
          this.errorMessage = `Subscription failed (HTTP ${err?.status || '?'})`;
        }
      }
    });
  }
}
