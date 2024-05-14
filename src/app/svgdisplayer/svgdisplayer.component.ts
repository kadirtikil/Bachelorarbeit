import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { RetrieveFileForMDService } from '../retrieve-file-for-md.service';


@Component({
  selector: 'app-svgdisplayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svgdisplayer.component.html',
  styleUrl: './svgdisplayer.component.scss'
})
export class SvgdisplayerComponent implements OnInit {

  // Constructor
  constructor(private retrieveFile: RetrieveFileForMDService, private sanitizer: DomSanitizer) {}

  // Backend value of the svg
  svgPicture: SafeHtml = "";

  // temp value cause i cant use .then na ddont want to start a callback hell
  temp1: any = "";



  async ngOnInit() {
    try{
      this.temp1 = await this.retrieveFile.getTextFile("svgtest").toPromise();
      this.svgPicture = this.sanitizer.bypassSecurityTrustHtml(this.temp1.message);
    } catch(error){
      console.log(error);
    }
  }

}

