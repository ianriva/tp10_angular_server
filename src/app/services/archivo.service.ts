import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {
  url = environment.url;
  constructor(private http: HttpClient) { }

    //Upload del archivo
    upload(imagen: File): Observable<any> {
      const requestOptions : Object = {
        responseType: 'blob'
      }
      const formData = new FormData();
      formData.append('file', imagen);
      return this.http.post<any>(this.url + 'upload', formData, requestOptions);
    }
}
