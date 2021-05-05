import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  exports: [
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
