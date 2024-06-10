import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


interface AuthResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CheckAuthForMarkdownEditService {

  constructor(private http: HttpClient) { }

  
  private apiURL = 'http://localhost:8080/checkAuth';


  checkAuthCreds(chiffre1: string, chiffre2: string) {
    const requestBody =  {chiffre1: chiffre1, chiffre2: chiffre2};
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<AuthResponse>(this.apiURL, requestBody, { headers })
      .pipe(
        map(response => response.success)
      );  
  }
}
