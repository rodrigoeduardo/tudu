import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { InProgressItemComponent } from './in-progress-item/in-progress-item.component';
import { DoneItemComponent } from './done-item/done-item.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, TodoItemComponent, InProgressItemComponent, DoneItemComponent, CreateTodoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
