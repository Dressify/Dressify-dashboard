import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        ViewProfileComponent
    ],
    imports: [
        CommonModule,
        SalesRoutingModule,
        SharedModule
    ]
})
export class SalesModule { }
