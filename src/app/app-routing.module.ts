import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './blocks/home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'workout', loadChildren: './workout-plan/workouts.module#WorkoutsModule', canLoad: [AuthGuard]},
  { path: 'not-found', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
