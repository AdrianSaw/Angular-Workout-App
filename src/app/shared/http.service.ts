import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ExercisesService } from '../exercises-list/exercises.service';
import { WorkoutPlanService } from '../workout-plan/workout-plan.service';
import { Exercise } from './exercise.model';
import { AuthService } from '../auth/auth.service';

import 'rxjs/Rx';

@Injectable()
export class WorkoutDataService{

	constructor(private http: Http, private exercisesService: ExercisesService, private workoutPlanService: WorkoutPlanService, private authService: AuthService) {

	}

	storeData() {
		const token = this.authService.getToken();
		return this.http.put(
			'https://workout-app-ee5ef.firebaseio.com/workouts.json?auth=' + token,
			{'exercises': this.exercisesService.getExercises(),
			'workouts': this.workoutPlanService.getWorkoutsList()}
		);
	}

	fetchData() {
		const token = this.authService.getToken();
		return this.http.get('https://workout-app-ee5ef.firebaseio.com/workouts.json?auth=' + token)
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