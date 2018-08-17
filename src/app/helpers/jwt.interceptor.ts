import { AppSettings } from './../models/AppSettings';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class JwtInteceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = JSON.parse(localStorage.getItem(AppSettings.Keys.Token));

    if (token) {
      request = request.clone({
        setHeaders: {
          Authentication: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
