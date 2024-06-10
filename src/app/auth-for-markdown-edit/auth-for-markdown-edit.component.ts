import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup,FormControl, Validators } from '@angular/forms';
import { MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogModule } from '@angular/material/dialog';

import { EditMarkdownComponent } from '../edit-markdown/edit-markdown.component';

import { CheckAuthForMarkdownEditService } from '../service/check-auth-for-markdown-edit.service';

@Component({
  selector: 'app-auth-for-markdown-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './auth-for-markdown-edit.component.html',
  styleUrl: './auth-for-markdown-edit.component.scss'
})
export class AuthForMarkdownEditComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,  public dialog: MatDialog, public thisdialogRef: MatDialogRef<AuthForMarkdownEditComponent>,
    private checkAuth: CheckAuthForMarkdownEditService){}



  authEditForm = new FormGroup({
    chifre1: new FormControl('',[Validators.required]),
    chifre2: new FormControl('',[Validators.required])
  })

  openEditor() {
    
    // use ! for not null assertion!
    this.checkAuth.checkAuthCreds(this.authEditForm.value.chifre1!.toString(), this.authEditForm.value.chifre2!.toString()).subscribe(
      (success) => {
        if(success){
          const dialogConfig = new MatDialogConfig();

          console.log(this,this.authEditForm)

          dialogConfig.data = {headline: this.data.headline, markdown: this.data.markdown, chifre1: this.authEditForm.value.chifre1, chifre2: this.authEditForm.value.chifre2};
          dialogConfig.maxHeight = "90vh";
          dialogConfig.maxWidth = "90vh";
          dialogConfig.minHeight = "45vh";  
          dialogConfig.minWidth = "45vw";
          const dialogRef = this.dialog.open(EditMarkdownComponent, dialogConfig);

          dialogRef.afterClosed().subscribe(() => 
          {
            this.thisdialogRef.close();
          }) 
        } else {
          console.log("not okay");
          this.thisdialogRef.close();
        }
      }
    )
      


  
  }


}
