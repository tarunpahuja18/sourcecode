import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakecallsComponent } from './makecalls.component';

const routes: Routes = [
    { path: '', component: MakecallsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakecallsRoutingModule { }
