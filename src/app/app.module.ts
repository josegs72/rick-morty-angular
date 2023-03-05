


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonajesModule } from './pages/personajes/personajes.module';
import { CreateCharacterModule } from './pages/create-character/create-character.module';





@NgModule({
    declarations: [AppComponent, HomeComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule,HomeModule,FontAwesomeModule,PersonajesModule,CreateCharacterModule]
})
export class AppModule {}
