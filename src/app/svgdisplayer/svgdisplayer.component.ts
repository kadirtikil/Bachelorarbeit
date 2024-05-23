import { Component, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { RetrieveFileForMDService } from '../retrieve-file-for-md.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-svgdisplayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svgdisplayer.component.html',
  styleUrl: './svgdisplayer.component.scss'
})
export class SvgdisplayerComponent implements OnInit {

  // Constructor
  constructor(private retrieveFile: RetrieveFileForMDService, private sanitizer: DomSanitizer, 
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}


  @Input() headline: string = "";

  // Backend value of the svg
  svgPicture: SafeHtml = "";

  // temp value cause i cant use .then na ddont want to start a callback hell
  temp1: any = "";


  // Boolean to render the svg when its loadet
  svgRendered: boolean = false;



  async ngOnInit() {

    const svgLinkMapper :{[key: string]: string} = {
      "Pure Functions": "purefunction",
      "Higher Order Functions": "hofsvg",
      "Immutability": "immutable",
      "Monads": "monads",
      "Pattern Matching": "patternmatching",
      "Funktionskomposition": "funccomp",
      "Rekursion": "recursionsvg",
      "Lazy Evaluation": "lazyevalsvg"
    }

    this.headline = this.data.headline;

    const headlineAsString = this.headline.toString();

    try{
      if(this.headline in  svgLinkMapper){
        const link = svgLinkMapper[headlineAsString as keyof typeof svgLinkMapper];
        

        this.temp1 = await this.retrieveFile.getTextFile(link).toPromise();
        this.svgPicture = this.sanitizer.bypassSecurityTrustHtml(this.temp1.message);

        this.svgRendered = true;
      }
    } catch(error){
      console.log(error);
    }
  }

}

