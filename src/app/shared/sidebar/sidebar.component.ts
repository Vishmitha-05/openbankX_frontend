import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

/**
 * SidebarComponent — The main navigation sidebar.
 *
 * DIRECTIVES USED:
 *   *ngSwitch  → Show different menu items based on user role
 *   *ngFor     → Loop through menu items
 *   [ngClass]  → Highlight active menu item
 *   *ngIf      → Show/hide sidebar sections
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="sidebar" [ngClass]="{ 'collapsed': isCollapsed }">

      <!-- Logo -->
      <div class="sidebar-logo">
        <div class="logo-icon">
          <i class="fas fa-university"></i>
        </div>
        <span class="logo-text" *ngIf="!isCollapsed">OpenBankX</span>
        <button class="collapse-btn" (click)="toggleCollapse()">
          <i [ngClass]="isCollapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></i>
        </button>
      </div>

      <!-- User Info -->
      <div class="sidebar-user" *ngIf="!isCollapsed">
        <div class="user-avatar">
          <i class="fas fa-user"></i>
        </div>
        <div class="user-info">
          <div class="user-name">{{ session?.name }}</div>
          <div class="user-role">
            <span class="badge badge-info">{{ session?.role }}</span>
          </div>
        </div>
      </div>

      <div class="sidebar-divider"></div>

      <!-- Navigation Menu — changes based on role using *ngSwitch -->
      <nav class="sidebar-nav" [ngSwitch]="session?.role">

        <!-- TPP Developer Menu -->
        <ng-container *ngSwitchCase="'TPP'">
          <a *ngFor="let item of tppMenu"
             [routerLink]="item.route"
             routerLinkActive="active"
             class="nav-item"
             [title]="item.label">
            <i [class]="item.icon"></i>
            <span *ngIf="!isCollapsed">{{ item.label }}</span>
          </a>
        </ng-container>

        <!-- Customer Menu -->
        <ng-container *ngSwitchCase="'CUSTOMER'">
          <a *ngFor="let item of customerMenu"
             [routerLink]="item.route"
             routerLinkActive="active"
             class="nav-item"
             [title]="item.label">
            <i [class]="item.icon"></i>
            <span *ngIf="!isCollapsed">{{ item.label }}</span>
          </a>
        </ng-container>

        <!-- Operations Menu -->
        <ng-container *ngSwitchCase="'OPERATIONS'">
          <a *ngFor="let item of opsMenu"
             [routerLink]="item.route"
             routerLinkActive="active"
             class="nav-item"
             [title]="item.label">
            <i [class]="item.icon"></i>
            <span *ngIf="!isCollapsed">{{ item.label }}</span>
          </a>
        </ng-container>

        <!-- Admin Menu -->
        <ng-container *ngSwitchCase="'ADMIN'">
          <a *ngFor="let item of adminMenu"
             [routerLink]="item.route"
             routerLinkActive="active"
             class="nav-item"
             [title]="item.label">
            <i [class]="item.icon"></i>
            <span *ngIf="!isCollapsed">{{ item.label }}</span>
          </a>
        </ng-container>

      </nav>

      <!-- Logout -->
      <div class="sidebar-footer">
        <a class="nav-item logout" (click)="logout()" [title]="'Logout'">
          <i class="fas fa-sign-out-alt"></i>
          <span *ngIf="!isCollapsed">Logout</span>
        </a>
      </div>
    </aside>
  `,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  session: any = null;
  isCollapsed = false;

  // Menu items for each role — rendered with *ngFor
  tppMenu = [
    { label: 'Dashboard',      route: '/developer/dashboard',     icon: 'fas fa-tachometer-alt' },
    { label: 'Register TPP',   route: '/developer/tpp-register',  icon: 'fas fa-building' },
    { label: 'My Apps',        route: '/developer/apps',          icon: 'fas fa-cube' },
    { label: 'Register App',   route: '/developer/apps/new',      icon: 'fas fa-plus-circle' },
    { label: 'Subscribe Plan', route: '/developer/subscribe',     icon: 'fas fa-plug' },
    { label: 'Sandbox',        route: '/developer/sandbox',       icon: 'fas fa-flask' },
    { label: 'Analytics',      route: '/developer/analytics',     icon: 'fas fa-chart-bar' }
  ];

  customerMenu = [
    { label: 'Browse Apps',    route: '/customer/apps',              icon: 'fas fa-store' },
    { label: 'My Consents',    route: '/customer/consents',          icon: 'fas fa-handshake' },
    { label: 'My Accounts',    route: '/customer/accounts',          icon: 'fas fa-wallet' },
    { label: 'Payments',       route: '/customer/payment-initiate',  icon: 'fas fa-paper-plane' },
    { label: 'Funds Check',    route: '/customer/funds-check',       icon: 'fas fa-search-dollar' },
    { label: 'Review Consent', route: '/customer/consent-review',    icon: 'fas fa-clipboard-check' },
    { label: 'SCA Verify',     route: '/customer/sca',              icon: 'fas fa-shield-alt' }
  ];

  opsMenu = [
    { label: 'API Health',     route: '/operations/health',      icon: 'fas fa-heartbeat' },
    { label: 'Throttle Log',   route: '/operations/throttle-log', icon: 'fas fa-tachometer-alt' },
    { label: 'Incidents',      route: '/operations/incidents',   icon: 'fas fa-exclamation-triangle' },
    { label: 'Latency Charts', route: '/operations/latency',     icon: 'fas fa-chart-line' },
    { label: 'Consent Registry', route: '/compliance/consents',  icon: 'fas fa-file-contract' },
    { label: 'SCA Stats',      route: '/compliance/sca',         icon: 'fas fa-chart-pie' },
    { label: 'Audit Trail',    route: '/compliance/audit',       icon: 'fas fa-search' },
    { label: 'Reports',        route: '/compliance/reports',     icon: 'fas fa-file-alt' }
  ];

  adminMenu = [
    { label: 'API Products',   route: '/admin/products',    icon: 'fas fa-boxes' },
    { label: 'Plan Config',    route: '/admin/plans',       icon: 'fas fa-sliders-h' },
    { label: 'User Mgmt',      route: '/admin/users',       icon: 'fas fa-users' },
    { label: 'TPP Mgmt',       route: '/admin/tpp',         icon: 'fas fa-building' },
    { label: 'SCA Policy',     route: '/admin/sca-policy',  icon: 'fas fa-lock' }
  ];

  constructor(private authService: AuthService) {
    this.session = this.authService.getSession();
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  logout(): void {
    this.authService.logout();
    window.location.href = '/login';
  }
}
