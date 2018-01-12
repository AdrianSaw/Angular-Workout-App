import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-item',
  templateUrl: './exercises-item.component.html',
  styleUrls: ['./exercises-item.component.css']
})
export class ExercisesItemComponent implements OnInit {
  @Input('exercise') exercise;
  @Input('index') index;

  constructor() { }

  ngOnInit() { }
}
