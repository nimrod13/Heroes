import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DtPaginationModule } from '@dynatrace/barista-components/pagination';
import { DtTableModule } from '@dynatrace/barista-components/table';
import { HeroesComponent } from './heroes.component';
import { DynamicTableComponent } from '../dynamic-table/dynamic-table.component';
import { ScrollingComponent } from '../scrolling/scrolling.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeroesComponent,
    DynamicTableComponent,
    ScrollingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DtPaginationModule,
    DtTableModule,
    RouterModule.forChild([{ path: '', component: HeroesComponent }]),
  ]
})
export class HeroesModule { }
