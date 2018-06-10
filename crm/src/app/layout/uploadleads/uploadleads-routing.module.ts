import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadleadsComponent } from './uploadleads.component';

const routes: Routes = [
    { path: '', component: UploadleadsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadleadsRoutingModule { }
