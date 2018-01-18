import { Component, OnInit } from '@angular/core';
import { ExercisesService } from './exercises.service';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.css']
})
export class ExercisesListComponent implements OnInit {

  exercisesCategories: string[];

  constructor( private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.exercisesService.getExercisesCategories()
    	.subscribe(
    		(exercisesCategories) => this.exercisesCategories = exercisesCategories);
  }

}
