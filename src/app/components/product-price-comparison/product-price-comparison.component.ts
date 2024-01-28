import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces";


@Component({
  selector: 'app-product-price-comparison',
  templateUrl: './product-price-comparison.component.html',
  styleUrls: ['./product-price-comparison.component.scss']
})
export class ProductPriceComparisonComponent{

  @Input() products!: Product[];

  currentPrice(product: Product):number {
    let prices = product.prices;
    return prices[prices.length-1].primaryValue;
  }

}
