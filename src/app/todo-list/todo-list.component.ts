import { Component } from '@angular/core';
import { CompletedService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  _todoService: CompletedService;
  
  constructor(_todoService: CompletedService) {
    this._todoService = _todoService;
  }
}

