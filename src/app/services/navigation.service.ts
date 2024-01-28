import {Injectable, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";


@Injectable({
    providedIn: "root"
})

export class NavigationService {

    currentRoute = '';
    previousRoute = '';

    constructor(private router: Router) {

        this.getNavigationEnd().subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    this.previousRoute = this.currentRoute;
                    this.currentRoute = event.url;
                }
            }
        )
    }

    getNavigationEnd() {
        return this.router.events.pipe(filter(event => event instanceof NavigationEnd));
    }

    getPreviousRoute() {
        return this.previousRoute;
    }
}
