import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'makecalls', loadChildren: './makecalls/makecalls.module#MakeCallsModule' },
            { path: 'mainscreen', loadChildren: './mainscreen/mainscreen.module#MainScreenModule' },
            { path: 'assignleads', loadChildren: './assignleads/assignleads.module#AssignLeadsModule' },
            { path: 'uploadleads', loadChildren: './uploadleads/uploadleads.module#UploadLeadsModule' },
            { path: 'assigncontrols', loadChildren: './assigncontrols/assigncontrols.module#AssignControlsModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
