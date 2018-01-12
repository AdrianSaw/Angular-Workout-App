import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise } from '../../shared/exercise.model';
import { ExercisesItemComponent } from '../exercises-item/exercises-item.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RouterModule, Routes, ActivatedRoute, Params } from '@angular/router';
import { ExercisesService } from '../exercises.service';
import { WorkoutPlanService } from '../../workout-plan/workout-plan.service';
import { ToastrModule } from 'ngx-toastr';

import { ExercisesCategoryComponent } from './exercises-category.component';

describe('ExercisesCategoryComponent', () => {
  let component: ExercisesCategoryComponent;
  let fixture: ComponentFixture<ExercisesCategoryComponent>;

  const appRoutes: Routes = [
    { path: '', redirectTo: '/exercises', pathMatch: 'full' }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesCategoryComponent, ExercisesItemComponent ],
      imports: [ FormsModule, AccordionModule.forRoot(), RouterModule.forRoot(appRoutes), ToastrModule.forRoot() ],
      providers: [ ExercisesService, WorkoutPlanService, {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
