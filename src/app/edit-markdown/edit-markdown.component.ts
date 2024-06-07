import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, } from '@angular/material/dialog';

import { UpdateMarkdownServiceService } from '../service/update-markdown-service.service';
import { DialogRef } from '@angular/cdk/dialog';

import { AuthForMarkdownEditComponent } from '../auth-for-markdown-edit/auth-for-markdown-edit.component';

@Component({
  selector: 'app-edit-markdown',
  standalone: true,
  imports: [MatDialogModule, ],
  templateUrl: './edit-markdown.component.html',
  styleUrl: './edit-markdown.component.scss'
})
export class EditMarkdownComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private udpateMarkdown: UpdateMarkdownServiceService,
    private dialogRef: DialogRef, private dialog: MatDialog) {}

  // for fetching data passed into component per Mat dialog data 
  headline: string = "";  
  markdownInside: string = "";

  // to get current updated value inside the textarea
  newMarkdown: string = "";


  ngOnInit(): void {
    this.headline = this.data.headline;    
    this.markdownInside = this.data.markdown;

  }

  async submitChanges(){
    console.log("clicked submit in edit markdown");

    var temp = document.getElementById("newMarkdown") as HTMLTextAreaElement;
    var newMarkdown = temp.value;

    // open another dialog box to confirm changes.
    // subscribe to it. then check with if else.+

    this.dialog.open(AuthForMarkdownEditComponent);

    if(true){

    }
    else {
      await this.udpateMarkdown.updateMarkdown(this.headline, newMarkdown).toPromise();
    }

    

    this.dialogRef.close();
  }
}
