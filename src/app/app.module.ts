import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoCompleteComponent } from './todo-complete/todo-complete.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { CompletedService } from './services/todo.service';
import { TodoNavComponent } from './todo-nav/todo-nav.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { CompletedInputComponent } from './completed-input/completed-input.component';
import { CompletedItemComponent } from './completed-item/completed-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoItemComponent,
    TodoCompleteComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoNavComponent,
    TodoListComponent,
    CompletedListComponent,
    CompletedInputComponent,
    CompletedItemComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],

  providers: [CompletedService],
  bootstrap: [AppComponent]
})

export class AppModule { }
