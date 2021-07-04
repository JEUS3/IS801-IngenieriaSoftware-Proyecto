import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { OpeningComponent } from './pages/opening/opening.component';
import { ChartComponent } from './pages/chart/chart.component';
import { MapComponent } from './pages/map/map.component';
import { SettingComponent } from './pages/setting/setting.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { EarlyWarningComponent } from './pages/early-warning/early-warning.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { CalendaryComponent } from './pages/calendary/calendary.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children:
      [
        { path:"opening", component:OpeningComponent },
        { path:"chart",   component:ChartComponent },
        { path:"map",     component:MapComponent },
        { path:"setting", component:SettingComponent },
        { path:"configuration", component:ConfigurationComponent },
        { path:"early-warning", component:EarlyWarningComponent },
        { path:"survey", component:SurveyComponent },
        { path:"calendary", component:CalendaryComponent },
        { path:"statistics", component:StatisticsComponent },
        { path:"", redirectTo:"opening", pathMatch:"full"},
        { path:"**", redirectTo:"opening", pathMatch:"full"}
      ] 
  },
  {
    path:"", redirectTo:"home-page", pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
