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
    return this.http.get<ITask[]>(this.url, { observe: 'response' });
  }

  getTaskById(id: string) {
    return this.http.get<ITask>(`${this.url}/${id}`, { observe: 'response' });
  }

  createTask(body: IBodyCreateTask) {
    if (!body || !body.title || !body.description) {
      return null;
    }
    return this.http.post<ICreatedTask>(this.url, body, { observe: 'response' });
  }

  editTask(id: string, body: IBodyCreateTask) {
    return this.http.put<ICreatedTask>(`${this.url}/${id}`, body, { observe: 'response' });
  }

  deleteTask(id: string) {
    return this.http.delete<{ message: string }>(`${this.url}/${id}`, { observe: 'response' });
  }
}
