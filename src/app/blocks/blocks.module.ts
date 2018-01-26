import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	declarations: [
		NavigationComponent,
		HomeComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		NavigationComponent,
		HomeComponent
	]
})

export class BlocksModule { }
