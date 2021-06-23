import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SettingComponent } from './pages/setting/setting.component';
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from './pages/map/map.component';
import { ChartComponent } from './pages/chart/chart.component';
import { OpeningComponent } from './pages/opening/opening.component';
import { MaterialModule } from '../material/material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    SettingComponent,
    MapComponent,
    ChartComponent,
    OpeningComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class HomePageModule { }
