import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomControlComponent } from './customcontrol.component';
import { CustomControlService } from '../customcontrol/customcontrol.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ CustomControlComponent ],
    providers: [
        CustomControlService
    ],
    bootstrap: [ CustomControlComponent ]
})


export class CustomControlModule { }