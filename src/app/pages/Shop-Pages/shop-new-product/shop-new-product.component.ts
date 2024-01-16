import { Component } from '@angular/core';
import {faArrowLeft, faCheck} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-shop-new-product',
  templateUrl: './shop-new-product.component.html',
  styleUrls: ['./shop-new-product.component.scss']
})
export class ShopNewProductComponent {

    protected readonly faArrowLeft = faArrowLeft;
    protected readonly faCheck = faCheck;
}
