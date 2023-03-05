import { Personajes } from '../personajes.model';
import { ApiPersonajes } from './api-personajes.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API_PERSONAJE_URL = 'https://640460f780d9c5c7bac66d40.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class ApiMyPersonService {

  constructor(
   
    private http: HttpClient
  ) { }

  public getApiPerson(): Observable<ApiPersonajes[]> {
    return this.http.get<ApiPersonajes[]>(`${API_PERSONAJE_URL}/personajes`)
  }

 
  public deleteApiPerson(id: string): Observable<ApiPersonajes> {
    return this.http.delete<ApiPersonajes>(`${API_PERSONAJE_URL}/personajes/${id}`)
  }


  public createApiPerson(body: Personajes): Observable<ApiPersonajes> {
    return this.http.post<ApiPersonajes>(`${API_PERSONAJE_URL}/personajes`, body)
  }
}
