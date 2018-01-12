import { Exercise } from './exercise.model';

export class WorkoutList {
  constructor( public name: string, public exercises: Exercise[]) {
    this.name = name;
    this.exercises = exercises;
  }
}
