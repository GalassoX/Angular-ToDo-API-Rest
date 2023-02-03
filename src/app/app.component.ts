import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITask } from './models/Task';
import { TaskService } from './Service/task.service';
import { TaskAddComponent } from './Task/add/taskadd.component';

const DATA: ITask[] = [
  { id: "5as651c6a", title: "Test", description: "Description", createdAt: new Date(), updatedAt: new Date() },
  { id: "5as651c6a", title: "Test", description: "Description", createdAt: new Date(), updatedAt: new Date() },
  { id: "5as651c6a", title: "Test", description: "Description", createdAt: new Date(), updatedAt: new Date() },
  { id: "5as651c6a", title: "Test", description: "Description", createdAt: new Date(), updatedAt: new Date() },
  { id: "5as651c6a", title: "Test", description: "Description", createdAt: new Date(), updatedAt: new Date() },
  { id: "5as651c6a", title: "Test", description: "Description", createdAt: new Date(), updatedAt: new Date() }
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'options'];
  dataSource = DATA;

  newTaskTitle: string;
  newTaskDescription: string;

  data: ITask[];

  constructor(private service: TaskService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getTasks()
      .subscribe(data => {
        this.data = data;
      });
  }

  openDialogCreateTask(): void {
    const dialogRef = this.dialog.open(TaskAddComponent, {
      data: {
        title: this.newTaskTitle,
        description: this.newTaskDescription
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      this.newTaskTitle = result.title;
      this.newTaskDescription = result.description;

      const created = this.service.createTask({
        title: this.newTaskTitle,
        description: this.newTaskDescription
      });
      console.log(created);
    });
  }

  editTask() {

  }

  deleteTask() {

  }
}