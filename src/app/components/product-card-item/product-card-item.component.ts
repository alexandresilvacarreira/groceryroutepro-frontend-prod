import { Component } from '@angular/core';
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons/faTrashCan";

@Component({
  selector: 'app-product-card-item',
  templateUrl: './product-card-item.component.html',
  styleUrls: ['./product-card-item.component.scss']
})
export class ProductCardItemComponent {

    protected readonly faRoute = faRoute;
  protected readonly faTrashCan = faTrashCan;
}
