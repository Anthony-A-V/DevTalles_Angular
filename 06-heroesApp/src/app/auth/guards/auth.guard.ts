import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

//? Forma moderna de crear Guards
@Injectable({ providedIn: 'root' })
class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAutentication().pipe(
      tap((isAuthenticated) => console.log('Authenticated: ', isAuthenticated)),
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }

  canActivate(): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }

  canMatch(): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }
}

export const canActivateAuth: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  // console.log('Can Activate');
  // console.log({ route, state });
  return inject(AuthGuard).canActivate();
};

export const canMatchAuth: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  // console.log('Can Match');
  // console.log({ route, segments });
  return inject(AuthGuard).canMatch();
};
