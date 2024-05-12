import { HttpInterceptorFn } from '@angular/common/http';

export const unAuthorizedInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
