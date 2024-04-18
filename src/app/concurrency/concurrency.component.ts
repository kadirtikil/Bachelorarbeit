import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-concurrency',
  standalone: true,
  imports: [MatDialogModule, MatDialogContent, ReactiveFormsModule, ],
  templateUrl: './concurrency.component.html',
  styleUrl: './concurrency.component.scss'
})
export class ConcurrencyComponent {

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(4), Validators.required, Validators.maxLength(13)]),
    duration: new FormControl('', [Validators.minLength(1), Validators.required, Validators.maxLength(2)])
  });

  tasks: { name: String; duration: String; }[] = [];

  addTask() {
    event?.preventDefault();
    const name = this.profileForm.value.name;
    const duration = this.profileForm.value.duration;
    
    // Check if name is not undefined or null before assigning
    if (name !== undefined && duration !== undefined && name !== null && duration !== null) {
        this.tasks.push({ name: name.toString(), duration: duration.toString() });
    }

    console.log(JSON.stringify(this.tasks));
  }

}
