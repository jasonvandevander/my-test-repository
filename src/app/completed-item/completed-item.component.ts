import { Component, Input, OnInit } from '@angular/core';
import { Completed } from '../classes/completed';
import { CompletedService } from '../services/todo.service';

@Component({
  selector: 'app-completed-item',
  templateUrl: './completed-item.component.html',
  styleUrls: ['./completed-item.component.css']
})
export class CompletedItemComponent implements OnInit {
  @Input()
  completed!: Completed;
  editing: boolean = false;
  public newCompletedText!: string;
  
  constructor(private _CompletedService: CompletedService ) { }

  ngOnInit() {}

  removeCompleted() {
    this._CompletedService.removeCompleted(this.completed.id);  
  }

  editCompleted() {
    this.editing = true;
  }

  saveCompleted() { 
    this.completed.text = this.newCompletedText;
    this.editing = false;
  }

  cancelEdit() {
    this.editing = false;
  }

  incompleteToDo() {
    this._CompletedService.removeCompleted(this.completed.id);
    this._CompletedService.addTodo(this.completed.text);
  }

}
