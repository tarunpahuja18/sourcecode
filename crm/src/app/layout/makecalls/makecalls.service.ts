import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Contacts, Note, UserControl, Control } from '../../common/index';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GetContactService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiURL = environment.apiUrl;
    private getContactURL = this.apiURL + 'Contacts/all';  // URL to web api
    private getNotificationUrl = this.apiURL + 'Notes/GetTodayNotes';
    private addNoteURL = this.apiURL + 'Notes/addNote';  // URL to web api
    private getNoteURL = this.apiURL + 'Notes/GetNotesByCustomer';  // URL to web api
    //private getcontrolsURL = this.apiURL + 'UserScreenControls/GetControlsByOrgId';  // URL to web api
    private getControlURL = this.apiURL + 'ScreenControls/GetallcontrolsbyorganizationId';  // URL to web api
    constructor(private http: Http) { }

    getcontact(): Promise<Contacts[]> {
        return this.http.get(this.getContactURL)
            .toPromise()
            .then(response => response.json() as Contacts[])
            .catch(this.handleError);
    }


    SaveCustomerNote(myNote: Note): Promise<any> {
        let opts = new RequestOptions();
        opts.headers = this.headers;
        return this.http.post(this.addNoteURL, myNote, opts).toPromise()
            .then(response => response.json())
    }

    GetNotesByCustomer(id:number): Promise<Note[]> {
        return this.http.get(this.getNoteURL + '?customerNumber=' + id )
        .toPromise()
        .then(response => response.json() as string)
        .catch(this.handleError);

    }

    // getcontrolsbyorganization(organizationid:number): Promise<UserControl[]> {
    //     return this.http.get(this.getcontrolsURL + '?orgId=' + organizationid + '&screenId=1' )
    //         .toPromise()
    //         .then(response => response.json() as UserControl[])
    //         .catch(this.handleError);
    // }

    getcontrols(): Promise<Control[]> {
        return this.http.get(this.getControlURL )
        .toPromise()
        .then(response => response.json() as Control[])
        .catch(this.handleError);
    } 

    getNotificationList(id:number): Promise<Note[]> {
        return this.http.get(this.getNotificationUrl+'?orgId=' + id  )
        .toPromise()
        .then(response => response.json() as Note[])
        .catch(this.handleError);
    } 
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for capturing and logging errors
        return Promise.reject(error.message || error);
    }



}