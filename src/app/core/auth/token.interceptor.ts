// src/app/core/auth/token.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token'); // ou pegar do AuthService se preferir

  const cloned = req.clone({
    setHeaders: token ? { Authorization: `Bearer ${token}` } : {}
  });

  return next(cloned);
};
