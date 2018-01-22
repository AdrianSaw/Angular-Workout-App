import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ExercisesService } from '../exercises-list/exercises.service';
import { WorkoutPlanService } from '../workout-plan/workout-plan.service';
import { Exercise } from './exercise.model';
import 'rxjs/Rx';

@Injectable()
export class WorkoutDataService{

	constructor(private http: Http, private exercisesService: ExercisesService, private workoutPlanService: WorkoutPlanService) {

	}

	storeData() {
		return this.http.put(
			'https://workout-app-ee5ef.firebaseio.com/workouts.json',
			{'exercises': this.exercisesService.getExercises(),
			'workouts': this.workoutPlanService.getWorkoutsList()}
		);
	}

	fetchData() {
		return this.http.get('https://workout-app-ee5ef.firebaseio.com/workouts.json')
			.map(
				(response: Response) => {
					const appData: object = response.json();
					return appData;
				}
			)
			.subscribe(
				(appData: object) => {
					this.exercisesService.setExercises(appData['exercises']);
					this.workoutPlanService.setWrokoutsList(appData['workouts'].value);
				}
			);
}

}