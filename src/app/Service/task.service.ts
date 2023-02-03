import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITask } from 'app/models/Task';

interface IBodyCreateTask {
  title: string;
  description: string;
}

interface ICreatedTask {
  message: string;
  task: ITask;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/tasks';

  getTasks() {
    return this.http.get<ITask[]>(this.url);
  }

  getTaskById(id: string) {
    return this.http.get<ITask>(`${this.url}/${id}`);
  }

  createTask(body: IBodyCreateTask) {
    const errors: string[] = [];
    if (!body.title) {
      errors.push('Invalid title');
    }
    if (!body.description) {
      errors.push('Invalid description');
    }
    if (errors.length) {
      return errors;
    }
    return this.http.post<ICreatedTask>(this.url, body);
  }

  editTask(id: string, body: IBodyCreateTask) {
    return this.http.put<ICreatedTask>(`${this.url}/${id}`, body);
  }

  deleteTask(id: string) {
    return this.http.delete<{ message: string }>(`${this.url}/${id}`);
  }
}
