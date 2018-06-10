import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Organisation } from '../common/model/index';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrganisationService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private apiURL = environment.apiUrl;
  private createOrganisationUrl = this.apiURL + 'Organisation';  // URL to web api
  constructor(private http: Http) { }

  create(organisation: Organisation) {
    let opts = new RequestOptions();
    opts.headers = this.headers;
    return this.http.post(this.createOrganisationUrl, organisation, opts)
      .map((response: Response) => response.json())
  }
  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.accessToken) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.accessToken });
      return new RequestOptions({ headers: headers });
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for capturing and logging errors
    return Promise.reject(error.message || error);
  }
}
