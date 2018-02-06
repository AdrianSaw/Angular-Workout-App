import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authService.isAuth()) {
      return true;
    } else {
      this.router.navigate(['./signin']);
      return false;
    }
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.authService.isAuth();
  }
}
