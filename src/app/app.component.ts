import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';


import { CdkDrag } from '@angular/cdk/drag-drop';

import { FunctionalConceptsExplainationComponent } from './functional-concepts-explaination/functional-concepts-explaination.component';

import { EditMarkdownComponent } from './edit-markdown/edit-markdown.component';

import { AuthForMarkdownEditComponent } from './auth-for-markdown-edit/auth-for-markdown-edit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CdkDrag, EditMarkdownComponent, ],
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
    minHeight: '75px',
    minWidth: '75px',
  };

  // Dialoge
  openDialog(headline: any) {
    event?.preventDefault();
    this.dialogConfig.data={headline:headline};
    this.dialog.open(FunctionalConceptsExplainationComponent, this.dialogConfig);
  }

  openTestComp() {
    event?.preventDefault();
    this.dialogConfig={
      minHeight: '12vh',
      minWidth: '10vw',
    }
    this.dialog.open(AuthForMarkdownEditComponent, this.dialogConfig)
  }
  /////////////////////////////////////////////////////////////////////////////////
  // not finished funcs line
  // id for one of the draggables.
}
