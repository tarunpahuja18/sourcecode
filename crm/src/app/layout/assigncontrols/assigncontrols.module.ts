import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AssignControlsRoutingModule } from './assigncontrols-routing.module';
import { AssignControlsComponent } from './assigncontrols.component';
import { PageHeaderModule } from '../../shared';
import { DialogComponent } from '../dialog/dialog.component';
import { CustomControlComponent } from '../customcontrol/customcontrol.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AssignControlsRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule
    ],
    declarations: [
        AssignControlsComponent,
        DialogComponent,
        CustomControlComponent
    ]
})
export class AssignControlsModule { }
