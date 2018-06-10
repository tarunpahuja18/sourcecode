import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { Ng2BootstrapModule } from 'ng-bootstrap/ng2-bootstrap'
import {ReactiveFormsModule, FormControl } from '@angular/forms';
import { GetContactService } from './makecalls/makecalls.service';

// Import your library
import { SlimScrollModule } from 'ng2-slimscroll';

@NgModule({
    imports: [ 
        CommonModule,
        LayoutRoutingModule,
        FormsModule,
        Ng2BootstrapModule.forRoot(),
        SlimScrollModule
    ],
    providers: [
        GetContactService
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ]
})
export class LayoutModule { }
