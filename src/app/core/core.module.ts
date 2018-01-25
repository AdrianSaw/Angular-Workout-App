import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { StartPageComponent } from './start-page/start-page.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { WorkoutPlanService } from '../workout-plan/workout-plan.service';
import { ExercisesService } from '../exercises-list/exercises.service';
import { WorkoutDataService } from '../shared/http.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
	declarations: [
		NavigationComponent,
		StartPageComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		NavigationComponent
	],
	providers: [WorkoutPlanService, ExercisesService, WorkoutDataService, AuthService, AuthGuard]
})

export class CoreModule {}