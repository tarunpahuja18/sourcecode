import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { signupComponent } from './signup.component';

const routes: Routes = [
    { path: '', component: signupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class signupRoutingModule { }
