import { map } from 'rxjs/operators';

import { ReportData } from './../models/ReportData';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReportService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<ReportData[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
