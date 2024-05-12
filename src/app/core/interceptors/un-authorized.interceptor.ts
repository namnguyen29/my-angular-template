import { HttpInterceptorFn, HttpResponse, HttpStatusCode } from '@angular/common/http';

import { catchError, of } from 'rxjs';

export const unAuthorizedInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpResponse<unknown>) => {
      if (error.status === HttpStatusCode.Unauthorized) {
        console.log('Show Unauthorzied modal');
      }
      return of(error);
    })
  );
};
