import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';


import { MarkdownModule } from 'ngx-markdown';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { TaskschedulerserviceService } from '../taskschedulerservice.service';

@Component({
  selector: 'app-concurrency',
  standalone: true,
  imports: [MatDialogModule, MatDialogContent, ReactiveFormsModule, CommonModule, MarkdownModule ],
  templateUrl: './concurrency.component.html',
  styleUrl: './concurrency.component.scss'
})
export class ConcurrencyComponent {

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(4), Validators.required, Validators.maxLength(13)]),
    duration: new FormControl('', [Validators.minLength(1), Validators.required, Validators.maxLength(2)])
  });

  tasks: { name: String; duration: String; }[] = [];
  sortedTasks: any;

  addTask(): void {
    event?.preventDefault();
    const name = this.profileForm.value.name;
    const duration = this.profileForm.value.duration;
    
    // Check if name is not undefined or null before assigning
    if (name !== undefined && duration !== undefined && name !== null && duration !== null && this.tasks.length < 3) {
        this.tasks.push({ name: name.toString(), duration: duration.toString() });
    }

  }

  constructor(private schedulerservice: TaskschedulerserviceService) {}

  submitTasks(): void {
    event?.preventDefault();

    const jsonifiedtasks = JSON.stringify(this.tasks);
    // http stuff to send the data to the backend for the algorithm
    this.schedulerservice.taskScheduler(jsonifiedtasks)
      .subscribe((response) => {this.sortedTasks=response; this.sortedTasks = JSON.parse(this.sortedTasks.message);});
  }

}
