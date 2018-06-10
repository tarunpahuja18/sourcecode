import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';  
import { UploadleadsRoutingModule } from './uploadleads-routing.module';
import { UploadleadsComponent } from './uploadleads.component';
import { PageHeaderModule } from '../../shared';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UploadleadsRoutingModule,
        PageHeaderModule,
    ],
    declarations: [
        UploadleadsComponent
    ]
})
export class UploadLeadsModule { }
