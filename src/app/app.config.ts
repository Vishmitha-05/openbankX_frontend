import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';

/**
 * App configuration.
 *
 * Note: zone.js is loaded in main.ts before bootstrap, so Angular's default
 * change detection scheduler runs CD after every async event (HTTP responses,
 * setTimeout, Promise resolution, etc.). Components that use manual
 * .subscribe() therefore update the view immediately when the callback fires
 * — no double-click / "click somewhere else to refresh" bug.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
};
