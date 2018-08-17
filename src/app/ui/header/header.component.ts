import { Component, OnInit, NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [AppRoutingModule]
})

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
