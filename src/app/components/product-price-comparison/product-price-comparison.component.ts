import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces";
import {FormControl} from "@angular/forms";
import {ChartConfiguration} from "chart.js";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-product-price-comparison',
  templateUrl: './product-price-comparison.component.html',
  styleUrls: ['./product-price-comparison.component.scss']
})
export class ProductPriceComparisonComponent implements OnInit{

  @Input() products!: Product[];

  constructor() {
  }

  ngOnInit(): void {
  }

  currentPrice(product: Product):number {
    let prices = product.prices;
    return prices[prices.length-1].primaryValue;
  }

}
