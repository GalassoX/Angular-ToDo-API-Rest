import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface INewTaskData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskAddComponent {
  constructor(public dialogRef: MatDialogRef<TaskAddComponent>, @Inject(MAT_DIALOG_DATA) public data: INewTaskData) { }

  titleValidator = new FormControl('', [Validators.required]);
  descriptionValidator = new FormControl('', [Validators.required]);

  close(): void {
    this.dialogRef.close();
  }
}
