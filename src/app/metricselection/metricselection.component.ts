import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { FunctionalConceptsExplainationComponent } from '../functional-concepts-explaination/functional-concepts-explaination.component';

@Component({
  selector: 'app-metricselection',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ],
  templateUrl: './metricselection.component.html',
  styleUrl: './metricselection.component.scss'
})
export class MetricselectionComponent {

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
}
