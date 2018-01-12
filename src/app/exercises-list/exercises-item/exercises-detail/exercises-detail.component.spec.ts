import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercisesService } from '../../exercises.service';
import { WorkoutPlanService } from '../../../workout-plan/workout-plan.service';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

import { ExercisesDetailComponent } from './exercises-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const appRoutes: Routes = [
  { path: '**', redirectTo: 'not-found'}
];

describe('ExercisesDetailComponent', () => {
  let component: ExercisesDetailComponent;
  let fixture: ComponentFixture<ExercisesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExercisesDetailComponent
      ],
      imports: [
        ToastrModule.forRoot(),
        RouterModule.forRoot(appRoutes)
      ],
      providers: [
        ExercisesService,
        WorkoutPlanService,
        ToastrService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
