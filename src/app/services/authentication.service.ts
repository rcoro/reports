import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../models/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(userName: string, password: string) {
    return this.http
      .post<any>(AppSettings.API_ENDPOINT, { userName, password })
      .pipe(
        map(user => {
          if (user && user.token) {
            localStorage.setItem(
              AppSettings.Keys.Token,
              JSON.stringify(user.token)
            );
          }
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem(AppSettings.Keys.Token);
  }
}
