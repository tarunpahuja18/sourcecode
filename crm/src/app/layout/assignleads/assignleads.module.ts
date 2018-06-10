import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';  
import { AssignleadsRoutingModule } from './assignleads-routing.module';
import { AssignleadsComponent } from './assignleads.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AssignleadsRoutingModule
    ],
    declarations: [
        AssignleadsComponent
    ]
})
export class AssignLeadsModule { }
