import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ExercisesService } from '../exercises-list/exercises.service';
import { WorkoutPlanService } from '../workout-plan/workout-plan.service';
import { Exercise } from './exercise.model';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkoutDataService {

  private token: string;

  constructor(
    private http: HttpClient,
    private exercisesService: ExercisesService,
    private workoutPlanService: WorkoutPlanService,
    private authService: AuthService) {
  }

  httpRequest(url, method) {
    if (method === 'put') {
      return this.http.put( url,
        {'exercises': this.exercisesService.getExercises(),
        'workouts': this.workoutPlanService.getWorkoutsList()}
      );
    } else if (method === 'get') {
      this.http.get(url)
        .map((response) => {
          return response;
        })
        .subscribe((appData) => {
          this.exercisesService.setExercises(appData['exercises']);
          this.workoutPlanService.setWrokoutsList(appData['workouts'].value);
        });
    }
  }

}
