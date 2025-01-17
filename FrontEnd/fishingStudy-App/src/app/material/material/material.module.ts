import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// pruebas botones sidenar
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

//setting
import { MatTabsModule } from '@angular/material/tabs';

//Tablas
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
exports:[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,

  MatExpansionModule,
  MatListModule,
  MatTabsModule,

  MatTableModule,
  MatChipsModule,
  MatPaginatorModule,
  MatSortModule
  
]
})
export class MaterialModule { }
