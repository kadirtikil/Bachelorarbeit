import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-functional-concepts-explaination',
  standalone: true,
  imports: [MarkdownModule, ],
  templateUrl: './functional-concepts-explaination.component.html',
  styleUrl: './functional-concepts-explaination.component.scss'
})
export class FunctionalConceptsExplainationComponent implements OnInit{
  @Input() headline: any;
  @Input() description: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.headline = this.data.headline;
    this.description= this.data.description; 
  
  }
  
}
