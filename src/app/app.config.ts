import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptor, unAuthorizedInterceptor } from '@app-core/interceptors';
import { getEnvironmentProvider } from '@app-core/configs';
import { environment } from '@app-environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor, unAuthorizedInterceptor])),
    getEnvironmentProvider(environment)
  ]
};
