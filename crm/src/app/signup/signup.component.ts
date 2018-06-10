import { Component, OnInit } from '@angular/core';

import { AlertService } from '../common/index';
import { SignupService } from './signup.service';
import { User } from './models/User';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [SignupService, AlertService],
})

export class signupComponent implements OnInit {
  loading = false;  
  showDialog = false;
  model: any = {};
  constructor(private signupService: SignupService, private alertService: AlertService) { 
  }

  ngOnInit() {
  }
  save() {    
    const formData = new FormData();
    if (this.model) {
      formData.append('model', JSON.stringify(this.model));
    }
    console.log(formData);
    console.log(this.model);
    this.model.name = this.model.firstname +" "+this.model.lastname;
    this.loading = true;
    this.signupService.create(this.model)
      .subscribe(
       data => {
         this.loading = false;
         this.alertService.success('User saved successfully!', false);       
         this.model={};
       },
      error => {
        this.loading = false;
       this.alertService.error('Error while saving user!', false);
     });
  }

}
