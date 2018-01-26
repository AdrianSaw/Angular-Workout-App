import { Component, OnInit } from '@angular/core';
import { ExercisesService } from './exercises.service';

@Component({
  template: `
    <div class="row exercises">
      <div class="col-xs-12 col-sm-3 exercises-nav">
        <ul class="list-group light-shadow">
          <li class="exercise-router-item" *ngFor="let category of exercisesCategories" routerLinkActive="active"><a routerLink = "./{{category}}">{{ category }}</a></li>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-9">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})

export class ExercisesListComponent implements OnInit {

  exercisesCategories: string[];

  constructor( private exercisesService: ExercisesService) { }

  ngOnInit() {

    this.exercisesService.getExercisesCategories()
      .subscribe((exercisesCategories) => this.exercisesCategories = exercisesCategories);

  }

}
