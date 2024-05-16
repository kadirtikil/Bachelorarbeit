import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';


import { CdkDrag, CdkDragMove } from '@angular/cdk/drag-drop';

import * as d3 from 'd3';

import { FunctionalConceptsExplainationComponent } from './functional-concepts-explaination/functional-concepts-explaination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CdkDrag ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EGFuPSFrontend';
  constructor(@Inject(MatDialog) private dialog: MatDialog, private elementRef: ElementRef) { }



  ////////////////////////////////////////////////////////////////////////////////////////
  // finished funcs line
  dialogConfig: MatDialogConfig = {
    maxHeight: '90vh',
    maxWidth: '90vh',
  };

  // Dialoge
  openDialog(headline: any) {
    event?.preventDefault();
    this.dialogConfig.data={headline:headline};
    this.dialog.open(FunctionalConceptsExplainationComponent, this.dialogConfig);
  }
  /////////////////////////////////////////////////////////////////////////////////
  // not finished funcs line
  // id for one of the draggables.
}
