import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router'; // Add these

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // Fixes the "click home again" issue
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      // Ensures the page scrolls to top on every switch
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ), 
    provideClientHydration(withEventReplay())
  ]
};
