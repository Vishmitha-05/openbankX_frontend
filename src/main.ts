// zone.js is now loaded via the `polyfills` config in angular.json, so we
// don't need an explicit import here.
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
