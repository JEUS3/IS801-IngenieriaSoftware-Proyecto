import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimateComponent } from './climate/climate.component';

const routes: Routes = [
  {
    path:"",
    component:ClimateComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClimateRoutingModule { }
