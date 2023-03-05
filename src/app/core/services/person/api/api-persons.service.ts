import { Persons } from '../persons.model';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPersons } from './api-persons.models';



const API_PERSONS_URL = 'https://640460f780d9c5c7bac66d40.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonsService {

  constructor(
    private http: HttpClient
  ) { }

  
  public getApiPersons(): Observable<ApiPersons[]> {
    return this.http.get<ApiPersons[]>(`${API_PERSONS_URL}/personajes`)
  }
 
  public deleteApiPersons(id: string): Observable<ApiPersons> {
    return this.http.delete<ApiPersons>(`${API_PERSONS_URL}/personajes/${id}`)
  }

 
  public createApiPersons(body: Persons): Observable<ApiPersons> {
    return this.http.post<ApiPersons>(`${API_PERSONS_URL}/person`, body)
  }
}
