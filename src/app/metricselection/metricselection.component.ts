import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { CdkDrag } from '@angular/cdk/drag-drop';

import { FunctionalConceptsExplainationComponent } from '../functional-concepts-explaination/functional-concepts-explaination.component';

@Component({
  selector: 'app-metricselection',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CdkDrag],
  templateUrl: './metricselection.component.html',
  styleUrl: './metricselection.component.scss'
})
export class MetricselectionComponent implements OnInit{

  constructor(@Inject(MatDialog) private dialog: MatDialog) { }


  dialogConfig: MatDialogConfig = {
    maxHeight: '90vh',
    maxWidth: '80vh',
  };

  // Dialog für Nebenläufigkeit
  openDialog(headline: any) {
    event?.preventDefault();
    this.dialogConfig.data={headline:headline};
    this.dialog.open(FunctionalConceptsExplainationComponent, this.dialogConfig);
  }

  // Functions for line drawing. Using svg for better zoom scaling.

  // positions of the two elements that will be connected
  positionA = {x:0 , y:0};
  positionB = 0;


  


  // update line if element is dragged
  updateLine(): void {

  }

  // ngoninit to periodically update the line
  ngOnInit(): void {
      //setInterval(()=>console.log(this.positionA), 1000);
  }
}
