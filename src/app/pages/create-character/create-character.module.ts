import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCharacterRoutingModule } from './create-character-routing.module';
import { CreateCharacterComponent } from './create-character.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';



@NgModule({
  declarations: [CreateCharacterComponent],
 
  imports: [
    CommonModule,
    CreateCharacterRoutingModule,
    RouterModule,

    ReactiveFormsModule,
  ],

})
export class CreateCharacterModule { }
