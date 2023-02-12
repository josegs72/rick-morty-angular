import { CharactersModule } from './pages/characters/characters.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailsModule } from './pages/character-details/character-details.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
     AppRoutingModule,
      CharactersModule,
      CharacterDetailsModule
      ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
