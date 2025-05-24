import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Rota } from '../models/Rota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RotaService {

  private apiUrl = `${environment.ApiUrl}rotas`
  constructor(private http: HttpClient) { }
  getRotas(): Observable<Rota[]> {
    return this.http.get<Rota[]>(`${this.apiUrl}`);
  }
createRota(rota: Rota): Observable<Rota> {
  return this.http.post<Rota>(`${this.apiUrl}`, rota);
}

}
