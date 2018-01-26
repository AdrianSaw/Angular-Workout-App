import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutPlanComponent } from './workout-plan.component';
import { WorkoutListsComponent } from './workout-lists/workout-lists.component';
import { WorkoutDetailComponent } from './workout-lists/workout-detail/workout-detail.component';

@NgModule({
	declarations: [
	    WorkoutPlanComponent,
	    WorkoutListsComponent,
	    WorkoutDetailComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		WorkoutsRoutingModule
	]
})

export class WorkoutsModule { }
