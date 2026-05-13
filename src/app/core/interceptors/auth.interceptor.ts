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
 * Outbound:
 *   - Attaches "Authorization: Bearer <token>" if we have a stored token.
 *
 * Inbound:
 *   - Reads "X-Auth-Token" header and refreshes localStorage.
 *   - Unwraps the {data, accessToken, generatedAt} envelope so existing
 *     services keep typing as `Foo[]` etc.
 *   - 401 / 403 errors are *not* used to auto-logout. The user stays in
 *     the app and only signs out when they click the Sign out menu item.
 *     The failed call's error is still propagated so the calling component
 *     can react.
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

      // 1) Refresh the locally-stored token whenever the server sends one.
      const headerToken = event.headers?.get('X-Auth-Token');
      if (headerToken) authService.refreshToken(headerToken);

      // 2) Unwrap the {data, accessToken, generatedAt} envelope; the embedded
      //    token is another refresh source.
      const body: any = event.body;
      if (body && typeof body === 'object'
          && 'data' in body
          && 'accessToken' in body
          && 'generatedAt' in body) {
        if (typeof body.accessToken === 'string' && body.accessToken) {
          authService.refreshToken(body.accessToken);
        }
        return event.clone({ body: body.data });
      }

      return event;
    }),
    catchError((error: HttpErrorResponse) => throwError(() => error))
  );
};
