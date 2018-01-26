import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workout-lists',
  templateUrl: './workout-lists.component.html'
})
export class WorkoutListsComponent implements OnInit {
  @Input('index') index;
  @Input('workout') workout;

  constructor() { }

  ngOnInit() {
  }

}
