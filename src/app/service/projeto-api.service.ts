import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { throwError, Observable } from 'rxjs';
import { Projeto } from '../model/projeto';
import {retry, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProjetoApiService {
  apiUrl: string = "http://exapi.somee.com/api/";
  constructor(private httpClient: HttpClient) { }

  handleError(error)
  {
    let errorMessage = `Código de error: ${error.status}\nMessagem: ${error.message}`;
    alert(errorMessage);
    return throwError(errorMessage);
  }

  getProjetos() : Observable<Projeto[]>
  {
    return this.httpClient.get<Projeto[]>(this.apiUrl + "Projetos")
                          .pipe(retry(1), catchError(this.handleError))
  }
}
