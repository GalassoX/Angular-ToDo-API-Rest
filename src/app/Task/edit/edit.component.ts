import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ITaskInfo {
  title: string;
  description: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(public dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data: ITaskInfo) { }

  titleValidator = new FormControl('', [Validators.required]);
  descriptionValidator = new FormControl('', [Validators.required]);

  close(): void {
    this.dialogRef.close();
  }
}
