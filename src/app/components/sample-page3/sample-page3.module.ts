import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePage3RoutingModule } from './sample-page3-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {SamplePage3Component} from "./sample-page3.component";


@NgModule({
  declarations: [SamplePage3Component],
  imports: [
    CommonModule,
    SamplePage3RoutingModule,
    SharedModule
  ]
})
export class SamplePage3Module { }
