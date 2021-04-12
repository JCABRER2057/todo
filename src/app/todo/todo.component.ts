import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoId = this.route.snapshot.params.id;
    this.todo = new Todo(this.todoId, '', false, new Date());

    if (this.todoId != -1) {
      this.todoService
        .retrieveTodo('in28minutes', this.todoId)
        .subscribe((data) => (this.todo = data));
    }
  }

  saveTodo() {
    if (this.todoId == -1) {
      // * Create todo
      this.todoService
        .createTodo('in28minutes', this.todo)
        .subscribe((data) => {
          console.log('saved');
          this.router.navigate(['todos']);
        });
    } else {
      this.todoService
        .updateTodo('in28minutes', this.todoId, this.todo)
        .subscribe((data) => {
          console.log('saved');
          this.router.navigate(['todos']);
        });
    }
  }
}
