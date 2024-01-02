import {Component, Input} from '@angular/core';
import {ProductWPrice} from "../../interfaces";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {

  @Input() product!: ProductWPrice;

  protected readonly faCartPlus = faCartPlus;
}
