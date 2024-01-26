import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../services/user.service";
import {User} from "../interfaces";



export function roleGuard(role: string): CanActivateFn {

    const roleGuard: CanActivateFn = (route, state) => {

        return new Promise<boolean>(resolve => {
            let userService = inject(UserService);
            let router = inject(Router);

            userService.getCurrentUser().subscribe(user => {
              let canNavigate = false;
                if (user === null) {
                    // Se ainda não temos utilizador, não fazer nada
                    return true;
                }
                if (!user) {
                    router.navigate(['/login']);
                } else {
                    let isUser = function (obj: any): obj is User {
                        return obj !== false && obj !== null && typeof obj === 'object' && 'role' in obj;
                    }
                    if (isUser(user)) {
                        if (user.role && user.role.name !== role) {
                         return router.navigate(['/login']);
                        } else {
                          canNavigate = true;
                        }
                    }
                }
                return resolve(canNavigate);
            });
        });
    };
    return roleGuard;
}
