import {Component, Input, OnInit} from '@angular/core';
import {GenericProduct, Price, Product} from "../../interfaces";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit{

  @Input() genericProduct!: GenericProduct;
  currentCheapestProduct!: Product;
  currentLowestPrice!: Price;

  protected readonly faCartPlus = faCartPlus;

  ngOnInit(): void {
    this.currentCheapestProduct = this.genericProduct.currentCheapestProduct;
    this.currentLowestPrice = this.genericProduct.currentLowestPrice;
  }



}
