import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../classes/todo';
import { CompletedService } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  editing: boolean = false;
  public newTodoText!: string;
  
  constructor(private _todoService: CompletedService ) { }

  ngOnInit() {}

  removeTodo() {
    this._todoService.removeTodo(this.todo.id);  
  }

  editTodo() {
    this.editing = true;
  }

  saveTodo() { 
    this.todo.text = this.newTodoText;
    this.editing = false;
  }

  cancelEdit() {
    this.editing = false;
  }

  completeToDo() {
    this._todoService.removeTodo(this.todo.id);
    this._todoService.addCompleted(this.todo.text);
  }

}

  

  
