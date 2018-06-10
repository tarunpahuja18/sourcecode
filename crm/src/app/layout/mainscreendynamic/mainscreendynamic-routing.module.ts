import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainscreenDynamicComponent } from './mainscreendynamic.component';

const routes: Routes = [
    { path: '', component: MainscreenDynamicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainscreenDynamicRoutingModule { }
