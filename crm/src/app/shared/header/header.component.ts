import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GetContactService } from '../.././layout/makecalls/makecalls.service';
import { Note } from '../.././common/index';
import { ISlimScrollOptions } from 'ng2-slimscroll';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit {

  pushRightClass: string = 'push-right';
  opts: ISlimScrollOptions;
  notificationContacts: Note[];
  showNotification: boolean;

  constructor(public router: Router, private getContactService: GetContactService) {
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
    this.getContactService.getNotificationList(0).then(datareturned => {

      this.notificationContacts = datareturned;
    });
  }
  ngOnInit() {

    this.opts = {
      position: 'right',
      barBackground: '#000000',

    }
  }
  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);


  }
  showNotificationDiv() {

    if (this.showNotification)
      this.showNotification = false;
    else
      this.showNotification = true;
  }
  hideNotificationDiv() {

    this.showNotification = false;
  }
  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }
}
