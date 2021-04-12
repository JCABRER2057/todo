import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  errorMessage = '';

  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date()),
  // ];

  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance ',
  // };

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  private refreshTodos() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe((response) => {
      this.todos = response;
    });
  }

  deleteTodo(todoId: number) {
    this.todoService.deleteTodo('in28minutes', todoId).subscribe((response) => {
      console.log(response);
      this.errorMessage = 'Delete Successful!';
      this.refreshTodos();
    });
  }

  updateTodo(todoId: number) {
    console.log('update');
    this.router.navigate(['todos', todoId]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
