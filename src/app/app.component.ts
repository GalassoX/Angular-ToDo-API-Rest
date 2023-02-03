import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITask } from './models/Task';
import { TaskService } from './Service/task.service';
import { TaskAddComponent } from './Task/add/taskadd.component';
import { DeleteComponent } from './Task/delete/delete.component';
import { EditComponent } from './Task/edit/edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'options'];

  newTaskTitle: string;
  newTaskDescription: string;

  data: ITask[];

  constructor(private service: TaskService, public dialog: MatDialog) { }

  ngOnInit() {
    this.fetchTasks();
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

      if (!created) return;
      created.subscribe(() => {
        this.fetchTasks();
      });
    });
  }

  editTask(id: string) {
    const dialogRef = this.dialog.open(EditComponent, {
      data: {
        title: '',
        description: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      this.service.editTask(id, result).subscribe(result => {
        if (result.status == 200) {
          this.fetchTasks();
        }
      });
    });

  }

  deleteTask(id: string) {
    const dialogRef = this.dialog.open(DeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      this.service.deleteTask(id).subscribe(result => {
        if (result.status === 200) {
          this.fetchTasks();
        }
      });
    });
  }


  private fetchTasks() {
    this.service.getTasks()
      .subscribe(data => {
        if (!data.body) return;
        this.data = data.body.map(d => ({
          ...d,
          createdAt: new Date(d.createdAt),
          updatedAt: new Date(d.updatedAt)
        }));
      });
  }
}