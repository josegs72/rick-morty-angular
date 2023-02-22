import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCharacters } from 'src/app/core/services/products/api/api-characters.models';
import { Observable } from 'rxjs';

const API_CHARACTER_URL = "https://63ee7c185e9f1583bdc3a64c.mockapi.io"

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: any;

  constructor(private http: HttpClient) {}

  public getApiCharacters(): Observable<ApiCharacters[]> {
    return this.http.get<ApiCharacters[]>(`${API_CHARACTER_URL}/characters`);
  }
  public getApiCharactersDetail(id: string): Observable<ApiCharacters> {
    return this.http.get<ApiCharacters>(
      `${API_CHARACTER_URL}/character/${id}`
    );
  }
}
