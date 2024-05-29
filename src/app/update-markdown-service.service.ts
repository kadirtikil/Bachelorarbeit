import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateMarkdownServiceService {

  constructor(private http: HttpClient) { }

  updateMarkdown(name: string, newMarkdown: string): Observable<string> {

    const requestBody = {markdown: newMarkdown}
    
    return this.http.put<string>(`http://localhost:5000/editmarkdown/${name}`, requestBody);
  }
}
