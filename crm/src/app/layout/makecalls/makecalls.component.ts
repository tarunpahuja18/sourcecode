import { Component, OnInit, ViewEncapsulation , NgZone} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { DataTableParams, DataTableResource, DataTableRowEvent } from 'ngx-datatable-bootstrap4';
import { Observable } from 'rxjs/Observable';
import { Contacts, AlertService, Note, controlVisibility } from '../../common/index';
import { GetContactService } from './makecalls.service';
import { DynamicComponentService } from '../../common/services/dynamiccomponent.service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { debug } from 'util';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-makecalls',
  templateUrl: './makecalls.component.html',
  styleUrls: ['./makecalls.component.scss'],
  animations: [routerTransition()],
  providers: [GetContactService, AlertService],
  encapsulation: ViewEncapsulation.None

})
export class MakecallsComponent {
  loading = false;
  contactId: string;

  searchText: number;
  items: Contacts[];
  customerNotes: Note[];
  originaldatasource: Contacts[];
  itemCount = 10;
  itemResource = new DataTableResource<Contacts>(this.items);
  selectedCustomer = new Contacts();
  myNote = new Note();
  showNotesPopup = false;
  showOverlay = false;
   controlCollection:any;
   headerComponent:any;
  controlVisisbility= new controlVisibility();
 
  constructor(private router:Router , private getContactService: GetContactService, private alertService: AlertService) {
    this.getConfigurations();
     this.headerComponent = new HeaderComponent(router, getContactService);

    // this.alertService.success('this is a success alert');
  }
  search() {

    let ids = this.items.map(item => item.customerNumber);

    let filteredData = [];
    for (let entry of this.originaldatasource) {
      if (entry.customerNumber.toString().indexOf(this.searchText.toString()) > -1
        || (entry.salespersonName != undefined && entry.salespersonName.toString().indexOf(this.searchText.toString()) > -1)
        || (entry.phoneExt != undefined && entry.phoneExt.toString().indexOf(this.searchText.toString()) > -1)
        || (entry.primaryContact != undefined && entry.primaryContact.toString().indexOf(this.searchText.toString()) > -1)
        || (entry.position != undefined && entry.position.toString().indexOf(this.searchText.toString()) > -1)
        || (entry.contactEmail != undefined && entry.contactEmail.toString().indexOf(this.searchText.toString()) > -1)
        || (entry.companyURL != undefined && entry.companyURL.toString().indexOf(this.searchText.toString()) > -1)
        || (entry.contactLinkedInURL != undefined && entry.contactLinkedInURL.toString().indexOf(this.searchText.toString()) > -1)
        || (entry.organizationName != undefined && entry.organizationName.toString().indexOf(this.searchText.toString()) > -1)
        || (entry.originAdCode != undefined && entry.originAdCode.toString().indexOf(this.searchText.toString()) > -1)
        || (entry.campaignAdCode != undefined && entry.campaignAdCode.toString().indexOf(this.searchText.toString()) > -1)
        || (entry.industry != undefined && entry.industry.toString().indexOf(this.searchText.toString()) > -1)
      )
        filteredData.push(entry);
    }
    this.items = filteredData;


  };

  getConfigurations() {
    this.getContactService.getcontrols().then(datareturned => {
      this.controlCollection = datareturned;
   // from control collection object set the visibility object 
   for (let entry of this.controlCollection) 
{
 if( entry.controlName.toString().indexOf('customerNumber') > -1 && entry.isVisible==true)
 this.controlVisisbility.isCustomerNumberVisisble=true;
 else if( entry.controlName.toString().indexOf('salespersonName') > -1 && entry.isVisible==true)
 this.controlVisisbility.issalespersonNameVisisble=true;
 else if( entry.controlName.toString().indexOf('primaryPhone') > -1 && entry.isVisible==true)
 this.controlVisisbility.isprimaryPhoneVisisble=true;
 else if( entry.controlName.toString().indexOf('phoneExt') > -1 && entry.isVisible==true)
 this.controlVisisbility.isphoneExtVisisble=true;
 else if( entry.controlName.toString().indexOf('phoneTypedd') > -1 && entry.isVisible==true)
 this.controlVisisbility.isphoneTypeIDVisisble=true;
 else if( entry.controlName.toString().indexOf('isDecisionMakerIdentified') > -1 && entry.isVisible==true)
 this.controlVisisbility.isisDecisionMakerIdentifiedVisisble=true;
 else if( entry.controlName.toString().indexOf('primaryContact') > -1 && entry.isVisible==true)
 this.controlVisisbility.isprimaryContactVisisble=true;
 else if( entry.controlName.toString().indexOf('position') > -1 && entry.isVisible==true)
 this.controlVisisbility.ispositionVisisble=true;
 else if( entry.controlName.toString().indexOf('contactEmail') > -1 && entry.isVisible==true)
 this.controlVisisbility.iscontactEmailVisisble=true;
 else if( entry.controlName.toString().indexOf('contactLinkedInURL') > -1 && entry.isVisible==true)
 this.controlVisisbility.iscontactLinkedInURLVisisble=true;
 else if( entry.controlName.toString().indexOf('companyURL') > -1 && entry.isVisible==true)
 this.controlVisisbility.iscompanyURLVisisble=true;
 else if( entry.controlName.toString().indexOf('organizationName') > -1 && entry.isVisible==true)
 this.controlVisisbility.isorganizationNameVisisble=true;
 else if( entry.controlName.toString().indexOf('originAdCode') > -1 && entry.isVisible==true)
 this.controlVisisbility.isoriginAdCodeVisisble=true;
 else if( entry.controlName.toString().indexOf('campaignAdCode') > -1 && entry.isVisible==true)
 this.controlVisisbility.iscampaignAdCodeVisisble=true;
 else if( entry.controlName.toString().indexOf('Industry') > -1 && entry.isVisible==true)
 this.controlVisisbility.isindustryVisisble=true;
}
      this.getAllContacts();
    });
  }
  getAllContacts() {
    this.getContactService.getcontact().then(datareturned => {
      if (datareturned.length == 0) {
        this.alertService.error('No Contacts Found', false);
        return false;
      }
      else {
        // foreach row of contact 
        
        this.items = datareturned;
        this.itemCount = this.items.length;
        this.itemResource = new DataTableResource<Contacts>(this.items);
        this.originaldatasource = datareturned;
        this.alertService.success('No Contacts Found', false);
      }
    });
  }


