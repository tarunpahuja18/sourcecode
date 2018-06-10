import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { UserScreenCustomControls } from '../../common/index';


@Injectable()
export class CustomControlService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiURL = environment.apiUrl;
    private addCustomControlURL= this.apiURL + 'UserScreenCustomControls/saveall';
    private getCustomControlList = this.apiURL + 'UserScreenCustomControls/getorgcontrols';
    constructor(private http: Http) { }

    saveCustomControl(formData) {
        let opts = new RequestOptions();
        opts.headers = this.headers;
        return this.http.post(this.addCustomControlURL, formData, opts)
            .map((response: Response) => response.json());
    }
    getCustomControls(orgId: number): Promise<UserScreenCustomControls[]> {
        return this.http.get(this.getCustomControlList + '?orgId=' + orgId)
        .toPromise()
        .then(response => response.json() as UserScreenCustomControls[])
        .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for capturing and logging errors
        return Promise.reject(error.message || error);
    }
}
