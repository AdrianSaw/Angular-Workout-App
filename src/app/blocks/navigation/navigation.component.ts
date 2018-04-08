import { Component } from '@angular/core';
import { WorkoutDataService } from '../../shared/http.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})

export class NavigationComponent {

  isCollapsed = true;
  url = 'https://workout-app-ee5ef.firebaseio.com/workouts.json';

  constructor(
    private workoutDataService: WorkoutDataService,
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  saveData(): void {
    this.workoutDataService.httpRequest(this.url, 'put')
      .subscribe((response: Response) => {
          this.toastr.success('Data saved');
      },
      (error) => {
          this.toastr.warning('Something went wrong');
      });
  }

  fetchData(): void {
    this.workoutDataService.httpRequest(this.url, 'get');
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['./signin']);
  }

}
