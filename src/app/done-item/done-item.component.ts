import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-done-item',
  templateUrl: './done-item.component.html',
  styleUrls: ['./done-item.component.scss'],
})
export class DoneItemComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}

  ngOnInit(): void {}
}
