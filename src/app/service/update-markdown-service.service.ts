import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateMarkdownServiceService {
  private apiUrl = 'http://localhost:8080/editmarkdown';

  constructor(private http: HttpClient) { }

  updateMarkdown(name: string, newMarkdownAndChifres: any): Observable<string> {
    const requestBody = newMarkdownAndChifres ;
    
    // Define your headers
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<string>(this.apiUrl, requestBody, { headers });
  }
}
