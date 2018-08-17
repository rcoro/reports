import { ReportData } from './../models/ReportData';
import { first } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { PagerService } from './pager.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [ReportService, PagerService]
})
export class ReportComponent implements OnInit {
  data: ReportData[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private reportService: ReportService,
    private pagerService: PagerService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.reportService
      .getData()
      .pipe(first())
      .subscribe(data => {
        this.data = data;
        this.setPage(1);
      });
  }

  setPage(pageNumber: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.data.length, pageNumber);

    // get current page of items
    this.pagedItems = this.data.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
}
