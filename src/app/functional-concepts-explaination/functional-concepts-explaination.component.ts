import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogConfig, } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { RetrieveFileForMDService } from '../service/retrieve-file-for-md.service';

import { NgxPanZoomModule } from 'ngx-panzoom';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { SvgdisplayerComponent } from '../svgdisplayer/svgdisplayer.component';
import { EditMarkdownComponent } from '../edit-markdown/edit-markdown.component';


@Component({
  selector: 'app-functional-concepts-explaination',
  standalone: true,
  imports: [MarkdownModule, MatDialogModule, CommonModule, 
    NgxPanZoomModule, SvgdisplayerComponent, EditMarkdownComponent,
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

  // Boolean for div if it need to contain a svg for the panzoom
  hasSvg: boolean = false;
  svgPicture: SafeHtml = "";

  // temporary placeholer, cause i cant adress a payload from server as json immediatly. have to save it here first then it works.
  temp: any = "";
  temp1: any = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private retrieveFile: RetrieveFileForMDService,
  private sanitizer: DomSanitizer, private http: HttpClient, private dialog: MatDialog) {}


  async ngOnInit() {
    try {
      this.headline = this.data.headline;

      const mappedOptions: { [key: string]: string } = {
        "Sicherheitsanforderungen": "sec",
        "Wartbar-, Erweiterbar- und Testbarkeit": "wet",
        "Performance": "perf",
        "Currying": "cr",
        "Persistente Datenstrukturen": "ps",
        "Compilerbau": "cb",
        "Concurrency": "conc",
        "Higher Order Functions": "hof",
        "Lazy Evaluation": "le",
        "Rekursion": "rk",
        "WhatsApp": "wa",
        "Apache Spark": "aps",
        "Apache Kafka": "apk",
        "Playframework": "plfr",
        "Google": "ggl",
        "Arten des Pattern-Matchings": "apm"
      };

      const mappedOptionswithApplications: string[] = [
        "Verteiltes Rechnen",
        "Datenintensiv",
        "Message Passing",
      ]

      const mappedOptionsWithSvg : string[] = [
        "Pure Functions",
        "Immutability",
        "Pattern Matching",
        "Funktionskomposition",
        "LiChess",
      ]

      const headlineString = this.headline.toString();
      
      if(this.headline in mappedOptions){
        this.temp = await this.retrieveFile.getTextFile(headlineString).toPromise();
        this.description = (this.temp.message);
        // Setting the booleans. everything is loadet here time to render.
        // No application. only markdown here.
        this.hasHeadline= true;
        this.hasMarkdown=true;
        this.isLoaded=true;

      } else if(this.headline in mappedOptionswithApplications){
        this.temp = await this.retrieveFile.getTextFile(headlineString).toPromise();
        //this.description = JSON.parse(this.temp.message);
        this.description = (this.temp.message);
        // Setting the booleans. with applications this time.
        this.hasHeadline = true;
        this.hasMarkdown = true;
        this.isLoaded = true;
        this.hasApplication = true;
      } else if(this.headline in mappedOptionsWithSvg) {
        this.temp = await this.retrieveFile.getTextFile(headlineString).toPromise();
        this.description = (this.temp.message);


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

  openSVG(headline: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {headline: headline};
    dialogConfig.maxHeight = "90vh";
    dialogConfig.maxWidth = "90vh";
    this.dialog.open(SvgdisplayerComponent, dialogConfig);
  }
  
  openEditor(markdown: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {headline: this.headline, markdown: markdown};
    dialogConfig.maxHeight = "90vh";
    dialogConfig.maxWidth = "90vh";
    dialogConfig.minHeight = "45vh";  
    dialogConfig.minWidth = "45vw";
    const dialogRef = this.dialog.open(EditMarkdownComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      this.isLoaded = false;
      this.ngOnInit();
    })

  }
  
}
  

