import { Injectable } from '@angular/core';
import { Exercise } from '../shared/exercise.model';
import { WorkoutList } from '../shared/workout-list.model';
import { Subject } from 'rxjs/Subject';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class WorkoutPlanService {

  ExercisesChanged = new Subject<Exercise[]>();
  WorkoutsListChanged = new Subject<WorkoutList[]>();

  private exercises: Exercise[] = [
    new Exercise(
    'WYCISKANIE SZTANGI W LEŻENIU NA ŁAWCE POZIOMEJ',
    `Kładziemy się na ławce tak, by nogi ugięte były pod kątem prostym i
    przylegały do podłoża. Uchwyt średni(taki, by po opuszczeniu sztangi na klatkę ramiona tworzyły z
    przedramionami kąt prosty-kciuk dla bezpieczeństwa powinien obejmować sztangę-choć wielu bardziej doświadczonych
    kulturystów preferuje raczej tzw. ”małpi chwyt” (kciuk ponad gryfem).Opuszczamy sztangę na klatkę na wysokość
    ok.1 cm powyżej brodawek. Przy opuszczaniu sztangi wykonujemy głęboki wdech-wydychamy powietrze w trakcie wyciskania.
    Można okresowo praktykować przytrzymywanie sztangi przez chwilę na klatce przed wyciśnięciem.(szczególnie przydatne,
    jeżeli mamy w planach ewentualne starty w zawodach w wyciskaniu)-dodatkowo rozbudowuje siłę-pobudza do dodatkowego wysiłku.
    Łokcie prowadzimy w trakcie całego ruchu po bokach-tak by nie „uciekały”do środka. Ruch wyciskania
    kończymy(dla lepszego napięcia mięśni)zanim łokcie zostaną zblokowane.`,
    'chest',
    'http://www.kulturystyka.pl/atlas/klatka_pliki/image008.gif')
  ];

  private workoutsList: WorkoutList[] = [
    new WorkoutList(
      'Test Workout',
      [new Exercise(
        'WYCISKANIE SZTANGI W LEŻENIU NA ŁAWCE POZIOMEJ',
        `Kładziemy się na ławce tak, by nogi ugięte były pod kątem prostym i
        przylegały do podłoża. Uchwyt średni(taki, by po opuszczeniu sztangi na klatkę ramiona tworzyły z
        przedramionami kąt prosty-kciuk dla bezpieczeństwa powinien obejmować sztangę-choć wielu bardziej doświadczonych
        kulturystów preferuje raczej tzw. ”małpi chwyt” (kciuk ponad gryfem).Opuszczamy sztangę na klatkę na wysokość
        ok.1 cm powyżej brodawek. Przy opuszczaniu sztangi wykonujemy głęboki wdech-wydychamy powietrze w trakcie wyciskania.
        Można okresowo praktykować przytrzymywanie sztangi przez chwilę na klatce przed wyciśnięciem.(szczególnie przydatne,
        jeżeli mamy w planach ewentualne starty w zawodach w wyciskaniu)-dodatkowo rozbudowuje siłę-pobudza do dodatkowego wysiłku.
        Łokcie prowadzimy w trakcie całego ruchu po bokach-tak by nie „uciekały”do środka. Ruch wyciskania
        kończymy(dla lepszego napięcia mięśni)zanim łokcie zostaną zblokowane.`,
        'chest',
        'http://www.kulturystyka.pl/atlas/klatka_pliki/image008.gif',
        4,
        10)
      ]
    )
  ];

  constructor(private toastr: ToastrService) { }

  getExercises(): Observable<Exercise[]> {
    return of(this.exercises.slice());
  }

  addExercises( exercise: Exercise) {
    this.exercises.push(exercise);
    this.ExercisesChanged.next(this.exercises.slice());
  }
  
  changeExercises (name: string, newExercise: Exercise) {
    this.exercises.filter( (exercise) => {
      if(exercise.name === name){
        exercise.name = newExercise.name;
        exercise.desc = newExercise.desc;
        exercise.imagePath = newExercise.imagePath;
      };
    });
    this.ExercisesChanged.next(this.exercises.slice());
  }

  removeExercise(name: string): Observable<Exercise[]> {
    this.exercises = this.exercises.slice().filter( (exercise) => exercise.name !== name);
    this.toastr.success('Exercise removed from draft!');
    return of(this.exercises.slice());
  }

  setSeriesAndRepsOfExercise(name: string, seriesAndReps ) {
    const exerciseComplement = this.exercises.filter( (exercise) => exercise.name === name);
    if (seriesAndReps.name.indexOf('series') !== -1) {
      exerciseComplement[0].series = seriesAndReps.value;
    } else {
      exerciseComplement[0].repetition = seriesAndReps.value;
    }
    this.ExercisesChanged.next(this.exercises.slice());
  }

  getWorkoutsList(): Observable<WorkoutList[]> {
    return of(this.workoutsList.slice());
  }

  getWorkoutById(id: number): Observable<WorkoutList> {
    return of(this.workoutsList.slice()[id]);
  }

  addWorkoutToWorkoutList(workout: WorkoutList) {
    this.workoutsList.push(workout);
    this.WorkoutsListChanged.next(this.workoutsList.slice());
    this.toastr.success('Workout added to list!');
  }
  
  editWorkoutList() {
    console.log("TODO")
  }

  removeWorkoutFromList(id: number) {
    this.workoutsList = this.workoutsList.slice().filter( (workout, index) => index !== id);
  }

}
