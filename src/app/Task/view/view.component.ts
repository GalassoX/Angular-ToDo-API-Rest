import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITask } from 'app/models/Task';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(public dialogRef: MatDialogRef<ViewComponent>, @Inject(MAT_DIALOG_DATA) public data: ITask) { }

  close(): void {
    this.dialogRef.close();
  }
}
