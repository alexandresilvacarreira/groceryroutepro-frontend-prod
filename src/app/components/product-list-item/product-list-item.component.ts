import {Component, Input, OnInit} from '@angular/core';
import {GenericProduct, Price, Product} from "../../interfaces";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {SnackBarComponent} from "../snack-bar/snack-bar.component";
import {ShoppingListService} from "../../services/shopping-list.service";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() genericProduct!: GenericProduct;
  currentCheapestProduct!: Product;
  currentLowestPrice!: Price;

  protected readonly faCartPlus = faCartPlus;

  constructor(private snackBar: MatSnackBar, private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.currentCheapestProduct = this.genericProduct.currentCheapestProduct;
    this.currentLowestPrice = this.genericProduct.currentLowestPrice;
  }

  addProduct() {
    this.shoppingListService.addProduct(this.genericProduct.id);
  }


}
