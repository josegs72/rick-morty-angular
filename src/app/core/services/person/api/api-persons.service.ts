import { Persons } from '../persons.model';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPersons } from './api-persons.models';



const API_PERSONS_URL = 'https://63f3b7e3fe3b595e2ee8174b.mockapi.io/api/v2';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonsService {

  constructor(
    private http: HttpClient
  ) { }

  //datos de la api brutos
  public getApiPersons(): Observable<ApiPersons[]> {
    return this.http.get<ApiPersons[]>(`${API_PERSONS_URL}/persons`)
  }
  //eliminar datos api
  public deleteApiPersons(id: string): Observable<ApiPersons> {
    return this.http.delete<ApiPersons>(`${API_PERSONS_URL}/persons/${id}`)
  }

  //crear nuevo
  public createApiPersons(body: Persons): Observable<ApiPersons> {
    return this.http.post<ApiPersons>(`${API_PERSONS_URL}/persons`, body)
  }
}
