import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RetrieveFileForMDService {

  constructor(private http: HttpClient) { }

  getTextFile(headline: string): Observable<string> {
    return this.http.get<string>(`http://localhost:8080/fetchmarkdown/${headline}`,  { responseType: 'json' });
  }
}
