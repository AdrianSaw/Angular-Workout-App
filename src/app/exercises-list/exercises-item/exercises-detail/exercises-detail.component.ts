import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../../shared/exercise.model';
import { ExercisesService } from '../../exercises.service';
import {
  Router,
  ActivatedRoute,
  Params } from '@angular/router';

@Component({
  selector: 'app-exercises-detail',
  templateUrl: './exercises-detail.component.html',
  styleUrls: ['./exercises-detail.component.css']
})
export class ExercisesDetailComponent implements OnInit {

  exercise: Exercise;
  id: number;
  cat: any;

  constructor(private exercisesService: ExercisesService,
              private router: Router,
              private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.cat = params['cat'];
          this.exercise = this.exercisesService.getExercisesById(this.cat, this.id);
        });
  }

  onAddExerciseToWorkoutPlan(exercise: Exercise) {
    this.exercisesService.addExercisesToWorkoutDraftList(exercise);
  }

  onEditExercise() {
    console.log('TODO: EDIT');
  }
  onRemoveExercise(name: string) {
    this.exercisesService.removeExerciseFromList(name);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
