import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Contacts, UploadResultModel } from '../../common/index';
import { debug } from 'util';


@Injectable()
export class UploadLeadsService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiURL = environment.apiUrl;
    private apiBaseUrl = environment.apiBaseUrl;
    private data: any;
    private uploadLeadsUrl = this.apiURL + 'Leads/uploadleads';  // URL to web api
    private downloadLeadsTemplateUrl = this.apiBaseUrl + 'DownloadLeadsSample/ContactUploadTemplate.xlsx';  // URL to web api
    constructor(private http: Http) { }

    uploadleads(formData): Promise<UploadResultModel[]> {
        let opts = new RequestOptions();
        opts.headers = new Headers({ 'enctype': 'multipart/form-data' });
        return this.http.post(this.uploadLeadsUrl, formData, opts)
            .toPromise()
            .then(response => response.json());
    }

    downloadFileTemplate(filepath: string) {
        window.open(this.apiBaseUrl + filepath, '_blank');
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for capturing and logging errors
        return Promise.reject(error.message || error);
    }
}