import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DynamicComponentService {
    private _listners = new Subject<any>();

    listen(): Observable<any> {
        return this._listners.asObservable();
     }

     routeToMainScreen() {
        this._listners.next("MainscreenDynamicComponent");
     }
}