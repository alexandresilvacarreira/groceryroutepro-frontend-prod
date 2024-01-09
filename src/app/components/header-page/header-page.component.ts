import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";


@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {

  // pageTitle!:string;
  @Input() title!:string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // this.setPageTitle();
  }

  // setPageTitle() {
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe(() => {
  //       this.pageTitle = this.activatedRoute.firstChild?.snapshot.data['title'];
  //     });
  // }


}


