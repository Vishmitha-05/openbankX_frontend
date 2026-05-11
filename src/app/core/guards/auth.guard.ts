import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

/**
 * Auth Guard — Protects routes based on login status and role.
 *
 * HOW IT WORKS:
 *   1. Before Angular navigates to a protected route, this function runs
 *   2. It checks if the user is logged in (token exists in localStorage)
 *   3. If a required role is specified in route data, it also checks the role
 *   4. If checks fail, user is redirected to /login
 *
 * USAGE IN ROUTES:
 *   { path: 'admin', canActivate: [authGuard], data: { role: 'ADMIN' } }
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check 1: Is the user logged in?
  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  // Check 2: Does the route require a specific role?
  const requiredRole = route.data?.['role'];
  if (requiredRole && authService.getRole() !== requiredRole) {
    // User is logged in but doesn't have the right role — redirect to login
    router.navigate(['/login']);
    return false;
  }

  // All checks passed — allow navigation
  return true;
};
