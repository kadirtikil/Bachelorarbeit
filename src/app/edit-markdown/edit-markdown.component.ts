import { Component, Input,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-markdown',
  standalone: true,
  imports: [],
  templateUrl: './edit-markdown.component.html',
  styleUrl: './edit-markdown.component.scss'
})
export class EditMarkdownComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {}

  markdownInside: string = "";

  ngOnInit(): void {
      this.markdownInside = this.data.markdown;
  }
}
