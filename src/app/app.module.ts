import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';

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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [WorkoutPlanService, ExercisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
