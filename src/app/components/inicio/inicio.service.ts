import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(
    private http: HttpClient,
  ) { }

  public async buscarUsuario(nomeUsuario): Promise<Observable<any>> {
    return this.http.get<any>(`https://api.github.com/users/${nomeUsuario}/repos`);
}
}
