import { NgModule ,  Pipe, PipeTransform} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainscreenDynamicRoutingModule } from './mainscreendynamic-routing.module';
import { MainscreenDynamicComponent } from './mainscreendynamic.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        FormsModule,
        MainscreenDynamicRoutingModule,
        CommonModule,
        PageHeaderModule
    ],
    declarations: [
        MainscreenDynamicComponent,
        
    ]
})
export class MainScreenModule { }
