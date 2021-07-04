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
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { EarlyWarningComponent } from './pages/early-warning/early-warning.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { CalendaryComponent } from './pages/calendary/calendary.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';


@NgModule({
  declarations: [
    HomeComponent,
    SettingComponent,
    MapComponent,
    ChartComponent,
    OpeningComponent,
    ConfigurationComponent,
    EarlyWarningComponent,
    SurveyComponent,
    CalendaryComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HomePageModule { }
