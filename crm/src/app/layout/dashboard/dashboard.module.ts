import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';  
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PageHeaderModule } from '../../shared';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DashboardRoutingModule,
        PageHeaderModule,
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
