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
import { Observable, tap, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

//? Forma moderna de crear Guards
@Injectable({ providedIn: 'root' })
class PublicGuard {
  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAutentication().pipe(
      tap((isAuthenticated) => console.log('Authenticated: ', isAuthenticated)),
      tap((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['./']);
        }
      }),
      map((isAuthenticated) => !isAuthenticated)
    );
  }

  canActivate(): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }

  canMatch(): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }
}

export const canActivatePublic: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  // console.log('Can Activate');
  // console.log({ route, state });
  return inject(PublicGuard).canActivate();
};

export const canMatchPublic: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  // console.log('Can Match');
  // console.log({ route, segments });
  return inject(PublicGuard).canMatch();
};
