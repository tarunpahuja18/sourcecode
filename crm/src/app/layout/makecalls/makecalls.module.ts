import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MakecallsComponent } from './makecalls.component';
import { MakecallsRoutingModule } from './makecalls-routing.module';
import { PageHeaderModule } from '../../shared';
// import { createNewHosts, removeNgStyles } from '@angularclass/hmr';
import { DataTableModule } from 'ngx-datatable-bootstrap4';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MakecallsRoutingModule,
        PageHeaderModule,
        DataTableModule
    ],
    declarations: [
        MakecallsComponent
    ],
    bootstrap: [MakecallsComponent]
})

export class MakeCallsModule { }
