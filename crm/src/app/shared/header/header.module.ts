import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SlimScrollModule } from 'ng2-slimscroll';
import { AppComponent } from '../../app.component';

@NgModule({
    declarations: [
        AppComponent
      ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        SlimScrollModule,
    ]
})
export class HeaderModule {
}