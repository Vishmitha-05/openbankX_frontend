import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';

/**
 * App Configuration
 *
 * - provideRouter: Sets up the Angular Router with our route definitions
 * - provideHttpClient: Enables HttpClient for API calls
 * - withInterceptors: Registers our auth interceptor to attach JWT tokens
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
};
