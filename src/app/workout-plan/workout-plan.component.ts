import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Exercise } from '../shared/exercise.model';
import { WorkoutList } from '../shared/workout-list.model';
import { WorkoutPlanService } from './workout-plan.service';
import { ExercisesService } from '../exercises-list/exercises.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styleUrls: ['./workout-plan.component.css']
})

export class WorkoutPlanComponent implements OnInit, OnDestroy {

  private exerciseSubscription: Subscription;
  private workoutListSubscription: Subscription;

  exercises: Exercise[];
  workoutsList: WorkoutList[];
  form: any;

  constructor(private workoutPlanService: WorkoutPlanService,
              private exercisesService: ExercisesService,
              private router: Router) { }

  ngOnInit() {
    this.exercises = this.workoutPlanService.getExercises();
    this.workoutsList = this.workoutPlanService.getWorkoutsList();

    this.exerciseSubscription = this.workoutPlanService.ExercisesChanged
      .subscribe (
        (exercises: Exercise[]) => {
          this.exercises = exercises;
        }
      );

    this.workoutListSubscription = this.workoutPlanService.WorkoutsListChanged
      .subscribe (
        (workoutsList: WorkoutList[]) => {
          this.workoutsList = workoutsList;
        }
      );
  }

  addSeriesAndReps(exercise: Exercise, SeriesAndReps ) {
    this.workoutPlanService.setSeriesAndRepsOfExercise(exercise.name, SeriesAndReps);
  }

  checkExercise(exercise: Exercise) {
    const id = this.exercisesService.getExerciseID(exercise);
    this.router.navigate(['../exercises/' + exercise.category + '/' + id]);
  }

  removeExercise(name: string) {
    this.exercises = this.workoutPlanService.removeExercise(name);
  }

  addNewWorkoutList(form: FormGroup) {
    this.form = new WorkoutList (form.value.name, this.exercises);
    this.workoutPlanService.addWorkoutToWorkoutList(this.form);
    form.reset();
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
    this.workoutListSubscription.unsubscribe();
  }
}
