import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { ExercisesStartComponent } from './exercises-list/exercises-start/exercises-start.component';
import { ExercisesCategoryComponent } from './exercises-list/exercises-category/exercises-category.component';
import { ExercisesItemComponent } from './exercises-list/exercises-item/exercises-item.component';
import { ExercisesDetailComponent } from './exercises-list/exercises-item/exercises-detail/exercises-detail.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { WorkoutListsComponent } from './workout-plan/workout-lists/workout-lists.component';
import { WorkoutDetailComponent } from './workout-plan/workout-lists/workout-detail/workout-detail.component';
import { WorkoutPlanService } from './workout-plan/workout-plan.service';
import { ExercisesService } from './exercises-list/exercises.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { WorkoutDataService } from './shared/http.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { StartPageComponent } from './start-page/start-page.component';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ExercisesListComponent,
    ExercisesStartComponent,
    ExercisesCategoryComponent,
    ExercisesItemComponent,
    ExercisesDetailComponent,
    WorkoutPlanComponent,
    WorkoutListsComponent,
    WorkoutDetailComponent,
    NotFoundComponent,
    SigninComponent,
    SignupComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [WorkoutPlanService, ExercisesService, WorkoutDataService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
