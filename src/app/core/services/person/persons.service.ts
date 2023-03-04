import { LoadingService } from '../loading/loading.service';
import { ApiPersons } from './api/api-persons.models';
import { Observable, map, tap } from 'rxjs';
import { ApiPersonsService } from './api/api-persons.service';
import { Injectable } from '@angular/core';
import { Persons } from './persons.model';
import { transformPerson } from './persons.helpers';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(
    private apiPersonsService:ApiPersonsService,
    private loadingService: LoadingService
  ) { }
   
  public getPersons(): Observable<Persons[]> {
    this.loadingService.showLoading();
    return this.apiPersonsService.getApiPersons().pipe(
      map((persons: ApiPersons[]) => {
        return persons.map((person) => transformPerson(person))
      }),
      tap(() => this.loadingService.hideLoading())
    )
  }
 
  public deletePerson(id: string): Observable<Persons> {
    return this.apiPersonsService.deleteApiPersons(id).pipe(
      map((person) => transformPerson(person))
    )
  }
  //crear
  public createPerson(body: Persons): Observable<Persons> {
    return this.apiPersonsService.createApiPersons(body).pipe(
      map((person) => transformPerson(person))
    )
  }

}
