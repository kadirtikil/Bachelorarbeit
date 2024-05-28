import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditMarkdownService {

  constructor(private http: HttpClient) { }

  updateMarkdown(name: string, markdowntext: string){
    this.http.put(`http://localhost:5000/${name}`,markdowntext)
  }
}
