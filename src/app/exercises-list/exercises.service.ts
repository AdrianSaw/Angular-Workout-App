import { Injectable } from '@angular/core';
import { Exercise } from '../shared/exercise.model';
import { WorkoutPlanService } from '../workout-plan/workout-plan.service';
import { Subject } from 'rxjs/Subject';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ExercisesService {

  ExercisesChanged = new Subject<Exercise[]>();

  private exercisesCategories = ['Chest', 'Back', 'Legs', 'Biceps', 'Triceps', 'Shoulders', 'ABS', 'Calves', 'Thighs&Buttocks'];

  private exercises: Exercise[] = [];

  constructor(private workoutPlan: WorkoutPlanService,
              private toastr: ToastrService ) { }

  setExercises(exercises: Exercise[]): void {
    this.exercises = exercises ? exercises : [];
    this.ExercisesChanged.next(this.exercises.slice());
    console.log(this.exercises);
  }

  getExercises(): Exercise[] {
    return this.exercises.slice();
  }

  getExercisesCategories(): Observable<string[]> {
    return of(this.exercisesCategories.slice());
  }

  getExercisesByCategory(category: string): Observable<Exercise[]> {
    return of(this.exercises.slice().filter((exe) => exe.category === category));
  }

  getExerciseID({name, category}): Observable<number> {
    let id;
    this.exercises.slice().filter((exe) => exe.category === category).filter((exe, index) => {
      if (exe.name === name) { id = index;}
    });
    return of(id);
  }

  getExercisesById(category: string, id: number): Observable<Exercise> {
    return of(this.exercises.slice().filter((exe) => exe.category === category.toLowerCase())[id]);
  }

  removeExerciseFromList(name: string): void {
    this.exercises = this.exercises.filter((exe) => exe.name !== name);
    this.ExercisesChanged.next(this.exercises.slice());
    this.toastr.success('Exercise removed');
    this.workoutPlan.removeExercise(name);
  }

  addNewExercisesToList(exercise: Exercise): void {
    if (this.exercises.filter((exe) => exe.name === exercise.name).length < 1) {
      this.exercises.push(exercise);
      this.ExercisesChanged.next(this.exercises.slice().filter((exe) => exe.category === exercise.category));
      this.toastr.success('New exercise added');
    } else {
      this.toastr.error('There is such exercise already');
    }
  }
  
  editExercise(exercise: Exercise, newExercise: Exercise): void {
    // add id to exercise model to make it clean
    const editedExercise = this.exercises.filter((exe, index) => {
      if (exe.name === exercise.name &&
          newExercise.name !== exe.name ||
          newExercise.desc !== exe.desc ||
          newExercise.imagePath !== exe.imagePath) {

        if (this.exercises.filter((exe) => exe.name === newExercise.name).length < 1) {
          this.workoutPlan.changeExercises(exe.name, newExercise);
          exe.name = newExercise.name;
          exe.imagePath = newExercise.imagePath;
          exe.category = newExercise.category;
          exe.desc = newExercise.desc;
          this.ExercisesChanged.next(this.exercises.slice());
          this.toastr.success('Exercise edited');
        }

      } else {
        this.toastr.error('Nothing changed or exercise already exist');
      }
    });    
  }

  addExercisesToWorkoutDraftList(exercise: Exercise): void {
    this.workoutPlan.getExercises()
      .subscribe((exercises: Exercise[]) => {
        if (exercises.filter((exe) => exe.name === exercise.name).length < 1) {
          this.workoutPlan.addExercises(exercise);
          this.toastr.success('Exercise added to workout draft');       
        } else {
          this.toastr.error('Exercise already added');
        }
      });
  }

}
