import { HttpClient, HttpResponse } from '@angular/common/http';
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
    return this.http.get<HttpResponse<ITask[]>>(this.url);
  }

  getTaskById(id: string) {
    return this.http.get<HttpResponse<ITask>>(`${this.url}/${id}`);
  }

  createTask(body: IBodyCreateTask) {
    if (!body || !body.title || !body.description) {
      return null;
    }
    return this.http.post<HttpResponse<ICreatedTask>>(this.url, body);
  }

  editTask(id: string, body: IBodyCreateTask) {
    return this.http.put<HttpResponse<ICreatedTask>>(`${this.url}/${id}`, body);
  }

  deleteTask(id: string) {
    return this.http.delete<HttpResponse<{ message: string }>>(`${this.url}/${id}`);
  }
}
