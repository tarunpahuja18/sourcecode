import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { signupRoutingModule } from './signup-routing.module';
import { signupComponent } from './signup.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        signupRoutingModule,
        FormsModule      
    ],
    declarations: [signupComponent]
})
export class SignupModule {
}
