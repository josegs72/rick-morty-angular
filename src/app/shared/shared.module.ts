import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { PaginationPipe } from './pipes/pag.pipe';


@NgModule({
  declarations: [
    FilterPipe,
    PaginationPipe,

  ],
  imports: [
    CommonModule,
  
  ],
  exports: [
    FilterPipe,
    PaginationPipe,
  ]
})
export class SharedModule { }
