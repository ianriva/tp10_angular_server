import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Instrumento } from '../models/instrumento';

@Injectable({
  providedIn: 'root',
})
export class InstrumentoService {
  url = environment.url + 'api/instrumentos';
  private header: HttpHeaders = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );
  constructor(private http: HttpClient) {}

  //Obtener todos los instrumentos
  getAllInstrumentos(): Observable<Instrumento[]> {
    return this.http.get<Instrumento[]>(this.url, { headers: this.header });
  }

  //Obtener un instrumento
  getInstrumentoById(id: number): Observable<Instrumento> {
    return this.http.get<Instrumento>(this.url + '/' + id, {
      headers: this.header,
    });
  }

  //Obtener un instrumento por marca o modelo
  getInstrumentoByFiltro(termino: string): Observable<Instrumento[]> {
    return this.http.get<Instrumento[]>(
      this.url + '/filtro?termino=' + termino,
      { headers: this.header }
    );
  }

  //Crear un instrumento
  create(instrumento: Instrumento): Observable<Instrumento> {
    return this.http.post<Instrumento>(this.url, instrumento, {
      headers: this.header,
    });
  }

  //obtener un instrumento
  getRubroPorId(id: number): Observable<Instrumento> {
    return this.http.get<Instrumento>(this.url + '/' + id, {
      headers: this.header,
    });
  }

  //actualizar instrumento
  update(instrumento: Instrumento, id: number): Observable<Instrumento> {
    return this.http.put<Instrumento>(this.url + '/' + id, instrumento);
  }

  //eliminar un instrumento
  delete(instrumento: Instrumento): Observable<Instrumento> {
    return this.http.delete<Instrumento>(this.url + '/' + instrumento._id, {
      headers: this.header,
    });
  }
}
