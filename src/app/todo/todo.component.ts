import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoId: number = 0;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todoId = this.route.snapshot.params.id;
    this.todo = new Todo(1, '', false, new Date());
    this.todoService
      .retrieveTodo('in28minutes', this.todoId)
      .subscribe((data) => (this.todo = data));
  }

  saveTodo() {
    this.todoService
      .updateTodo('in28minutes', this.todoId, this.todo)
      .subscribe((data) => console.log('saved'));
  }
}
