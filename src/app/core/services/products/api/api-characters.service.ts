import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCharacters } from 'src/app/core/services/products/api/api-characters.models';
import { Observable } from 'rxjs';
import { Person } from '../character.models';

const API_CHARACTER_URL = "https://63f87c365b0e4a127de6f739.mockapi.io";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
 

  constructor(
    private http: HttpClient,
    ) {}

  public getApiCharacters(): Observable<ApiCharacters[]> {
    return this.http.get<ApiCharacters[]>(`${API_CHARACTER_URL}/characters`);
  }
  public getApiCharactersDetail(id: string): Observable<ApiCharacters> {
    return this.http.get<ApiCharacters>(
      `${API_CHARACTER_URL}/characters/${id}`);
  }
 
  
 
  
}
