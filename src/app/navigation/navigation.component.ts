import { Component, OnInit } from '@angular/core';
import { WorkoutDataService } from '../shared/http.service';
import { Response } from '@angular/http'; 
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  isCollapsed = true;

  constructor(private workoutDataService: WorkoutDataService, private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  saveData() {
		this.workoutDataService.storeData()
			.subscribe(
				(response: Response) => {
					console.log(response.json());
				},
				(error)=> {
					console.log(error)
				});
  }

  fetchData() {
  	this.workoutDataService.fetchData();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['./signin']);
  }
}
