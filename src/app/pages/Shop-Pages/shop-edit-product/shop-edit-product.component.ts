import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../../services/products.service";
import {NavigationService} from "../../../services/navigation.service";
import {Price, Product, User} from "../../../interfaces";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-shop-edit-product',
  templateUrl: './shop-edit-product.component.html',
  styleUrls: ['./shop-edit-product.component.scss']
})
export class ShopEditProductComponent {
    user?: User;
    productId: number;
    product!: Product;
    prices!: Price[];
    currentPrice!: Price;
    previousRoute = '';

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private productsService: ProductsService, private navigationService: NavigationService, private formBuilder: FormBuilder) {
        this.productId = parseInt(this.route.snapshot.params['productId']);
    }

    editProductForm = this.formBuilder.group({
        name: ['', Validators.required],
        quantity: ['', Validators.required],
        pricePrimaryValue: [0, [Validators.required, Validators.min(0)]],
        priceSecondaryValue: [0, [Validators.required, Validators.min(0)]],
        priceSecondaryUnit: ['', Validators.required],
        imageUrl: ['', Validators.required]
    });

}
