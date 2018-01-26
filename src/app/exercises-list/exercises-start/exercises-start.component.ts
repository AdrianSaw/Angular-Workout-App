import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-start',
  template: `
		<p class="text-center bold empty">
			Please select a exercise category
		</p>
	`
})
export class ExercisesStartComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
