
import { RouterModule } from '@angular/router';
import { CharacterListRoutingModule } from './character-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import {  NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  declarations: [
    CharacterListComponent,
    CharactersComponent,
    
   
    
  ],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule,
    

  ]
})
export class CharacterListModule { }
