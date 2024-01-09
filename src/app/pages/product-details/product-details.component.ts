import {Component, OnInit} from '@angular/core';
import {Price, Product, ProductDetails, User} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {faArrowLeft, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {catchError, throwError} from "rxjs";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  user?: User;
  productId : number;
  product!: Product;
  prices!: Price[];
  currentPrice!:Price;
  previousRoute = '';

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private productsService : ProductsService, private navigationService:NavigationService) {
    this.productId = parseInt(this.route.snapshot.params['productId']);
  }

  ngOnInit(): void {
    this.productsService.getProductDetails(this.productId).pipe(catchError(error => {

      return throwError(() => error);
    })).
    subscribe(productDetails => {
        this.product = productDetails.product;
        this.prices = productDetails.prices;
        this.currentPrice = this.prices[this.prices.length-1];
    })

    this.previousRoute = this.navigationService.getPreviousRoute();


  }


  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faEye = faEye;
  protected readonly faEyeSlash = faEyeSlash;
}
