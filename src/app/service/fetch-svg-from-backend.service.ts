import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchSvgFromBackendService {

  
  constructor(private http: HttpClient) { }

  getSvgFile(headline: string): Observable<string> {
    return this.http.get<string>(`http://localhost:8080/svg/${headline}`);
  }
}

