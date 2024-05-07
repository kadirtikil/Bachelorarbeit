import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskschedulerserviceService {

  private api = "http://localhost:5000/taskScheduler";

  constructor(private httpClient: HttpClient) { }

  taskScheduler(taskMeta: any) {
    return this.httpClient.post(this.api, taskMeta);
  }
}
