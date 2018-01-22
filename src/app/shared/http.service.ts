import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ExercisesService } from '../exercises-list/exercises.service';
import { Exercise } from './exercise.model';
import 'rxjs/Rx';

@Injectable()
export class WorkoutDataService{

	constructor(private http: Http, private exercisesService: ExercisesService) {

	}

	storeData() {
		return this.http.put(
			'https://workout-app-ee5ef.firebaseio.com/workouts.json',
			this.exercisesService.getExercises()
		);
	}

	fetchData() {
		return this.http.get('https://workout-app-ee5ef.firebaseio.com/workouts.json')
			.map(
				(response: Response) => {
					console.log(response);
					const exercises: Exercise[] = response.json();
					return exercises;
				}
			)
			.subscribe(
				(exercises: Exercise[]) => {
					this.exercisesService.setExercises(exercises);
				}
			);
}

}