import { Component, OnInit, OnDestroy, Input, HostBinding  } from '@angular/core';
import { Exercise } from '../../shared/exercise.model';
import { ExercisesService } from '../exercises.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-exercises-category',
  templateUrl: './exercises-category.component.html',
  styleUrls: ['./exercises-category.component.css']
})
export class ExercisesCategoryComponent implements OnInit, OnDestroy {

  exercises: Exercise[];
  form: any;
  category: any;
  name: any;
  imgUrl: any;
  description: any;
  openIcon = "fa fa-plus";
  private subscription: Subscription;

  constructor( private exercisesService: ExercisesService,
          private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params
      .subscribe( (params: Params) => {
        this.category = params.cat.toLowerCase();

        this.exercisesService.getExercisesByCategory(this.category)
            .subscribe(
              (exercises: Exercise[]) => this.exercises = exercises);
        });


    this.subscription = this.exercisesService.ExercisesChanged
      .subscribe (
        (exercises: Exercise[]) => {
          this.exercises = exercises;
        }
      );
  }

  toggleIcon(event: boolean) {
    this.openIcon = event ? "fa fa-minus" : "fa fa-plus";
  }

  onAddNewExercise(form: FormGroup) {
    this.form = new Exercise (
      form.value.name,
      form.value.description,
      this.category,
      form.value.imgUrl
    );

    this.exercisesService.addNewExercisesToList(this.form);

    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
