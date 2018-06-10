import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
 import { User } from '../signup/models/index';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private apiURL = environment.apiUrl;
  private authenticateUserUrl = this.apiURL + 'user/GetUser';  // URL to web api
  constructor(private http: Http) { }
  
  login(user: User) {
    let opts = new RequestOptions();
    opts.headers = this.headers;
     return this.http.post(this.authenticateUserUrl, user)
      .map((response: Response) => response.json())
  }

  
  // private helper methods

  
}