import { Component, OnInit, ViewEncapsulation, NgModule, Input, ComponentFactory, ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, ViewChild, TemplateRef, Output, EventEmitter }
  from '@angular/core';
import { Router } from '@angular/router';
import { DynamicComponentService } from '../common/services/dynamiccomponent.service'
import { Contacts, AlertService, Control, UserControl } from '../common/index';
import { MainscreenDynamicComponent } from './mainscreendynamic/mainscreendynamic.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) container;
  
  componentRef: ComponentRef<any>;
  componentFactory: any;


  constructor(private router: Router, private resolver: ComponentFactoryResolver,
    private dynamicComponentService: DynamicComponentService) {
    this.dynamicComponentService.listen().subscribe((m: any) => {
      this.createComponent(m);
    });
    

      }
  
  ngOnInit() {

  }
 

  createComponent(componentName) {
    if (this.componentRef != null)
      this.componentRef.destroy();

    if (componentName === "MainscreenDynamicComponent") {
      this.resolver.resolveComponentFactory
      this.componentFactory = this.resolver.resolveComponentFactory(MainscreenDynamicComponent)
      this.container.clear();
      this.componentRef = this.container.createComponent(this.componentFactory);
    }
  }

  destroyComponent(): void {
    this.ngOnDestroy();
  }

  ngOnDestroy() {
    this.container.clear();
    if (this.componentRef != null) {
      this.componentRef.destroy();
      this.componentFactory = [];
    }
  }
}
