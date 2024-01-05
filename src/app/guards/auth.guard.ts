import {CanActivateFn, CanMatchFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../services/user.service";
import {BehaviorSubject, catchError, of, switchMap} from "rxjs";


export function buildGuard(redirectTo: string): CanActivateFn {

  const authGuard: CanActivateFn = (route, state) => {
    return new Promise(resolve => {
      let userService = inject(UserService);
      let router = inject(Router);

      userService.getCurrentUser().subscribe(user => {
        if (user === null)
          return;
        if (!user)
          router.navigate([redirectTo]);
        resolve(!!user);
      })
    })

  };

  return authGuard
}
