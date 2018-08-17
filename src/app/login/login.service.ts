import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(private http: Http) {}

  getTokenTest() {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .pipe(map((response: Response) => response.json()));
  }
}
