import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {

  // pageTitle!:string;
  @Input() title!:string;





}


