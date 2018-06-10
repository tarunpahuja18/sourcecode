import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AlertService } from '../common/index';
import { User } from '../signup/models/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService, AlertService],
})

export class LoginComponent implements OnInit {
  loading = false;  
  showDialog = false;
  model: any = {};
  constructor(private loginService: LoginService, private alertService: AlertService,private router: Router) { 
  }
  ngOnInit() {
  }

  
  login() {    
    const formData = new FormData();
    if (this.model) {
      formData.append('model', JSON.stringify(this.model));
    }
    console.log(formData);
    console.log(this.model);    
    this.loading = true;
    this.loginService.login(this.model)
      .subscribe(
       data => {
         this.loading = false;
         localStorage.setItem("currentUser", data);
         this.router.navigate(['/dashboard']);
       },
      error => {
        this.loading = false;
        this.alertService.error('Error while Signing In User!', false);
     });
  }
}
