import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        ViewProfileComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule
    ]
})
export class AdminModule { }
