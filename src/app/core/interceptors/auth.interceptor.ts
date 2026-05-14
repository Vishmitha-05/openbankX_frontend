import {
  HttpInterceptorFn,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, map, throwError } from 'rxjs';

/**
 * Auth interceptor.
 *
 *   - Attaches the stored Bearer token to every outbound request.
 *   - If the server still wraps responses as {data, accessToken, generatedAt}
 *     (older backend builds), unwrap so the body is the raw payload.
 *     Newer builds don't wrap, in which case this is a pass-through.
 *   - Does NOT auto-sign-out on 401/403 — the user stays in the app and
 *     only signs out when they click Sign out.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  const request = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(request).pipe(
    map(event => {
      if (!(event instanceof HttpResponse)) return event;

      const body: any = event.body;
      if (body && typeof body === 'object'
          && 'data' in body
          && 'accessToken' in body
          && 'generatedAt' in body) {
        return event.clone({ body: body.data });
      }
      return event;
    }),
    catchError((error: HttpErrorResponse) => throwError(() => error))
  );
};
