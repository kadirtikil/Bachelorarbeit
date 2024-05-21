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



  async ngOnInit() {
    console.log("hello" + this.data.headline)
    try{
      this.temp1 = await this.retrieveFile.getTextFile("patternmatching").toPromise();
      this.svgPicture = this.sanitizer.bypassSecurityTrustHtml(this.temp1.message);
    } catch(error){
      console.log(error);
    }
  }

}

