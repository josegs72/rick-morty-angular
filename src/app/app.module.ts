import { CharactersModule } from './pages/characters/characters.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailsModule } from './pages/character-details/character-details.module';


@NgModule({
    declarations: [AppComponent, HomeComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, ]
})
export class AppModule {}
