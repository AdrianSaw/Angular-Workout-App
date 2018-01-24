import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
	token: string;

	constructor(private router: Router) {

	}

	signUpUser(email: string, password: string) {
		firebase.auth().createUserWithEmailAndPassword(email,password)
			.then(
				(response) => {
					this.router.navigate(['./signin']);
				})
			.catch(
				(error) => console.log(error)
			)
	}

	signInUser(email:string, password: string) {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(
				(response) => {
					this.router.navigate(['/']);
					firebase.auth().currentUser.getIdToken()
						.then(
							(token: string) => {
								this.token = token;
								this.router.navigate(['./exercises']);
							} 
						)
				}
			)
			.catch(
				(error) => {
					console.log(error);
				});
	}

	getToken() {
		firebase.auth().currentUser.getIdToken()
			.then(
				(token: string) => {
					this.token = token;
				} 
			)	
		return this.token;
	}

	logout(){
		firebase.auth().signOut();
		this.token = null;
	}

	isAuth() {
		return this.token != null;
	}
}