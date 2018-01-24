import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';

import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { ExercisesStartComponent } from './exercises-list/exercises-start/exercises-start.component';
import { ExercisesCategoryComponent } from './exercises-list/exercises-category/exercises-category.component';
import { ExercisesDetailComponent } from './exercises-list/exercises-item/exercises-detail/exercises-detail.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { WorkoutDetailComponent } from './workout-plan/workout-lists/workout-detail/workout-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { StartPageComponent } from './start-page/start-page.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'home', component: StartPageComponent},
  { path: 'exercises', component: ExercisesListComponent, canActivate: [AuthGuard], children: [
    { path: '', component: ExercisesStartComponent },
    { path: ':cat', component: ExercisesCategoryComponent },
    { path: ':cat/:id', component: ExercisesDetailComponent },
  ]},
  { path: 'workout', component: WorkoutPlanComponent, canActivate: [AuthGuard] },
  { path: 'workout/workout-list/:id', component: WorkoutDetailComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
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
