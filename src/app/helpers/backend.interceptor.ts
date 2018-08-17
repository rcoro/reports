import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpEvent,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, dematerialize, delay } from 'rxjs/operators';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = {
      userName: 'admin',
      password: 'admin'
    };

    return of(null)
      .pipe(
        mergeMap(() => {
          if (request.url.endsWith('api/login') && request.method === 'POST') {
            if (
              request.body.userName === user.userName &&
              request.body.password === user.password
            ) {
              const body = {
                token: 'jwttoken'
              };

              return of(new HttpResponse({ status: 200, body }));
            }
          }

          return next.handle(request);
        })
      )
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export const MockBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: BackendInterceptor,
  multi: true
};
