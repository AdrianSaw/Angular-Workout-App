import { Injectable } from '@angular/core';
import { Exercise } from '../shared/exercise.model';
import { WorkoutPlanService } from '../workout-plan/workout-plan.service';
import { Subject } from 'rxjs/Subject';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ExercisesService {

  ExercisesChanged = new Subject<Exercise[]>();

  private exercisesCategories = ['Chest', 'Back', 'Legs', 'Biceps', 'Triceps', 'Shoulders', 'ABS', 'Calves', 'Thighs&Buttocks'];

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
    'http://www.kulturystyka.pl/atlas/klatka_pliki/image008.gif'),
    new Exercise(
    'WYCISKANIE SZTANGIELEK W LEŻENIU NA ŁAWCE POZIOMEJ',
    'carbs',
    'chest',
    'http://www.kulturystyka.pl/atlas/klatka_pliki/image011.gif'),
    new Exercise(
    'PODCIĄGANIE NA DRĄŻKU SZEROKIM UCHWYTEM (NACHWYT)',
    `Nie ma drugiego takiego ćwiczenia pod względem wszechstronności rozwoju mięsni grzbietu.
    Ćwiczenie to można wykonywać do karku i do brody, lecz wersja do karku jest mniej naturalna dla stawów.
    Chwytamy drążek nachwytem na szerokość taką, by po podciągnięciu ramiona z przedramionami tworzyły kąt
    prosty(w przybliżeniu).Nogi ugięte w kolanach(dla lepszej stabilności można je spleść).Łokcie pracują
    w płaszczyźnie pleców-w jednej linii. Wdech robimy przed rozpoczęciem ruchu podciągania-wydech dopiero,
    gdy jesteśmy już u góry. Ruch podciągania kończymy w momencie, gdy nasza broda(lub kark) jest na wysokości
    drążka lub nieco ponad nim. Opuszczamy się wolno i pod pełną kontrolą. Jeśli jesteśmy bardziej zaawansowani
    i możemy wykonać wiele powtórzeń w tym ćwiczeniu, to można zastosować dodatkowe obciążenie.`,
    'back',
    'http://www.kulturystyka.pl/atlas/plecy_pliki/image021.gif'),
    new Exercise(
    'UGINANIE RAMION ZE SZTANGĄ STOJAC PODCHWYTEM',
    `-główne mięsnie zaangażowane w ćwiczeniu-mięśnie dwugłowe ramion(obie głowy- zależność szerokości uchwytu i zaangażowania
    poszczególnych głów podana poniżej), mięśnie przedramion

    -wykonanie-(gif 1.)Stajemy w rozkroku(na szerokość barków lub nieco szerzej)-sztangę chwytamy w zależności od tego,
    którą głowę bicepsu chcemy zaangażować bardziej. I tak odpowiednio:

    -uchwyt wąski(węższy niż szerokość ramion)-większe zaangażowanie głów krótkich,
    -uchwyt średni(na szerokość ramion)-obie głowy zaangażowane w równym stopniu,
    -uchwyt szeroki(szerszy od ramion)-większe zaangażowanie głów długich.

    Tułów podczas ćwiczenia utrzymujemy w pozycji wyprostowanej(bez bujania nim). Zakres ruchu: od pełnego rozgięcia
    bicepsów(nie ramion)do pełnego ich skurczu. Pełne rozciągnięcie bicepsów, to nie to samo, co pełny wyprost ramion.
    Należy unikać(nie tylko w tym ćwiczeniu) tzw. ”przeprostów” ramion, czyli nadmiernego ich wyprostowywania(do pełnego
    zakresu ruchu w stawie łokciowym).Łokcie przez cały czas przylegają do tułowia-nie powinny uciekać na boki, ani w przód,
    gdyż powoduje to zaangażowanie innych mięśni do pracy. Powietrza nabieramy w pozycji wyjściowej, wypuszczamy je dopiero po
    przejściu ciężaru przez najtrudniejszy punkt ruchu. W pozycji końcowej można zatrzymać na chwilę ciężar dla lepszego
    ukrwienia mięśnia, ale pod warunkiem utrzymania bicepsów w pełnym napięciu. Należy pamiętać, że ruch opuszczania musi
    być w pełni kontrolowany i wolniejszy od unoszenia. Do ćwiczenia można używać zarówno sztangi prostej, jak i łamanej-gryf
    łamany zmniejsza napięcia powstające w nadgarstkach.

    Inną odmianą tego ćwiczenia jest tzw.”21”, polegające na wykonaniu 7 powtórzeń unoszenia tylko do połowy ruchu(przedramiona
    równolegle do podłogi), po czym 7 powtórzeń od połowy w górę i na końcu 7 powtórzeń pełnym zakresem ruchu. Wersja ta stanowi
    szokująca odmianę dla mięśni dwugłowych.`,
    'biceps',
    'http://www.kulturystyka.pl/atlas/ramiona_pliki/image006.gif')
  ];

  constructor(private workoutPlan: WorkoutPlanService,
              private toastr: ToastrService ) { }

  getExercisesCategories() {
    return this.exercisesCategories.slice();
  }

  getExercisesByCategory(category: string) {
    return this.exercises.slice().filter((exe) => exe.category === category);
  }

  getExerciseID({name, category}) {
    let id;
    this.exercises.slice().filter((exe) => exe.category === category).filter((exe, index) => {
      if (exe.name === name) {
        id = index;
      }
    });
    return id;
  }

  getExercisesById(category: string, id: number) {
    return this.exercises.slice().filter((exe) => exe.category === category.toLowerCase())[id];
  }

  removeExerciseFromList(name: string) {
    let newExerciseList = this.exercises.filter((exe) => exe.name !== name);
    this.ExercisesChanged.next(newExerciseList);
    this.toastr.success('Exercise removed');
    this.workoutPlan.removeExercise(name);
  }

  addNewExercisesToList(exercise: Exercise) {
    if (this.exercises.filter((exe) => exe.name === exercise.name).length < 1) {
      this.exercises.push(exercise);
      this.ExercisesChanged.next(this.exercises.slice().filter((exe) => exe.category === exercise.category));
      this.toastr.success('New exercise added');
    } else {
      this.toastr.error('There is such exercise already');
    }
  }
  
  editExercise(exercise: Exercise, newExercise: Exercise) {

   const editedExercise = this.exercises.filter((exe, index) => {
      if (exe.name === exercise.name &&
          newExercise.name !== exe.name ||
          newExercise.desc !== exe.desc ||
          newExercise.imagePath !== exe.imagePath) {
       if (this.exercises.filter((exe) => exe.name === newExercise.name).length < 1) {
          this.workoutPlan.changeExercises(exe.name, newExercise);
          exe.name = newExercise.name;
          exe.imagePath = newExercise.imagePath;
          exe.category = newExercise.category;
          exe.desc = newExercise.desc;
          this.ExercisesChanged.next(this.exercises.slice());
          this.toastr.success('Exercise edited');
        }
      } else {
        this.toastr.error('Nothing changed or exercise already exist');
      }
    });    
  }

  addExercisesToWorkoutDraftList(exercise: Exercise) {
    if (this.workoutPlan.getExercises().filter((exe) => exe.name === exercise.name).length < 1) {
      this.workoutPlan.addExercises(exercise);
      this.toastr.success('Exercise added to workout draft');
    } else {
      this.toastr.error('Exercise already added');
    }
  }
}
