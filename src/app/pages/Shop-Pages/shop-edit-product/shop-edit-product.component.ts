import {Component} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../services/products.service";
import {Category, Price, Product, ProductData, User} from "../../../interfaces";
import {FormBuilder, FormGroup} from "@angular/forms";
import {catchError, throwError} from "rxjs";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-shop-edit-product',
  templateUrl: './shop-edit-product.component.html',
  styleUrls: ['./shop-edit-product.component.scss']
})
export class ShopEditProductComponent {
  showMessage = false;
  showToast = false;
  message = "";
  toastBoolean!: boolean;


  form: FormGroup = this.formBuilder.group({
    name: [''],
    quantity: [''],
    brand: [''],
    chain: {
      id: '',
    },
    imageUrl: [''],
    date: [''],

    productCategories: [[]],

    primaryValue: [''],
    primaryUnit: [''],
    secondaryValue: [''],
    secondaryUnit: [''],
    priceWoDiscount: [''],
  });

  chainId!: number;
  currentUser!: User;
  userId!: number;
  listCategories: Category[] = [];

  productId: number;
  product!: Product;


  constructor(private formBuilder: FormBuilder, private productsService: ProductsService,
              private userService: UserService, private route: ActivatedRoute) {
    this.productId = parseInt(this.route.snapshot.params['productId']);
  }

  ngOnInit():
    void {

    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user as User;
      this.chainId = this.currentUser?.chain.id;
      this.userId = this.currentUser?.id
    });
    this.productsService.getCategories().subscribe((categories: Category[]) => {
      this.listCategories = categories;
    });
    this.productsService.getProductDetails(this.productId).pipe(catchError(error => {
      return throwError(() => error);
    })).subscribe(productDetails => {

      let categoryIds = productDetails.product.categories.map(category => category.id);

      this.form.patchValue({

        name: productDetails.product.name,
        quantity: productDetails.product.quantity,
        brand: productDetails.product.brand,
        chain: {
          id: productDetails.product.chain.id,
        },
        imageUrl: productDetails.product.imageUrl,
        productCategories: categoryIds,

        primaryValue: productDetails.prices[0].primaryValue,
        primaryUnit: productDetails.prices[0].primaryUnit,
        secondaryValue: productDetails.prices[0].secondaryValue,
        secondaryUnit: productDetails.prices[0].secondaryUnit,
        priceWoDiscount: productDetails.prices[0].priceWoDiscount,

      })
    });
  }

  onSubmit() {

    this.showToast = false;

    let selectedCategoryIds = this.form.get("productCategories")?.value as number[];
    let selectedCategories: Category[] = this.listCategories.filter(category => selectedCategoryIds.includes(category.id));


    let product: Product = {
      id: this.productId,
      name: this.form.get("name")?.value,
      brand: this.form.get("brand")?.value,
      quantity: this.form.get("quantity")?.value,
      imageUrl: this.form.get("imageUrl")?.value,
      chain: this.form.get("chain")?.value,
      categories: selectedCategories,
      genericProduct: null as any,
      cheapestForGenericProduct: null as any,
      prices: null as any,
    }

    let price: Price = {
      id: 0,
      primaryValue: this.form.get("primaryValue")?.value,
      primaryUnit: this.form.get("primaryUnit")?.value,
      secondaryValue: this.form.get("secondaryValue")?.value,
      secondaryUnit: this.form.get("secondaryUnit")?.value,
      discountPercentage: this.form.get("discountPercentage")?.value,
      priceWoDiscount: this.form.get("priceWoDiscount")?.value,
      collectionDate: this.form.get("collectionDate")?.value,
      genericProduct: null as any,
    }


    let productData: ProductData = {product: product, price: price};

    if (this.form.valid) {
      this.productsService.editProduct(productData).pipe(
        catchError(error => {
          this.message = error.error.message;
          this.toastBoolean = false;
          this.showToast = true;
          console.error(error);
          return throwError(() => error);
        })).subscribe((response) => {
        this.toastBoolean = true;
        this.showToast = true;
        this.message = response.message;

      });
    }
  }

  protected readonly faCheck = faCheck;
  protected readonly faXmark = faXmark;
}
