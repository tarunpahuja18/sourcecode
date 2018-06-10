import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Contacts } from '../../common/index';

@Injectable()
export class DashboardService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiURL = environment.apiUrl;
    private data: any;
    // private uploadLeadsUrl = this.apiURL + 'Leads/uploadleads';  // URL to web api
    constructor(private http: Http) { }

}