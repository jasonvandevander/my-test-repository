import { Component, OnInit } from '@angular/core';
import { CompletedService } from '../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  todoText: string;

  constructor(private todoService: CompletedService) { 
    this.todoText = '';
  }

  ngOnInit() {}

  onAddClick(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = ''; 
  }
} 


