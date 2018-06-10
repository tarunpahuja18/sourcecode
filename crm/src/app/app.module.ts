import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthenticationService } from './common/index';
import { BrowserXhr, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule, NgProgressInterceptor, NgProgressBrowserXhr } from 'ngx-progressbar';
import { AuthGuard } from './shared/index';
import { AppRoutingModule } from './app-routing.module';
import { ISlimScrollOptions } from 'ng2-slimscroll';
import { SlimScrollModule } from 'ng2-slimscroll';
import { DynamicComponentService } from './common/services/dynamiccomponent.service';
import { MainscreenDynamicComponent } from './layout/mainscreendynamic/mainscreendynamic.component';
import { Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MainscreenDynamicComponent,
    SafeHtmlPipe  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    //Ng2BootstrapModule,
    NgProgressModule,
    SlimScrollModule,
    
   
  ],
  providers: [AuthGuard, AuthenticationService, DynamicComponentService,
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr },],
  bootstrap: [AppComponent],
  entryComponents: [MainscreenDynamicComponent]
})
export class AppModule { }
