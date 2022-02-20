import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  createTodoDisplay: string = 'none';

  showCreateTodo() {
    this.createTodoDisplay =
      this.createTodoDisplay === 'none' ? 'flex' : 'none';
  }
}
