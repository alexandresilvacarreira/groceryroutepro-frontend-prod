import { Component } from '@angular/core';
import {faCircle} from "@fortawesome/free-regular-svg-icons/faCircle";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";

@Component({
  selector: 'app-product-search-filter',
  templateUrl: './product-search-filter.component.html',
  styleUrls: ['./product-search-filter.component.scss']
})
export class ProductSearchFilterComponent {

  protected readonly faCircle = faCircle;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faCircleXmark = faCircleXmark;
}
