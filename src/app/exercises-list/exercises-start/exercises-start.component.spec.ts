import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesStartComponent } from './exercises-start.component';

describe('ExercisesStartComponent', () => {
  let component: ExercisesStartComponent;
  let fixture: ComponentFixture<ExercisesStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
