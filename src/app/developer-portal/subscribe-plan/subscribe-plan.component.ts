import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { APIPlan, TPPApp, TPPSubscription } from '../../core/models/models';
import { ProductService } from '../../core/services/product.service';

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

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  get selectedPlan(): APIPlan | undefined {
    return this.plans.find(plan => plan.planId === this.selectedPlanId!);
  }

  /* ---------------- LOAD DATA ---------------- */

  loadData(): void {
    this.isLoading = true;

    this.productService.getPlans().subscribe({
      next: p => this.plans = p || [],
      error: () => this.errorMessage = 'Failed to load plans'
    });

    this.productService.getApps().subscribe({
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
    if (!this.selectedAppId) return;

    this.productService
      .getSubscriptionsByApp(this.selectedAppId)
      .subscribe({
        next: d => this.subscriptions = d || [],
        error: () => this.subscriptions = []
      });
  }

  onAppChange(): void {
    this.loadSubscriptions();
  }

  /* ---------------- FILTER METHODS ---------------- */

  getApprovedApps(): TPPApp[] {
    return this.apps.filter(app => app.status === 'APPROVED');
  }

  getRejectedApps(): TPPApp[] {
    return this.apps.filter(app => app.status === 'REJECTED');
  }

  /* ---------------- DERIVED STATUS ---------------- */

  get selectedAppStatus(): string | null {
    if (!this.selectedAppId) return null;

    const app = this.apps.find(a => a.tppAppId === this.selectedAppId);
    return app ? app.status : null;
  }

  /* ---------------- SUBSCRIBE ---------------- */

  subscribe(): void {
    if (this.selectedPlanId == null || this.selectedAppId == null) {
      this.errorMessage = 'Please select both App and Plan';
      return;
    }

    // Get the selected plan and app objects
    const selectedPlan = this.plans.find(p => p.planId === this.selectedPlanId);
    const selectedApp = this.apps.find(a => a.tppAppId === this.selectedAppId);

    if (!selectedPlan || !selectedApp) {
      this.errorMessage = 'Invalid plan or app selection';
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';
    this.isSubscribing = true;

    // Calculate expiry date (1 year from now)
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    const payload = {
      apiPlan: selectedPlan,
      tppApp: selectedApp,
      subscribed_date: new Date().toISOString(),
      expiry_date: expiryDate.toISOString(),
      status: 'ACTIVE' as const
    } as Partial<TPPSubscription>;

    console.log('Sending subscription payload:', payload);

    this.productService.createSubscription(payload).subscribe({
      next: (response) => {
        console.log('Subscription created successfully:', response);
        this.successMessage = 'Subscription successful! Redirecting to apps...';
        this.isSubscribing = false;
        // Reload subscriptions to show the new subscription
        this.loadSubscriptions();
        // Redirect to app list after 2s so user sees the success message
        setTimeout(() => this.router.navigate(['/developer/apps']), 2000);
      },
      error: (err) => {
        console.error('Subscription error:', err);
        const serverMessage = err?.error?.message || err?.message || 'Subscription failed';
        this.errorMessage = serverMessage;
        this.isSubscribing = false;
      }
    });
  }
}

