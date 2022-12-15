import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  _todoService: TodoService;
  
  constructor(_todoService: TodoService) {
    this._todoService = _todoService;
  }
}

