import { ApiPersonajes } from './api/api-personajes.model';
import { Observable, map } from 'rxjs';
import { ApiMyPersonService } from './api/api-personajes.service';
import { Injectable } from '@angular/core';
import { personajes } from './personajes.model';
import { transformPersonaje } from './personajes.helper';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(
    private apiMyPersonajeService: ApiMyPersonService
  ) { }

  //traer datos filtrados
  public getPersonaje(): Observable<personajes[]> {
    return this.apiMyPersonajeService.getApiPerson().pipe(
      map((personajes: ApiPersonajes[]) => {
        return personajes.map((personaje) => transformPersonaje(personaje))
      })
    )
  }
  //eliminar un hijo
  public deletePersonaje(id: string): Observable<personajes> {
    return this.apiMyPersonajeService.deleteApiPerson(id).pipe(
      map((personaje) => transformPersonaje(personaje))
    )
  }

  //crear 
  public createPersonaje(body: personajes): Observable<personajes> {
    return this.apiMyPersonajeService.createApiPerson(body).pipe(
      map((personaje) => transformPersonaje(personaje))
    )
  }
}