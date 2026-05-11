import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, tap, throwError } from 'rxjs';

/**
 * Auth Interceptor — Attaches JWT Bearer token and handles token refresh.
 *
 * ON REQUEST:  Attaches the stored JWT as "Authorization: Bearer <token>"
 * ON RESPONSE: Reads "X-Auth-Token" header (fresh token from backend)
 *              and updates localStorage so the next request uses the new token.
 *
 * This ensures every API operation generates a visible token exchange
 * in the browser's Network tab (Developer Tools).
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();

  let request = req;

  // If we have a token, attach it as a Bearer token
  if (token) {
    request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(request).pipe(
    // ✅ Capture the refreshed token from every response
    tap((event: any) => {
      if (event?.headers) {
        const freshToken = event.headers.get('X-Auth-Token');
        if (freshToken) {
          // Update the stored session with the fresh token
          authService.refreshToken(freshToken);
        }
      }
    }),
    catchError((error: HttpErrorResponse) => {
      // If we get a 401 (expired/invalid token), clear session and redirect to login
      if (error.status === 401) {
        authService.logout();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};

