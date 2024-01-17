import {Component, OnInit} from '@angular/core';
import {GenericProduct, Price, Product, ProductDetails, User} from "../../interfaces";
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
  genericProductId: number;
  previousRoute = '';
  genericProduct!: GenericProduct;
  products!: Product[];
  currentCheapestProduct!: Product;
  currentLowestPrice!: Price;

  constructor(private router: Router, private route: ActivatedRoute, private productsService: ProductsService, private navigationService: NavigationService) {
    this.genericProductId = parseInt(this.route.snapshot.params['genericProductId']);
  }

  ngOnInit(): void {
    this.productsService.getGenericProduct(this.genericProductId).pipe(catchError(error => {
      this.router.navigate(["/error"]);
      return throwError(() => error);
    })).subscribe(genericProductResponse => {
      this.genericProduct = genericProductResponse.data.genericProduct;
      this.products = genericProductResponse.data.genericProduct.products;
      this.currentCheapestProduct = genericProductResponse.data.genericProduct.currentCheapestProduct;
      this.currentLowestPrice = genericProductResponse.data.genericProduct.currentLowestPrice;
    })

    this.previousRoute = this.navigationService.getPreviousRoute();


  }


  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faEye = faEye;
  protected readonly faEyeSlash = faEyeSlash;
}
