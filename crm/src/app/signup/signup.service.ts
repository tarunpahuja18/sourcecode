import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { User } from './models/index';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SignupService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private apiURL = environment.apiUrl;
  private createUserUrl = this.apiURL + 'user';  // URL to web api
  constructor(private http: Http) { }

  create(user: User) {
    let opts = new RequestOptions();
    opts.headers = this.headers;
    return this.http.post(this.createUserUrl, user, opts)
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
