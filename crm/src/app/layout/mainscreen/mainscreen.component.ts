import { Component, OnInit, state, ViewChild, ViewEncapsulation } from '@angular/core';
import { AddContactService } from './mainscreen.service';
import { Router } from '@angular/router';
import { slideToRight } from '../../router.animations';
// import { Observable } from 'rxjs/Observable';
// import { DynamicComponentService } from '../../common/services/dynamiccomponent.service';
import { Contacts, AlertService, Control, UserControl } from '../../common/index';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss'],
  providers: [AddContactService, AlertService],
  animations: [slideToRight()],
  encapsulation: ViewEncapsulation.None
})

// tslint:disable-next-line:directive-class-suffix
export class MainscreenComponent implements OnInit {
  loading = false;
  model: any = {};
  contactId: string;
  controlList: UserControl[];
  organizationid: number = 1;
  private validators: any;
  private asyncValidators: any;
  constructor(private addcontactService: AddContactService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private alertService: AlertService) {
    // this.model = new Contacts();
    // this.model.lastContact = new Date();
    // this.model.nextStep = new Date();
    // this.model.lastContact = new Date();
    // this.model.webinarSignUpDate = new Date();
    // this.model.firstWebinarDate = new Date();
    // this.model.webinarDate = new Date();
    // this.model.firstAppointment = new Date();
    // this.model.saleDate = new Date();
    // this.model.saleValue = new Date();
  }
  ngOnInit() {
    this.getcontrolsbyorganization(this.organizationid);
  }



  getcontrolsbyorganization(organizationid: number) {
    this.addcontactService.getcontrolsbyorganization(organizationid)
      .then(datareturned => {
        if (datareturned.length === 0) {
          this.alertService.error('Controls are not saved!', false);
          return false;
        }
        else {
          this.controlList = datareturned;
          return true;
        }
      });
  }
  addcontact() {
    this.loading = true;
    const formData = new FormData();
    if (this.model) {
      formData.append('model', JSON.stringify(this.model));
    }
    console.log(formData);
    console.log(this.model);
    this.addcontactService.addcontact(this.model)
      .subscribe(
      data => {
        this.loading = false;
        this.alertService.success('Lead addded successfully!', false);
        this.model = new Contacts();
        this.model.lastContact = new Date();
        this.model.nextStep = new Date();
        this.model.lastContact = new Date();
        this.model.webinarSignUpDate = new Date();
        this.model.firstWebinarDate = new Date();
        this.model.webinarDate = new Date();
        this.model.firstAppointment = new Date();
        this.model.saleDate = new Date();
        this.model.saleValue = new Date();
      },
      error => {
        this.loading = false;
        this.alertService.error('Error while adding lead data!', false);
      });
  }
  checkduplicateCustomer(customerNumber: string) {
    this.contactId = localStorage.getItem('contactId');
    this.addcontactService.checkduplicateCustomer(customerNumber, this.contactId)
      .then(datareturned => {
        if (datareturned === 'customernumberexisted') {
          this.alertService.error('Customer number already exists!', false);
          return false;
        } else {
          return true;
        }
      });
  }

  getControlHtml(obj) {
    if (obj.controlHTML != null) {
      return this.sanitizer.bypassSecurityTrustHtml(obj.controlHTML);
    }
  }
}
