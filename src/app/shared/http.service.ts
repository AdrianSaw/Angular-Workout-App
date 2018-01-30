import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ExercisesService } from '../exercises-list/exercises.service';
import { WorkoutPlanService } from '../workout-plan/workout-plan.service';
import { Exercise } from './exercise.model';
import { AuthService } from '../auth/auth.service';
import { ApiService } from './api.service';

import "rxjs/add/operator/map";

@Injectable()
export class WorkoutDataService {

	private token: string;

	constructor(
		private http: Http, 
		private exercisesService: ExercisesService,
		private workoutPlanService: WorkoutPlanService, 
		private authService: AuthService,
		private apiService: ApiService) {

	}


	httpRequest(url, method) {
		const token = this.authService.getToken();

		if(method == 'put') {
			return this.http.put(
				url + token,
				{'exercises': this.exercisesService.getExercises(),
				'workouts': this.workoutPlanService.getWorkoutsList()}
			);			
		} else if (method == 'get') {
			this.http.get(url + token)
				.map((response: Response) => {
					return response.json();
				})
				.subscribe((appData) => {
					this.exercisesService.setExercises(appData['exercises']);
					this.workoutPlanService.setWrokoutsList(appData['workouts'].value);
				});
		}

	}


}

