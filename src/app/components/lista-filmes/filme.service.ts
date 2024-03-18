import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private apiUrl = 'http://localhost:5274/Filme';

  constructor(private http: HttpClient) { }

  getFilmes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
