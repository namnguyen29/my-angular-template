import { InjectionToken, ValueProvider } from '@angular/core';
import { Environment } from '@app-shared/models';

export const ENV_CONFIG = new InjectionToken<Environment>('app.env.config');

export const getEnvironmentProvider = (value: Environment): ValueProvider => ({
  provide: ENV_CONFIG,
  useValue: value
});
