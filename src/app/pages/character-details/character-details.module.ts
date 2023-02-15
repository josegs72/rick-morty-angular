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
   
  ],

})
export class CharacterDetailsModule { }
