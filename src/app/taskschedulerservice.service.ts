import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskschedulerserviceService {

  private api = "https://localhost:7132/taskScheduler";

  constructor(private httpClient: HttpClient) { }

  taskScheduler(taskMeta: any) {
    return this.httpClient.post(this.api, taskMeta);
  }
}
