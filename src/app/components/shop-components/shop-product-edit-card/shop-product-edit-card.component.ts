import {Component, Input} from '@angular/core';
import {ProductWPrice} from "../../../interfaces";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-shop-product-edit-card',
  templateUrl: './shop-product-edit-card.component.html',
  styleUrls: ['./shop-product-edit-card.component.scss']
})
export class ShopProductEditCardComponent {
  @Input() product!: ProductWPrice;

  protected readonly faPenToSquare = faPenToSquare;
}
