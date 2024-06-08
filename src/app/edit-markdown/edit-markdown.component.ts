import { Component, Inject, OnInit, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef, } from '@angular/material/dialog';

import { UpdateMarkdownServiceService } from '../service/update-markdown-service.service';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edit-markdown',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './edit-markdown.component.html',
  styleUrl: './edit-markdown.component.scss'
})
export class EditMarkdownComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private udpateMarkdown: UpdateMarkdownServiceService,
    public thisdialogRef: MatDialogRef<EditMarkdownComponent>) {}




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
    var temp = document.getElementById("newMarkdown") as HTMLTextAreaElement;
    var newMarkdown = temp.value;

    

    const requestBody = {headline: this.data.headline, markdown: newMarkdown, chifre1: this.data.chifre1, chifre2: this.data.chifre2}

    // Any Data necessary is here. time to setup the backend now.
    await this.udpateMarkdown.updateMarkdown(this.headline, requestBody).toPromise();

    this.thisdialogRef.close();

  }
}
