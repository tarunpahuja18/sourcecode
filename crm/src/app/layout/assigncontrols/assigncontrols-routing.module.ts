import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignControlsComponent } from './assigncontrols.component';

const routes: Routes = [
    { path: '', component: AssignControlsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignControlsRoutingModule { }
