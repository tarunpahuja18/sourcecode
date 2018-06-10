import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignleadsComponent } from './assignleads.component';

const routes: Routes = [
    { path: '', component: AssignleadsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignleadsRoutingModule { }
