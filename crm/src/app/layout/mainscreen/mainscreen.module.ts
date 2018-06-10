import { NgModule ,  Pipe, PipeTransform} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainscreenRoutingModule } from './mainscreen-routing.module';
import { MainscreenComponent } from './mainscreen.component';
import { PageHeaderModule } from '../../shared';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomControlSaveComponent } from '../customcontrolsave/customcontrolsave.component';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@NgModule({
    imports: [
        FormsModule,
        MainscreenRoutingModule,
        CommonModule,
        PageHeaderModule,
        ReactiveFormsModule
    ],
    declarations: [
        MainscreenComponent,
        SafeHtmlPipe,
        CustomControlSaveComponent
    ]
})
export class MainScreenModule { }
