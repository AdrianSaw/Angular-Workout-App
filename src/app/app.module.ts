import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExercisesModule } from './exercises-list/exercises.module';
import { WorkoutsModule } from './workout-plan/workouts.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlocksModule } from './blocks/blocks.module';
import { WorkoutPlanService } from './workout-plan/workout-plan.service';
import { ExercisesService } from './exercises-list/exercises.service';
import { WorkoutDataService } from './shared/http.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    ExercisesModule,
    WorkoutsModule,
    AuthModule,
    SharedModule,
    ToastrModule.forRoot(),
    BlocksModule
  ],
  providers: [
    WorkoutPlanService, 
    ExercisesService, 
    WorkoutDataService, 
    AuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
