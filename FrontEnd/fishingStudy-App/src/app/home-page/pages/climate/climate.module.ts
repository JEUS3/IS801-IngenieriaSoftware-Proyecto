import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClimateRoutingModule } from './climate-routing.module';
import { ClimateComponent } from './climate/climate.component';


@NgModule({
  declarations: [
    ClimateComponent
  ],
  imports: [
    CommonModule,
    ClimateRoutingModule
  ]
})
export class ClimateModule { }
