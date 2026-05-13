import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';

/**
 * App configuration.
 *
 * - provideZonelessChangeDetection(): the project runs without zone.js, so
 *   we explicitly turn on Angular's built-in zoneless scheduler. It re-runs
 *   change detection after async signals / observables emit and after every
 *   DOM event, which means HTTP `subscribe` callbacks (funds-check result,
 *   payment receipt, etc.) update the view automatically — no more "click
 *   somewhere else to see the result" bug.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
};
