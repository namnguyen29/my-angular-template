import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { switchMap, take } from 'rxjs';

import { AuthService } from '@app-shared/services';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  return authService.accessToken.pipe(
    take(1),
    switchMap((token) => {
      if (!token) {
        return next(req);
      }

      const authRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next(authRequest);
    })
  );
};
