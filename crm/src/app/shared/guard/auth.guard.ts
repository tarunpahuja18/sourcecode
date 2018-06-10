import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private route: ActivatedRoute) { }

    canActivate() {
        return true;
        // if (localStorage.getItem('currentUser')) {
        //     return true;
        // }
        // else if (localStorage.getItem('selectedCity')) {
        //     return true;
        // }
        // let returnUrl = window.location.href;
        // if(returnUrl.toLowerCase().indexOf('eventmap') > 0) {
        //     return true;
        // }
        // else if(returnUrl.toLowerCase().indexOf('events') > 0){
        //     return true;
        // }
        // this.router.navigate(['/startpage']);
        // return false;
    }
}
