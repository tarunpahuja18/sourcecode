import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { DataTableParams, DataTableResource, DataTableRowEvent } from 'ngx-datatable-bootstrap4';
import { Observable } from 'rxjs/Observable';
import { Contacts, AlertService, Control, UserControl, UserScreenCustomControls } from '../../common/index';
import { GetControlService } from './assigncontrols.service';

@Component({
  selector: 'app-assigncontrols',
  templateUrl: './assigncontrols.component.html',
  styleUrls: ['./assigncontrols.component.scss'],
  providers: [GetControlService, AlertService],
  encapsulation: ViewEncapsulation.None
})
export class AssignControlsComponent implements OnInit {
  loading = false;
  controls: Control[];
  model: UserControl[];
  organizationid = 1;
  showDialog = false;
  customControls: UserScreenCustomControls[];
  showcustomControls= true;
  customControlButtontext = 'Add Controls';

  constructor(private getControlService: GetControlService, private alertService: AlertService) {
    this.getcontrols();
    this.getCustomControls(1);
  }
  ngOnInit() {
  }

  getcontrols() {
    this.getControlService.getcontrols().then(datareturned => {
      if (datareturned.length == 0) {
        this.alertService.error('No Controls Found', false);
        return false;
      }
      else {
        this.controls = datareturned;
      }
    })
  };

  isreadonly(isRequired:boolean):boolean  {
    // if(isRequired)
    // return false;
    // else return true;
    return true;
  };
  save() {
    
    this.loading = true;
    this.model = [];
    for (var i = 0; i < this.controls.length; i++) {
      this.model.push({
        roleId: 1,
        screenControlId: this.controls[i].screenControlId,
        sortOrder: this.controls[i].sortOrder,
        organizationId: this.organizationid,
        isRequired: this.controls[i].isRequired,
        isVisible: this.controls[i].isVisible,
        isActive: this.controls[i].isActive,
        createdBy: this.controls[i].createdBy,
        createdDate: new Date(),
        updatedBy: this.controls[i].updatedBy,
        updatedDate: this.controls[i].updatedDate,
        loggedInUserId: null,
        controlHTML:''
      });

    }
    this.getControlService.savecontrolconfiguration(this.model)
      .subscribe(
      data => {
        this.loading = false;
        this.alertService.success('Configuration saved successfully!', false);

      },
      error => {
        this.loading = false;
        this.alertService.error('Error while saving control!', false);
      });
  }

  getCustomControls(id: number) {
    this.getControlService.getCustomControls(id).then(datareturned => {
      if (datareturned.length === 0) {
        this.showcustomControls = true;
        this.customControlButtontext = 'Add Controls';
        return false;
      } else {
        this.showcustomControls = false;
        this.customControlButtontext = 'Edit Controls';
        this.customControls = datareturned;
      }
    });
  }

}
