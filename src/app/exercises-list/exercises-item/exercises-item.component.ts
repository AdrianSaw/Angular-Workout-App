import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercises-item',
  template: `
	<a
		[routerLink]="[index]"
		routerLinkActive="active"
		class="list-group-item"
		style="cursor:pointer;">
		<h5 class="list-group-item-heading">{{index +1}}.&nbsp;{{exercise.name}}</h5>
		<img
			[src]="exercise.imagePath"
			alt="{{exercise.name}}"
			class="img-responsive"
			style="max-height: 50px;">
	</a>
  `
})

export class ExercisesItemComponent {
  @Input('exercise') exercise;
  @Input('index') index;

}
