import {Component, Input, OnInit} from '@angular/core';
import {GenericProduct, Price, Product} from "../../interfaces";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {SnackBarComponent} from "../snack-bar/snack-bar.component";

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

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.currentCheapestProduct = this.genericProduct.currentCheapestProduct;
    this.currentLowestPrice = this.genericProduct.currentLowestPrice;
  }

  addProduct(){
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 1000,
      panelClass: 'snack-bar'
    });
  }


}
