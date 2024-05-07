import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { RetrieveFileForMDService } from '../retrieve-file-for-md.service';

import { ConcurrencyComponent } from '../concurrency/concurrency.component';
import { DataintensiveComponent } from '../dataintensive/dataintensive.component';
import { VertRechComponent } from '../vert-rech/vert-rech.component';


@Component({
  selector: 'app-functional-concepts-explaination',
  standalone: true,
  imports: [MarkdownModule, CommonModule, ConcurrencyComponent, DataintensiveComponent, 
    VertRechComponent,
  ],
  templateUrl: './functional-concepts-explaination.component.html',
  styleUrl: './functional-concepts-explaination.component.scss'
})
export class FunctionalConceptsExplainationComponent implements OnInit{
  @Input() headline: string= "";
  @Input() description: any;
  
  // Boolean value to Render headline if component is supposed to have a headline
  hasHeadline: boolean = false;

  //Boolean value to Render Markdown if it has one. isloaded is for synchronizing purposes waiting for markdown from backend, then rendering it.
  // because ngoninit is sometimed to fast.
  isLoaded: boolean = false;
  hasMarkdown: boolean = false;
  
  // Boolean for div that contains the application. 
  hasApplication: boolean = false;

  // temporary placeholer, cause i cant adress a payload from server as json immediatly. have to save it here first then it works.
  temp: any = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private retrieveFile: RetrieveFileForMDService) {}


  async ngOnInit() {
    try {
      this.headline = this.data.headline;

      const mappedOptions: { [key: string]: string } = {
        "Pure Functions": "pf",
        "Higher Order Functions": "hof",
        "Immutability": "imm",
        "Monads": "mon",
        "Pattern Matching": "pm",
        "Lazy Evaluation": "le",
        "Sicherheitsanforderungen": "sec",
        "Wartbar-, Erweiterbar- und Testbarkeit": "wet",
        "Fehlertoleranz": "ft",
        "Performance": "perf",
        "Struktur": "strc",
      };

      const mappedOptionswithApplications: {[key: string]: string} = {
        "Verteiltes Rechnen": "ds",
        "Concurrency": "conc",
        "Datenintensiv": "di",
        "Message Passing": "mp",
      }

      const headlineString = this.headline.toString();
      
      if(this.headline in mappedOptions){
        const fileId = mappedOptions[headlineString as keyof typeof mappedOptions];
        this.temp = await this.retrieveFile.getTextFile(fileId).toPromise();
        this.description = JSON.parse(this.temp["message"]);
        // Setting the booleans. everything is loadet here time to render.
        // No application. only markdown here.
        this.hasHeadline= true;
        this.hasMarkdown=true;
        this.isLoaded=true;
      } else if(this.headline in mappedOptionswithApplications){
        const fileId = mappedOptionswithApplications[headlineString as keyof typeof mappedOptionswithApplications];
        this.temp = await this.retrieveFile.getTextFile(fileId).toPromise();
        this.description = JSON.parse(this.temp["message"]);
        //

        // Setting the booleans. with applications this time.
        this.hasHeadline = true;
        this.hasMarkdown = true;
        this.isLoaded = true;
        this.hasApplication = true;
      } 
      else {
        this.description ="Stop forging stuff boi";
      }

    } catch(err){
      console.error(err);
    }
  }
  
}
  

