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
  templateUrl: './workout-detail.component.html'
})

export class WorkoutDetailComponent implements OnInit {

  workout: WorkoutList;
  id: number;

  constructor (private exercisesService: ExercisesService,
               private router: Router,
               private route: ActivatedRoute,
               private workoutService: WorkoutPlanService ) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.workoutService.getWorkoutById(this.id)
          .subscribe((workout: WorkoutList) => {
            this.workout = workout;
          });
      });
  }
   
  backToList(): void {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onRemoveWorkoutList(): void {
    this.workoutService.removeWorkoutFromList(this.id);
    this.router.navigate(['../../'], {relativeTo: this.route});
  }
}
