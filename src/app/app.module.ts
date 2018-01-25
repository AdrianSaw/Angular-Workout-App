import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';

import { WorkoutPlanService } from './workout-plan/workout-plan.service';
import { ExercisesService } from './exercises-list/exercises.service';
import { WorkoutDataService } from './shared/http.service';
import { AuthService } from './auth/auth.service';
import { StartPageComponent } from './start-page/start-page.component';

import { AuthGuard } from './auth/auth-guard.service';

import { ExercisesModule } from './exercises-list/exercises.module';
import { WorkoutsModule } from './workout-plan/workouts.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ExercisesModule,
    WorkoutsModule,
    AuthModule,
    SharedModule,
    ToastrModule.forRoot()
  ],
  providers: [WorkoutPlanService, ExercisesService, WorkoutDataService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
