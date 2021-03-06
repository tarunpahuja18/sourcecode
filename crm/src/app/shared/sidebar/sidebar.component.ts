﻿import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DynamicComponentService } from '../../common/services/dynamiccomponent.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // router: any;
  isActive: boolean = false;
  showMenu: string = '';
  pushRightClass: string = 'push-right';

  constructor(public router: Router, public dynamicComponentService: DynamicComponentService) {
      
      this.router.events.subscribe(val => {
          if (
              val instanceof NavigationEnd &&
              window.innerWidth <= 992 &&
              this.isToggled()
          ) {
              this.toggleSidebar();
          }
      });
  }

  eventCalled() {
      this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
      if (element === this.showMenu) {
          this.showMenu = '0';
      } else {
          this.showMenu = element;
      }
  }

  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
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

  routeToMainScreen(){
    this.dynamicComponentService.routeToMainScreen();
    this.router.navigate(['/mainscreen']);
  }
}