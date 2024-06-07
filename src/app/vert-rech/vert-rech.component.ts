import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

import { MarkdownModule } from 'ngx-markdown';


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
  pidMessages: {pid: string; message: string; requiredfor: string}[] = [];

  addMessages(): void {
    event?.preventDefault();

    const Pid = this.dsForm.value.pid
    const Message = this.dsForm.value.message;
    const Requiredfor = this.dsForm.value.requiredfor;

    if(Pid !== null && Pid !== undefined && Message !== null && Message !== undefined && Requiredfor!==null && Requiredfor!==undefined  && this.pidMessages.length < 3){
      this.pidMessages.push({pid: Pid?.toString(), message: Message?.toString(), requiredfor: Requiredfor?.toString()})
    }
  }

  // Submitting the Data
  constructor() {}

  // Value to later display in the frontend
  // ...
  sortedMessages: {pid: string; message: string; requiredfor: string}[] = [];

  showMessages(): void {
    event?.preventDefault();


    // Sort the Messages by Required for
    this.sortedMessages = this.pidMessages.sort((a,b) => {
      return parseInt(a.requiredfor) - parseInt(b.requiredfor);

    });
    
    console.log(this.sortedMessages);
  }
}
