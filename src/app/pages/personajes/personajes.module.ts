import { PersonajesViewModule } from './components/personajes-view/personajes-view.module';
import { PersonajesComponent } from './personajes.component';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';

@NgModule({
  declarations: [PersonajesComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,

    RouterModule,
    PersonajesViewModule,
  ],
  exports: [PersonajesComponent],
})
export class PersonajesModule {}
