import { Component, OnInit } from '@angular/core';
import { ExercisesService } from './exercises.service';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.css'],
  providers: [ExercisesService]
})
export class ExercisesListComponent implements OnInit {

  exercisesCategories: string[];

  constructor( private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.exercisesCategories = this.exercisesService.getExercisesCategories();
  }

}