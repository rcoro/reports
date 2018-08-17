import { Report2Module } from './report2/report2.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { ReportComponent } from './report/report.component';
import { MockBackendProvider } from './helpers/backend.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInteceptor } from './helpers/jwt.interceptor';
import { Report2Component } from './report2/report2.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ReportComponent,
    Report2Component
  ],
  imports: [BrowserModule, UiModule, HttpClientModule, Ng2SmartTableModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInteceptor, multi: true },
    MockBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
