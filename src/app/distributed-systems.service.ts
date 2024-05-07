import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistributedSystemsService {

  private api = "http://localhost:5000/distributedSystems";

  constructor(private httpClient: HttpClient) { }

  distributedSystem(messages: any) {
    return this.httpClient.post(this.api, messages);
  }
}
