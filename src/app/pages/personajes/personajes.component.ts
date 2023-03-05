import { Router } from '@angular/router';

import { switchMap } from 'rxjs';
import { Personajes } from './../../core/services/personajes/personajes.model';
import { PersonajesService } from './../../core/services/personajes/personajes.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  public personajes: Personajes[] = [];

  constructor(
    private personajesService: PersonajesService,

    private router: Router
  ) {}

  public ngOnInit() {
    this.personajesService.getPersonaje().subscribe((personajesFromApi) => {
      this.personajes = personajesFromApi;
    });
  }

  public removePersonaje(id: string) {
    if (!id) {
      return;
    }
    this.personajesService
      .deletePersonaje(id)
      .pipe(
        switchMap((personaje) => {
          return this.personajesService.getPersonaje();
        })
      )
      .subscribe((personajesFromApi) => {
        this.personajes = personajesFromApi;
      });
  }
}
