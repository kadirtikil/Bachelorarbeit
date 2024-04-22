import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistributedSystemsService {

  private api = "https://localhost:7132/distributedSystems";

  constructor(private httpClient: HttpClient) { }

  distributedSystem(messages: any) {
    return this.httpClient.post(this.api, messages);
  }
}
