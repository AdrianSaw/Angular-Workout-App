import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercisesCategoryComponent } from '../exercises-category/exercises-category.component';
import { ExercisesListComponent } from '../exercises-list.component';

import { ExercisesItemComponent } from './exercises-item.component';

describe('ExercisesItemComponent', () => {
  let component: ExercisesItemComponent;
  let fixture: ComponentFixture<ExercisesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ExercisesItemComponent,
      ExercisesCategoryComponent,
      ExercisesListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
