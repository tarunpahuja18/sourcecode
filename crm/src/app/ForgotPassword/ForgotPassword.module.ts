import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ForgotPasswordRoutingModule } from './ForgotPassword-routing.module';
import { ForgotPasswordComponent } from './ForgotPassword.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ForgotPasswordRoutingModule,
        FormsModule      
    ],
    declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordModule {
}
