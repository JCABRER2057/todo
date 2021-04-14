import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelloWorldBean } from './welcome-data.service';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  retrieveAllTodos(username: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  retrieveTodo(username: string, todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${todoId}`);
  }

  deleteTodo(username: string, todoId: number) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${todoId}`);
  }

  updateTodo(username: string, todoId: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      `${API_URL}/users/${username}/todos/${todoId}`,
      todo
    );
  }

  createTodo(username: string, todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${API_URL}/users/${username}/todos/`, todo);
  }
}
