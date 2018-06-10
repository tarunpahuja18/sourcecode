import { Injectable, NgZone  } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
import { Promise } from 'q';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { } from '@types/googlemaps';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }
    private apiURL = environment.apiUrl;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private authenticateServiceUrl = this.apiURL + 'user/authenticateuser/'; // 'http://localhost:62184/api/user/authenticateuser/'; 
    gotCoordinates: boolean;
    login(username: string, password: string) {
        let opts = new RequestOptions();
        opts.headers = this.headers;

        return this.http.post(this.authenticateServiceUrl, JSON.stringify({ email: username, username: username, password: password }), opts)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.accessToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}