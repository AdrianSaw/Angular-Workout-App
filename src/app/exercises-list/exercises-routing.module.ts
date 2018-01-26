import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';

import { ExercisesListComponent } from './exercises-list.component';
import { ExercisesStartComponent } from './exercises-start/exercises-start.component';
import { ExercisesCategoryComponent } from './exercises-category/exercises-category.component';
import { ExercisesDetailComponent } from './exercises-item/exercises-detail/exercises-detail.component';


const exercisesRoutes: Routes = [
  { path: 'exercises', component: ExercisesListComponent, canActivate: [AuthGuard], children: [
    { path: '', component: ExercisesStartComponent },
    { path: ':cat', component: ExercisesCategoryComponent },
    { path: ':cat/:id', component: ExercisesDetailComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(exercisesRoutes)
  ],
  exports: [RouterModule]
})

export class ExercisesRoutingModule { }
