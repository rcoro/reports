import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService
      .login('admin', 'admin')
      .pipe(first())
      .subscribe(data => console.log(data));
  }
}