  deleteFromObject(keyPart, objList) {
    for (var i = 0; i < objList.length; i++) {
      var obj = objList[i];
      for (var k in obj) {          // Loop through the object
        if (~k.indexOf(keyPart)) { // If the current key contains the string we're looking for
          delete obj[k];       // Delete obj[key];
        }
      }
    }
  }
  reloadItems(params: DataTableParams) {
    
    this.itemResource.query(params).then(items => this.items = items);
  }
  rowClick(rowEvent: DataTableRowEvent<Contacts>) {

    console.log('Clicked: ' + rowEvent.row.item.customerNumber);
  }
  rowDoubleClick(rowEvent: DataTableRowEvent<Contacts>) {
    console.log('Double clicked: ' + rowEvent.row.item.customerNumber);
  }
  rowTooltip(item: any) {
    return item.customerNumber;
  }
  ProcessDate(datetimestring: Date) {

    if (datetimestring) {
      var datetime = datetimestring.toString().replace('/Date(', '').replace('+0530)/', '');
      var dateObj = new Date(parseInt(datetime));
      return dateObj;
    }
  }
  OpenAddNotePopup(selectedCustomer: Contacts) {

    this.myNote.CustomerNumber = selectedCustomer.customerNumber;
    this.showNotesPopup = true;
    this.showOverlay = true;

    this.getContactService.GetNotesByCustomer(selectedCustomer.customerNumber)
      .then(
      data => {
        this.loading = false;
        this.customerNotes = data;

      },
      error => {
        this.loading = false;
        //  this.alertService.error('Error while adding note data!', false);
      });
  }
  HideNotesPopup() {

    this.showNotesPopup = false;
    this.showOverlay = false;
  }
  ClearNotesPopup(myNote: Note) {
    myNote.Description = "";
    myNote.IsReminderSet = false;
    myNote.ReminderDatetimeString = "";

  }
  ValidateNoteObject(myNote: Note) {
    if (myNote.Description == "" || myNote.Description == undefined || myNote.Description == null) {
      this.alertService.error('Error while adding Notes', false);
      return false;
    }
  }
 

  SaveCustomerNote(myNote: Note) {

    this.ValidateNoteObject(myNote);
    // save note 
    if (myNote.ReminderDatetimeString == "" || myNote.ReminderDatetimeString == null || myNote.ReminderDatetimeString == undefined)
      myNote.ReminderDatetime = new Date();
    else
      myNote.ReminderDatetime = new Date(myNote.ReminderDatetimeString);
    this.getContactService.SaveCustomerNote(myNote)
      .then(
      data => {
        this.loading = false;
        this.alertService.success('Note addded successfully!', false);
        this.ClearNotesPopup(myNote);
        //  this.getContactService.getNotificationList(0).then(datareturned => {      
        //   this.headerComponent.notifications= datareturned;
        //   });

       
        // refresh note list after save
        this.getContactService.GetNotesByCustomer(myNote.CustomerNumber)
          .then(
          data => {
            this.customerNotes = data;
            this.loading = false;
           

          },
          error => {
            this.loading = false;
            this.ClearNotesPopup(myNote);
            //  this.alertService.error('Error while adding note data!', false);
          });
      },
      error => {
        this.loading = false;
        this.ClearNotesPopup(myNote);
        this.alertService.error('Error while adding note data!', false);
      });
  }
}