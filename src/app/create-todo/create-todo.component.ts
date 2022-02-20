import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {
  @Input() componentDisplay: string = 'none';

  constructor() {}

  ngOnInit(): void {}
}
