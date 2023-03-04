import { personajes } from '../personajes.model';
import { ApiPersonajes } from './api-personajes.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//url de la api
const API_PERSONAJE_URL = 'https://run.mocky.io/v3/3c59aae9-15d5-4087-9f42-02c9e6413247';

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
  public createApiPerson(body: personajes): Observable<ApiPersonajes> {
    return this.http.post<ApiPersonajes>(`${API_PERSONAJE_URL}/personajes`, body)
  }
}
