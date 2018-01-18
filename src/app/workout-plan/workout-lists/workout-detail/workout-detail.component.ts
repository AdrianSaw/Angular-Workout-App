import { Component, OnInit } from '@angular/core';
import { WorkoutList } from '../../../shared/workout-list.model';
import { ExercisesService } from '../../../exercises-list/exercises.service';
import { WorkoutPlanService } from '../../workout-plan.service';
import {
  Router,
  ActivatedRoute,
  Params } from '@angular/router';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})

export class WorkoutDetailComponent implements OnInit {

  workout: WorkoutList;
  id: number;

  constructor( private exercisesService: ExercisesService,
         private router: Router,
         private route: ActivatedRoute,
         private workoutService: WorkoutPlanService ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
         this.workoutService.getWorkoutById(this.id)
            .subscribe(
              (workout: WorkoutList) => {
                this.workout = workout;
              }
            );
      });
   }
   
  backToList() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onRemoveWorkoutList() {
    this.workoutService.removeWorkoutFromList(this.id);
    this.router.navigate(['../../'], {relativeTo: this.route});
  }
}
