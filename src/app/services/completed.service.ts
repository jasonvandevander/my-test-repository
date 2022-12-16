import { Injectable } from '@angular/core';
import { Completed } from '../classes/completed';

@Injectable({
  providedIn: 'root'
})
export class CompletedService {
  private _completeds: Completed[];
  private _nextId: number;

  constructor() { 
    this._completeds = [
      new Completed("test1",0),
      new Completed("test2", 1),
      new Completed("test3", 2)
    ];
    this._nextId = this._completeds.length;
  }

  addCompleted(text: string) {
    console.log(this._completeds);
    let completed = new Completed(text, this._nextId);
    this._completeds.push(completed);
    this._nextId++;
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
}