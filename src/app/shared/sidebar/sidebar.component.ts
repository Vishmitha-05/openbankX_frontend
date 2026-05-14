import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

/**
 * SidebarComponent — The main navigation sidebar.
 *
 * The sidebar uses the global `--sidebar-width` CSS variable for its width.
 * When the user toggles collapse (or the window is narrower than 992px),
 * we add `sidebar-collapsed` to <body>; CSS rules in styles.css flip the
 * variable to `--sidebar-width-collapsed`, and every `.portal-main` in the
 * app re-aligns its left margin because they all read the same variable.
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit, OnDestroy {

  session: any = null;
  isCollapsed = false;

  private readonly COLLAPSE_BREAKPOINT = 992;

  tppMenu = [
    { label: 'Dashboard',      route: '/developer/dashboard',     icon: 'fas fa-tachometer-alt' },
    { label: 'Register TPP',   route: '/developer/tpp-register',  icon: 'fas fa-building' },
    { label: 'My Apps',        route: '/developer/apps',          icon: 'fas fa-cube' },
    { label: 'Register App',   route: '/developer/apps/new',      icon: 'fas fa-plus-circle' },
    { label: 'Subscribe Plan', route: '/developer/subscribe',     icon: 'fas fa-plug' },
    { label: 'Analytics',      route: '/developer/analytics',     icon: 'fas fa-chart-bar' }
  ];

  customerMenu = [
    { label: 'My Apps',        route: '/customer/apps',              icon: 'fas fa-store' },
    { label: 'My Consents',    route: '/customer/consents',          icon: 'fas fa-handshake' },
    { label: 'My Accounts',    route: '/customer/accounts',          icon: 'fas fa-wallet' },
    { label: 'Payments',       route: '/customer/payment-initiate',  icon: 'fas fa-paper-plane' },
    { label: 'Funds Check',    route: '/customer/funds-check',       icon: 'fas fa-search-dollar' },
    { label: 'SCA Verify',     route: '/customer/sca',               icon: 'fas fa-shield-alt' }
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
    { label: 'TPP Mgmt',       route: '/admin/tpp',         icon: 'fas fa-building' }
  ];

  constructor(private authService: AuthService) {
    this.session = this.authService.getSession();
  }

  ngOnInit(): void {
    this.applyResponsiveCollapse(window.innerWidth);
  }

  ngOnDestroy(): void {
    document.body.classList.remove('sidebar-collapsed');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const w = (event.target as Window).innerWidth;
    this.applyResponsiveCollapse(w);
  }

  /**
   * Below the breakpoint we force-collapse the sidebar so the page never
   * has a 240px wall taking half the screen on a small window. Above it we
   * respect whatever the user last clicked.
   */
  private applyResponsiveCollapse(viewportWidth: number): void {
    if (viewportWidth < this.COLLAPSE_BREAKPOINT) {
      this.setCollapsed(true);
    }
  }

  toggleCollapse(): void {
    this.setCollapsed(!this.isCollapsed);
  }

  private setCollapsed(collapsed: boolean): void {
    this.isCollapsed = collapsed;
    document.body.classList.toggle('sidebar-collapsed', collapsed);
  }

  logout(): void {
    this.authService.logout();
    window.location.href = '/login';
  }
}
