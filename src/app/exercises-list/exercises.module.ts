import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExercisesListComponent } from './exercises-list.component';
import { ExercisesStartComponent } from './exercises-start/exercises-start.component';
import { ExercisesCategoryComponent } from './exercises-category/exercises-category.component';
import { ExercisesItemComponent } from './exercises-item/exercises-item.component';
import { ExercisesDetailComponent } from './exercises-item/exercises-detail/exercises-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ExercisesListComponent,
    ExercisesStartComponent,
    ExercisesCategoryComponent,
    ExercisesItemComponent,
    ExercisesDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExercisesRoutingModule,
    SharedModule
  ]
})

export class ExercisesModule { }
