import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePersonRoutingModule } from './create-character-routing.module';
import { CreatePersonComponent } from './create-character.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';



@NgModule({
  declarations: [CreatePersonComponent],
 
  imports: [
    CommonModule,
    CreatePersonRoutingModule,
    RouterModule,

    ReactiveFormsModule,
  ],

})
export class CreateCharacterModule { }
