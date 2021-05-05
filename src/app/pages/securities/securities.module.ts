import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuritiesComponent } from './securities.component';
import { SecuritiesRoutingModule } from './securities-routing.module';
import { MaterialModule } from '@app/material.module';
import { SecuritiesDataTableComponent } from '@components/securities-data-table/securities-data-table.component';

@NgModule({
  declarations: [SecuritiesComponent, SecuritiesDataTableComponent],
  imports: [
    CommonModule,
    SecuritiesRoutingModule,
    MaterialModule
  ]
})
export class SecuritiesModule { }
