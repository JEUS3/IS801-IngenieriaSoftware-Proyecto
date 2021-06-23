import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

// pruebas botones sidenar
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

//setting
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
exports:[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,


  MatExpansionModule,
  MatListModule,

  MatTabsModule
]
})
export class MaterialModule { }
