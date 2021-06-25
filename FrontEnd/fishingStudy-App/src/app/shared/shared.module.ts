import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    Page404Component
  ],
  exports:[
    SidebarComponent,
    ToolbarComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
