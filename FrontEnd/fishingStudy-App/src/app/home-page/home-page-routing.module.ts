import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { OpeningComponent } from './pages/opening/opening.component';
import { ChartComponent } from './pages/chart/chart.component';
import { MapComponent } from './pages/map/map.component';
import { SettingComponent } from './pages/setting/setting.component';

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
        { path:"", redirectTo:"opening", pathMatch:"full"}
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
