import { RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './character-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailsRoutingModule } from './character-details-routing.module';


@NgModule({
  declarations: [
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    CharacterDetailsRoutingModule,
    RouterModule,
   
  ],
  exports: [
    CharacterDetailsComponent
  ]

})
export class CharacterDetailsModule { }
