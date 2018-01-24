import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

	ngOnInit() {
		firebase.initializeApp({
   	 		apiKey: "AIzaSyBtR-lLpg5hYrHJAIOfiBoB0qlrvg8JT1U",
		    authDomain: "workout-app-ee5ef.firebaseapp.com"
		});
	}
}
