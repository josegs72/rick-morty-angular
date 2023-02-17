import { RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    RouterModule,
  ],
  exports: [
    CharactersComponent
  ]
})
export class CharactersModule { }
