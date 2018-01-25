import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';

import { WorkoutPlanComponent } from './workout-plan.component';
import { WorkoutDetailComponent } from './workout-lists/workout-detail/workout-detail.component';



const workoutsRoutes: Routes = [
  { path: '', component: WorkoutPlanComponent, canActivate: [AuthGuard] },
  { path: 'workout-list/:id', component: WorkoutDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(workoutsRoutes)
  ],
  exports: [RouterModule]
})
export class WorkoutsRoutingModule { }
