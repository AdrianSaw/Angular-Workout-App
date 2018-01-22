import { Component, OnInit } from '@angular/core';
import { WorkoutDataService } from '../shared/http.service';
import { Response } from '@angular/http'; 

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  isCollapsed = true;

  constructor(private workoutDataService: WorkoutDataService) { }

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

}
