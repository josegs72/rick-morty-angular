
import { LoadingService } from '../loading/loading.service';
import { Injectable } from '@angular/core';
import { ApiCharacters } from './api/api-characters.models';

import { ApiService } from './api/api-characters.service';
import { Person } from './character.models';
import { transformCharacters } from './api/characters.helpers';
import { Observable, map, tap, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(
    private apiCharacterService: ApiService,
    private loadingService: LoadingService
  ) {}

  public getCharacters(): Observable<Person[]> {
    this.loadingService.showLoading();

    return this.apiCharacterService.getApiCharacters().pipe(
      map((characters: ApiCharacters[]) => {
        return characters.map((character) => transformCharacters(character));
      }),
      tap(() => this.loadingService.hideLoading())
     
    );
  }

  public getCharactersDetail(id: string): Observable<Person> {
   return forkJoin([
    this.apiCharacterService.getApiCharactersDetail(id)
   

    ]).pipe(
      map( ([apiCharacter]) => {
        return transformCharacters(apiCharacter);
      })
    );
  }
  public deleteCharacter(id: string): Observable<Person> {
    return this.apiCharacterService.deleteApiCharacter(id).pipe(
      map((character) => transformCharacters(character))
    )
  }
  public createCharacter(body: Person): Observable<Person> {
    return this.apiCharacterService.createApiCharacter(body).pipe(
      map((character) => transformCharacters(character))
    );
  }
  public editCharacter(id: string, body: Person): Observable<Person> {
    return this.apiCharacterService.editApiCharacter(id, body).pipe(
      map((character) => transformCharacters(character))
    );
  }
  
  
}


