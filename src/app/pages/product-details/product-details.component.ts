import {Component, OnInit} from '@angular/core';
import {Price, Product, ProductDetails, User} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {faArrowLeft, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

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

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private productsService : ProductsService) {
    this.user = this.userService.getCurrentUser();
    if (!this.user){
      this.router.navigate(["/login"]);
    }
    this.productId = parseInt(this.route.snapshot.params['productId']);
  }

  ngOnInit(): void {
    this.productsService.getProductDetails(this.productId).subscribe(productDetails => {
      if (productDetails.success){
        this.product = productDetails.product;
        this.prices = productDetails.prices;
        this.currentPrice = this.prices[this.prices.length-1];
      }
    })

  }


  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faEye = faEye;
  protected readonly faEyeSlash = faEyeSlash;
}
