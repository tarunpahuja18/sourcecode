import { Component, OnInit } from '@angular/core';

import { AlertService } from '../common/index';
import { OrganisationService } from './organisation.service';
import { Organisation } from '../common/model/organisation';

@Component({
  selector: 'app-login',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss'],
  providers: [ OrganisationService, AlertService],
})

export class OrganisationComponent implements OnInit {
  loading = false;  
  showDialog = false;
  model: any = {};
  constructor(private organisationService: OrganisationService, private alertService: AlertService) { 
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
    this.loading = true;
    this.organisationService.create(this.model)
      .subscribe(
       data => {
         this.loading = false;
         this.alertService.success('Organisation saved successfully!', false);       
         this.model={};
       },
      error => {
        this.loading = false;
       this.alertService.error('Error while saving Organisation!', false);
     });
  }

}
