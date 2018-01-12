import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { ExercisesStartComponent } from './exercises-list/exercises-start/exercises-start.component';
import { ExercisesCategoryComponent } from './exercises-list/exercises-category/exercises-category.component';
import { ExercisesDetailComponent } from './exercises-list/exercises-item/exercises-detail/exercises-detail.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { WorkoutDetailComponent } from './workout-plan/workout-lists/workout-detail/workout-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/exercises', pathMatch: 'full' },
  { path: 'exercises', component: ExercisesListComponent, children: [
    { path: '', component: ExercisesStartComponent },
    { path: ':cat', component: ExercisesCategoryComponent },
    { path: ':cat/:id', component: ExercisesDetailComponent },
  ]},
  { path: 'workout', component: WorkoutPlanComponent },
  { path: 'workout/workout-list/:id', component: WorkoutDetailComponent },
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
