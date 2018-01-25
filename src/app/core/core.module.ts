import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { StartPageComponent } from './start-page/start-page.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


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
	]
})

export class CoreModule {}