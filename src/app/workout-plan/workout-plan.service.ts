import { Injectable } from '@angular/core';
import { Exercise } from '../shared/exercise.model';
import { WorkoutList } from '../shared/workout-list.model';
import { Subject } from 'rxjs/Subject';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class WorkoutPlanService {

  ExercisesChanged = new Subject<Exercise[]>();
  WorkoutsListChanged = new Subject<WorkoutList[]>();

  private exercises: Exercise[] = [];
  private workoutsList: WorkoutList[] = [];

  constructor(private toastr: ToastrService) { }

  getExercises(): Observable<Exercise[]> {
    return of(this.exercises);
  }

  addExercises( exercise: Exercise): void {
    this.exercises.push(exercise);
    this.ExercisesChanged.next(this.exercises.slice());
  }

  changeExercises (name: string, newExercise: Exercise): void {
    this.exercises.filter( (exercise) => {
      if (exercise.name === name) {
        exercise.name = newExercise.name;
        exercise.desc = newExercise.desc;
        exercise.imagePath = newExercise.imagePath;
      }
    });
    this.ExercisesChanged.next(this.exercises.slice());
  }

  removeExercise(name: string): Observable<Exercise[]> {
    this.exercises = this.exercises.slice().filter( (exercise) => exercise.name !== name);
    return of(this.exercises.slice());
  }

  setSeriesAndRepsOfExercise(name: string, seriesAndReps): void {
    const exerciseComplement = this.exercises.filter( (exercise) => exercise.name === name);
    if (seriesAndReps.name.indexOf('series') !== -1) {
      exerciseComplement[0].series = seriesAndReps.value;
    } else {
      exerciseComplement[0].repetition = seriesAndReps.value;
    }
    this.ExercisesChanged.next(this.exercises.slice());
  }

  setWrokoutsList(workoutsList: WorkoutList[]): void {
    this.workoutsList = workoutsList ? workoutsList : [];
    this.WorkoutsListChanged.next(this.workoutsList.slice());
  }

  getWorkoutsList(): Observable<WorkoutList[]> {
    return of(this.workoutsList.slice());
  }

  getWorkoutById(id: number): Observable<WorkoutList> {
    return of(this.workoutsList.slice()[id]);
  }

  addWorkoutToWorkoutList(workout: WorkoutList): void {
    this.workoutsList.push(workout);
    this.WorkoutsListChanged.next(this.workoutsList.slice());
    this.toastr.success('Workout added to list!');
  }

  editWorkoutList(): void {
    console.log('TODO');
  }

  removeWorkoutFromList(id: number): void {
    this.workoutsList = this.workoutsList.slice().filter( (workout, index) => index !== id);
  }

}
