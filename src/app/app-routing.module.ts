import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCompleteComponent } from './todo-complete/todo-complete.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [ {
  path: '',
  component: TodoListComponent,
  },
  {
    path: 'list',
    component: TodoListComponent
  },
  {
  path: 'input',
  component: TodoInputComponent,
  }, 
  {
    path: 'item',
    component: TodoItemComponent
  },
  {
    path: 'complete',
    component: TodoCompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
