import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

import { MarkdownModule } from 'ngx-markdown';

import { DistributedSystemsService } from '../distributed-systems.service';

@Component({
  selector: 'app-vert-rech',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule, MarkdownModule, CommonModule, ],
  templateUrl: './vert-rech.component.html',
  styleUrl: './vert-rech.component.scss'
})
export class VertRechComponent {
  dsForm = new FormGroup({
    pid: new FormControl("",[Validators.minLength(3), Validators.required, Validators.maxLength(9)]),
    message: new FormControl('',[Validators.minLength(5), Validators.required, Validators.maxLength(20)]),
    requiredfor: new FormControl('', [Validators.minLength(1), Validators.maxLength(1)]),
  })

  // Array for messages. These will be send to the backend.
  pidMessages: {pid: String; message: String; requiredfor: String}[] = [];

  addMessages(): void {
    event?.preventDefault();

    const Pid = this.dsForm.value.pid
    const Message = this.dsForm.value.message;
    const Requiredfor = this.dsForm.value.requiredfor;

    if(Pid !== null && Pid !== undefined && Message !== null && Message !== undefined && Requiredfor!==null && Requiredfor!==undefined  &&this.pidMessages.length < 3){
      this.pidMessages.push({pid: Pid?.toString(), message: Message?.toString(), requiredfor: Requiredfor?.toString()})
    }
  }

  // Submitting the Data
  constructor(private http: DistributedSystemsService) {}

  // Value to later display in the frontend
  // ...

  submitMessages(): void {
    event?.preventDefault();

    const jsonifiedMessages = JSON.stringify(this.pidMessages);

    console.log(jsonifiedMessages);

    this.http.distributedSystem(jsonifiedMessages)
      .subscribe((response) => { console.log(response); });
  }
}
