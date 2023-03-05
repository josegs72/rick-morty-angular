import { Personajes } from '../personajes.model';
import { ApiPersonajes } from './api-personajes.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//url de la api
const API_PERSONAJE_URL = 'https://640460f780d9c5c7bac66d40.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class ApiMyPersonService {

  constructor(
    //necesitamos el hhttpClient para hacer peticiones a las api
    private http: HttpClient
  ) { }

  //datos brutos de la api
  public getApiPerson(): Observable<ApiPersonajes[]> {
    return this.http.get<ApiPersonajes[]>(`${API_PERSONAJE_URL}/personajes`)
  }

  //eliminar datos
  public deleteApiPerson(id: string): Observable<ApiPersonajes> {
    return this.http.delete<ApiPersonajes>(`${API_PERSONAJE_URL}/personajes/${id}`)
  }

  //crear nuevo 
  public createApiPerson(body: Personajes): Observable<ApiPersonajes> {
    return this.http.post<ApiPersonajes>(`${API_PERSONAJE_URL}/personajes`, body)
  }
}
