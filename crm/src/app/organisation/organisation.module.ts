import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { OrganisationComponent } from './organisation.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        OrganisationRoutingModule,
        FormsModule      
    ],
    declarations: [OrganisationComponent]
})
export class OrganisationModule {
}
