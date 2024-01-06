import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../services/user.service";

export function buildGuard(redirectTo: string, requiresLogin = true): CanActivateFn {

  const authGuard: CanActivateFn = (route, state) => {
    return new Promise<boolean>(resolve => {
      let userService = inject(UserService);
      let router = inject(Router);

      userService.getCurrentUser().subscribe(user => {
        if (user === null) {
          // Se ainda não temos utilizador, não fazer nada
          return;
        }
        if (requiresLogin && !user) {
          // Se é necessária uma sessão ativa, mas o utilizador não iniciou sessão, redirecciona (para o login, idealmente)
          router.navigate([redirectTo]);
        } else if (!requiresLogin && user) {
          // Se o utilizador já tem sessão iniciada e a página não requer login, redirecciona (para o dashboard, normalmente)
          router.navigate([redirectTo]);
        }
        resolve(requiresLogin === !!user); // Resolver a promise, para continuar ou impedir a navegação
      });
    });
  };

  // const authGuard: CanActivateFn = (route, state) => {
  //   return new Promise(resolve => {
  //     let userService = inject(UserService);
  //     let router = inject(Router);
  //
  //     userService.getCurrentUser().subscribe(user => {
  //       if (user === null)
  //         return;
  //       if (!user)
  //         router.navigate([redirectTo]);
  //       resolve(!!user);
  //     })
  //   })
  //
  // };

  return authGuard
}
