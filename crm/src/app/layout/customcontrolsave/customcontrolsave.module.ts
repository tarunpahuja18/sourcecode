import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomControlSaveComponent } from './customcontrolsave.component';
import { CustomControlSaveService } from '../customcontrolsave/customcontrolsave.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ CustomControlSaveComponent ],
    providers: [
        CustomControlSaveService
    ],
    bootstrap: [ CustomControlSaveComponent ]
})


export class CustomControlSaveModule { }