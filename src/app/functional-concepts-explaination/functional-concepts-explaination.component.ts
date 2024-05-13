import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { RetrieveFileForMDService } from '../retrieve-file-for-md.service';

import { NgxPanZoomModule, PanZoomConfig, PanZoomAPI, PanZoomModel, PanZoomConfigOptions } from 'ngx-panzoom';

import { ConcurrencyComponent } from '../concurrency/concurrency.component';
import { DataintensiveComponent } from '../dataintensive/dataintensive.component';
import { VertRechComponent } from '../vert-rech/vert-rech.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { options } from 'marked';


@Component({
  selector: 'app-functional-concepts-explaination',
  standalone: true,
  imports: [MarkdownModule, CommonModule, ConcurrencyComponent, DataintensiveComponent, 
    VertRechComponent, NgxPanZoomModule,
  ],
  templateUrl: './functional-concepts-explaination.component.html',
  styleUrl: './functional-concepts-explaination.component.scss'
})
export class FunctionalConceptsExplainationComponent implements OnInit{
  @Input() headline: string= "";
  @Input() description: any;
  
  // panzoom configurations
  panzoomConfig: PanZoomConfig = new PanZoomConfig( {
    zoomLevels: 5,
    initialZoomLevel: 2,
    initialPanX: 10,
    initialPanY: 10,
    neutralZoomLevel: 1,
    scalePerZoomLevel: 2,
    friction: 10,
    haltSpeed: 100,
  });
  // Boolean value to Render headline if component is supposed to have a headline
  hasHeadline: boolean = false;

  //Boolean value to Render Markdown if it has one. isloaded is for synchronizing purposes waiting for markdown from backend, then rendering it.
  // because ngoninit is sometimed to fast.
  isLoaded: boolean = false;
  hasMarkdown: boolean = false;
  
  // Boolean for div that contains the application. 
  hasApplication: boolean = false;

  // Boolean for div if it need to contain a svg for the panzoom
  hasSvg: boolean = false;
  svgPicture: SafeHtml = "";

  // temporary placeholer, cause i cant adress a payload from server as json immediatly. have to save it here first then it works.
  temp: any = "";
  temp1: any = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private retrieveFile: RetrieveFileForMDService,
  private sanitizer: DomSanitizer, private http: HttpClient) {}


  async ngOnInit() {
    try {
      this.headline = this.data.headline;

      const mappedOptions: { [key: string]: string } = {
        "Sicherheitsanforderungen": "sec",
        "Wartbar-, Erweiterbar- und Testbarkeit": "wet",
        "Performance": "perf",
        "Struktur": "strc",
      };

      const mappedOptionswithApplications: {[key: string]: string} = {
        "Verteiltes Rechnen": "ds",
        "Concurrency": "conc",
        "Datenintensiv": "di",
        "Message Passing": "mp",
      }

      const mappedOptionsWithSvg :{[key: string]: string} = {
        "Pure Functions": "pf",
        "Higher Order Functions": "hof",
        "Immutability": "imm",
        "Monads": "mon",
        "Pattern Matching": "pm",
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

        // Setting the booleans. with applications this time.
        this.hasHeadline = true;
        this.hasMarkdown = true;
        this.isLoaded = true;
        this.hasApplication = true;
      } else if(this.headline in mappedOptionsWithSvg) {
        const fileId = mappedOptionsWithSvg[headlineString as keyof typeof mappedOptionsWithSvg];
        this.temp = await this.retrieveFile.getTextFile(fileId).toPromise();
        this.description = JSON.parse(this.temp["message"]);
        // Get the SVG picture a string from backend
        //this.http.get(`http://localhost:5000/svgtest)`).subscribe((response: any)=>
        //{this.svgPicture = this.sanitizer.bypassSecurityTrustHtml(response.message)})
        this.temp1 = await this.retrieveFile.getTextFile("svgtest").toPromise();
        this.svgPicture = this.sanitizer.bypassSecurityTrustHtml(this.temp1.message);


        // later pass in the svg here and handle the behaviour
        this.hasHeadline = true;
        this.hasMarkdown = true;
        this.hasSvg = true;
        this.isLoaded = true;

      } else {
        this.description ="Stop forging stuff boi";

      }

    } catch(err){
      console.error(err);
    }
  }
  
}
  

