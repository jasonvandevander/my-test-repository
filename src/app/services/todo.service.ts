import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
import { Completed } from '../classes/completed';


@Injectable({
  providedIn: 'root'
})


export class CompletedService {
  public _completeds: Completed[];
  public _nextId: number;
  public _todos: Todo[];
  public _nextIdZ: number;

  constructor() { 
    this._completeds = [
      new Completed("test1",0),
      new Completed("test2", 1),
      new Completed("test3", 2)
    ];
    this._nextId = this._completeds.length;

    
      this._todos = [
        new Todo("Doctor Appointment", 0),
        new Todo("Going to the Gym ", 1),
        new Todo(" Pick my kids from school", 2)
      ];
      this._nextIdZ = this._todos.length;
    }
  

  public addCompleted(text: string) {
    console.log(this._completeds);
    let completed = new Completed(text, this._nextIdZ);
    this._completeds.push(completed);
    this._nextIdZ++;
  }

   getCompleted(): Completed[] {
    return this._completeds;
  }

  removeCompleted(id: number): void {
    for (let i = 0; i < this._completeds.length; i++) {
      if (this._completeds[i].id == id) {
        this._completeds.splice(i, 1);
      }
    }
  }



  addTodo(text: string) {
    console.log(this._todos);
    let todo = new Todo(text, this._nextIdZ);
    this._todos.push(todo);
    this._nextIdZ++;
  }

  getTodos(): Todo[] {
    return this._todos;
  }

  removeTodo(id: number): void {
    for (let i = 0; i < this._todos.length; i++) {
      if (this._todos[i].id == id) {
        this._todos.splice(i, 1);
      }
    }
  }

  completeToDo(id: number): void {
    let completed = this._todos[id]
    this.removeTodo(id);
    this.addCompleted(completed.text)
  }

  inCompleteToDo(id: number): void {
    let todo = this._completeds[id]
    this.removeCompleted(id);
    this.addTodo(todo.text)
  }


}
