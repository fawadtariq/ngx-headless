import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideFormkitConfig } from '@ngx-headless/formkit';
import {config} from '../../ngx-headless-formkit.config';
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideFormkitConfig(config),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)]
};
