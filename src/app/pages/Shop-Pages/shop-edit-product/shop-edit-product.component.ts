import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../../services/products.service";
import {NavigationService} from "../../../services/navigation.service";
import {Category, GenericProduct, Price, Product, ProductData, ProductDetails, User} from "../../../interfaces";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, throwError} from "rxjs";
import {SnackBarComponent} from "../../../components/snack-bar/snack-bar.component";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";


@Component({
    selector: 'app-shop-edit-product',
    templateUrl: './shop-edit-product.component.html',
    styleUrls: ['./shop-edit-product.component.scss']
})
export class ShopEditProductComponent {



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
    matriz: number[] = [];
    listCategories: Category[] = [];

    productId: number;
    product!: Product;
    productName!: string;


    constructor(private formBuilder: FormBuilder, private productsService: ProductsService,
                private userService: UserService, private route: ActivatedRoute) {
        this.productId = parseInt(this.route.snapshot.params['productId']);
    }

    ngOnInit():
        void {

        this.userService.getCurrentUser().subscribe(user => {
            this.currentUser = user as User;
            this.matriz = this.currentUser?.stores.map(store => store.id);
            this.chainId = Number(this.matriz[0]);
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
        console.log(this.productName);

        if (this.form.valid) {
            this.productsService.editProduct(productData).pipe(
                catchError(error => {
                    console.error(error);
                    return throwError(() => error);
                })).subscribe((response) => {
            });
        }
    }

    protected readonly faCheck = faCheck;
    protected readonly faXmark = faXmark;
}
