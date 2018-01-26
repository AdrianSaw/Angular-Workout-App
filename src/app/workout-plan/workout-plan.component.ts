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
  templateUrl: './workout-plan.component.html'
})

export class WorkoutPlanComponent implements OnInit, OnDestroy {

  private exerciseSubscription: Subscription;
  private workoutListSubscription: Subscription;

  exercises: Exercise[] = [];
  workoutsList: WorkoutList[] = [];
  form: any;
  id: number;

  constructor(private workoutPlanService: WorkoutPlanService,
              private exercisesService: ExercisesService,
              private router: Router) { }

  ngOnInit(): void {
    this.workoutPlanService.getExercises()
      .subscribe((exercises: Exercise[]) => {
        this.exercises = exercises ? exercises : null;
      });

    this.workoutPlanService.getWorkoutsList()
      .subscribe((workoutList: WorkoutList[]) => {
        this.workoutsList = workoutList;
      });

    this.exerciseSubscription = this.workoutPlanService.ExercisesChanged
      .subscribe ((exercises: Exercise[]) => {
        this.exercises = exercises;
      });

    this.workoutListSubscription = this.workoutPlanService.WorkoutsListChanged
      .subscribe ((workoutsList: WorkoutList[]) => {
        this.workoutsList = workoutsList;
      });
  }

  addSeriesAndReps(exercise: Exercise, SeriesAndReps ): void {
    this.workoutPlanService.setSeriesAndRepsOfExercise(exercise.name, SeriesAndReps);
  }

  checkExercise(exercise: Exercise): void {
    this.exercisesService.getExerciseID(exercise)
      .subscribe((id: number) => this.id = id);
      
    this.router.navigate(['../exercises/' + exercise.category + '/' + this.id]);
  }

  removeExercise(name: string) {
    this.workoutPlanService.removeExercise(name)
      .subscribe((exercises: Exercise[]) => {
        this.exercises = exercises;
      });
  }

  addNewWorkoutList(form: FormGroup): void {
    this.form = new WorkoutList (form.value.name, this.exercises);
    this.workoutPlanService.addWorkoutToWorkoutList(this.form);
    form.reset();
  }

  ngOnDestroy(): void {
    this.exerciseSubscription.unsubscribe();
    this.workoutListSubscription.unsubscribe();
  }
}
