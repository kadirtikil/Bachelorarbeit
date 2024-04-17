import { ApplicationConfig, SecurityContext, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MARKED_OPTIONS, provideMarkdown } from 'ngx-markdown';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import * as material from '@angular/material'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideMarkdown(), provideAnimationsAsync(),  ]
};
