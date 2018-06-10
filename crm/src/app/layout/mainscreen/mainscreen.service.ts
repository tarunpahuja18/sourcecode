import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Contacts,UserControl } from '../../common/index';

@Injectable()
export class AddContactService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiURL = environment.apiUrl;
    private addContactURL = this.apiURL + 'Contacts/addContact';  // URL to web api
    private checkduplicateCustomerURL = this.apiURL + 'Contacts/checkDuplicateCustomer';  // URL to web api
    private getcontrolsURL = this.apiURL + 'UserScreenControls/GetScreenControlsByOrgId';  // URL to web api
    
   
    constructor(private http: Http) { }
    addcontact(formData) {
        
        let opts = new RequestOptions();
        opts.headers = this.headers;
        return this.http.post(this.addContactURL, formData, opts)
            .map((response: Response) => response.json());
    }
    checkduplicateCustomer(customernumber: string, contactid: string): Promise<string> {
        return this.http.get(this.checkduplicateCustomerURL + '?customernumber=' + customernumber + '&contactid=' + contactid)
            .toPromise()
            .then(response => response.json() as string)
            .catch(this.handleError);
    }

    getcontrolsbyorganization(organizationid:number): Promise<UserControl[]> {
        return this.http.get(this.getcontrolsURL + '?orgId=' + organizationid + '&screenId=1' )
            .toPromise()
            .then(response => response.json() as UserControl[])
            .catch(this.handleError);
    }

    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for capturing and logging errors
        return Promise.reject(error.message || error);
    }
}
