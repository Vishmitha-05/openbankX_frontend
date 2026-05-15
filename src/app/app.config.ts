import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';

/**
 * App configuration.
 *
 * `provideZoneChangeDetection` is REQUIRED on Angular 18+ for zone.js-based
 * change detection to fire on async work (HTTP responses, setTimeout,
 * Promises). Without it, the view does not re-render after a manual
 * `.subscribe()` callback until some other event (click, keypress) nudges
 * change detection — the classic "data loads but UI is stuck on Loading…
 * until I click somewhere" bug. `eventCoalescing` batches multiple events
 * in the same tick into one CD pass.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
};
