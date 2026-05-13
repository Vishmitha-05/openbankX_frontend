import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Login — public route
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },

  // Register — public route
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
  },

  // Forgot password — public route
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },

  // ========== Portal 1: Developer (TPP) ==========
  {
    path: 'developer',
    loadComponent: () => import('./developer-portal/developer-portal.component').then(m => m.DeveloperPortalComponent),
    canActivate: [authGuard],
    data: { role: 'TPP' },
    children: [
      { path: 'dashboard', loadComponent: () => import('./developer-portal/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'apps', loadComponent: () => import('./developer-portal/app-list/app-list.component').then(m => m.AppListComponent) },
      { path: 'apps/new', loadComponent: () => import('./developer-portal/app-registration/app-registration.component').then(m => m.AppRegistrationComponent) },
      { path: 'apps/:id/keys', loadComponent: () => import('./developer-portal/keys-upload/keys-upload.component').then(m => m.KeysUploadComponent) },
      { path: 'tpp-register', loadComponent: () => import('./developer-portal/tpp-registration/tpp-registration.component').then(m => m.TppRegistrationComponent) },
      { path: 'subscribe', loadComponent: () => import('./developer-portal/subscribe-plan/subscribe-plan.component').then(m => m.SubscriptionPlanComponent) },
      { path: 'sandbox', loadComponent: () => import('./developer-portal/sandbox-explorer/sandbox-explorer.component').then(m => m.SandboxExplorerComponent) },
      { path: 'analytics', loadComponent: () => import('./developer-portal/usage-analytics/usage-analytics.component').then(m => m.UsageAnalyticsComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // ========== Portal 2: Customer ==========
  {
    path: 'customer',
    loadComponent: () => import('./customer-portal/customer-portal.component').then(m => m.CustomerPortalComponent),
    canActivate: [authGuard],
    data: { role: 'CUSTOMER' },
    children: [
      { path: 'apps', loadComponent: () => import('./customer-portal/app-browser/app-browser.component').then(m => m.AppBrowserComponent) },
      { path: 'consents', loadComponent: () => import('./customer-portal/my-consents/my-consents.component').then(m => m.MyConsentsComponent) },
      { path: 'consents/:id', loadComponent: () => import('./customer-portal/consent-detail/consent-detail.component').then(m => m.ConsentDetailComponent) },
      // Review-consent functionality is now folded into the My Consents page.
      // Legacy path redirects so existing links don't 404.
      { path: 'consent-review', redirectTo: 'consents', pathMatch: 'full' },
      { path: 'sca', loadComponent: () => import('./customer-portal/sca-verify/sca-verify.component').then(m => m.ScaVerifyComponent) },
      { path: 'accounts', loadComponent: () => import('./customer-portal/my-accounts/my-accounts.component').then(m => m.MyAccountsComponent) },
      { path: 'payment-initiate', loadComponent: () => import('./customer-portal/initiate-payment/initiate-payment.component').then(m => m.InitiatePaymentComponent) },
      { path: 'funds-check', loadComponent: () => import('./customer-portal/funds-check/funds-check.component').then(m => m.FundsCheckComponent) },
      { path: '', redirectTo: 'apps', pathMatch: 'full' }
    ]
  },

  // ========== Portal 3: Operations ==========
  {
    path: 'operations',
    loadComponent: () => import('./operations-portal/operations-portal.component').then(m => m.OperationsPortalComponent),
    canActivate: [authGuard],
    data: { role: 'OPERATIONS' },
    children: [
      { path: 'health', loadComponent: () => import('./operations-portal/api-health/api-health.component').then(m => m.ApiHealthComponent) },
      { path: 'throttle-log', loadComponent: () => import('./operations-portal/throttle-log/throttle-log.component').then(m => m.ThrottleLogComponent) },
      { path: 'incidents', loadComponent: () => import('./operations-portal/incident-management/incident-management.component').then(m => m.IncidentManagementComponent) },
      { path: 'latency', loadComponent: () => import('./operations-portal/latency-charts/latency-charts.component').then(m => m.LatencyChartsComponent) },
      { path: '', redirectTo: 'health', pathMatch: 'full' }
    ]
  },

  // ========== Portal 4: Compliance (also accessible by OPERATIONS) ==========
  {
    path: 'compliance',
    loadComponent: () => import('./compliance-portal/compliance-portal.component').then(m => m.CompliancePortalComponent),
    canActivate: [authGuard],
    data: { role: 'OPERATIONS' },
    children: [
      { path: 'consents', loadComponent: () => import('./compliance-portal/consent-registry/consent-registry.component').then(m => m.ConsentRegistryComponent) },
      { path: 'sca', loadComponent: () => import('./compliance-portal/sca-statistics/sca-statistics.component').then(m => m.ScaStatisticsComponent) },
      { path: 'audit', loadComponent: () => import('./compliance-portal/audit-trail/audit-trail.component').then(m => m.AuditTrailComponent) },
      { path: 'reports', loadComponent: () => import('./compliance-portal/report-generation/report-generation.component').then(m => m.ReportGenerationComponent) },
      { path: '', redirectTo: 'consents', pathMatch: 'full' }
    ]
  },

  // ========== Portal 5: Admin ==========
  {
    path: 'admin',
    loadComponent: () => import('./admin-portal/admin-portal.component').then(m => m.AdminPortalComponent),
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
    children: [
      { path: 'products', loadComponent: () => import('./admin-portal/product-management/product-management.component').then(m => m.ProductManagementComponent) },
      { path: 'plans', loadComponent: () => import('./admin-portal/plan-configuration/plan-configuration.component').then(m => m.PlanConfigurationComponent) },
      { path: 'users', loadComponent: () => import('./admin-portal/user-management/user-management.component').then(m => m.UserManagementComponent) },
      { path: 'tpp', loadComponent: () => import('./admin-portal/tpp-management/tpp-management.component').then(m => m.TppManagementComponent) },
      { path: 'sca-policy', loadComponent: () => import('./admin-portal/sca-policy/sca-policy.component').then(m => m.ScaPolicyComponent) },
      { path: '', redirectTo: 'products', pathMatch: 'full' }
    ]
  },

  // ========== Notifications — accessible by all roles ==========
  {
    path: 'notifications',
    loadComponent: () => import('./shared/notification-list/notification-list.component').then(m => m.NotificationListComponent),
    canActivate: [authGuard],
    data: { role: '' }
  },

  // ========== Error Page ==========
  {
    path: 'error',
    loadComponent: () => import('./shared/error-page/error-page.component').then(m => m.ErrorPageComponent)
  },

  // Default redirects
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
