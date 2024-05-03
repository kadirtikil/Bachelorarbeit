import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { RetrieveFileForMDService } from '../retrieve-file-for-md.service';


@Component({
  selector: 'app-functional-concepts-explaination',
  standalone: true,
  imports: [MarkdownModule, CommonModule,  ],
  templateUrl: './functional-concepts-explaination.component.html',
  styleUrl: './functional-concepts-explaination.component.scss'
})
export class FunctionalConceptsExplainationComponent implements OnInit{
  @Input() headline: any;
  @Input() description: any;
  isLoaded: boolean = false;
  temp: any = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private retrieveFile: RetrieveFileForMDService) {}

  async ngOnInit() {
    try {
    this.headline = this.data.headline;
    this.temp = await this.retrieveFile.getTextFile("mdtext").toPromise();
    this.description = JSON.parse(this.temp["message"]);
    this.isLoaded=true;
    } catch(err){
      console.error(err);
    }
  }
  
}
  

