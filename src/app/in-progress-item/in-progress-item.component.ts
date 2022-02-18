import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-progress-item',
  templateUrl: './in-progress-item.component.html',
  styleUrls: ['./in-progress-item.component.scss'],
})
export class InProgressItemComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() progress: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
