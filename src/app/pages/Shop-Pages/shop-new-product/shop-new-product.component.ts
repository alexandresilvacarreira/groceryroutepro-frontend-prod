import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {faArrowLeft, faCheck} from "@fortawesome/free-solid-svg-icons";
import {ProductsService} from "../../../services/products.service";
import {Category, GenericProduct, Price, Product, ProductData, ProductWPrice, User} from "../../../interfaces";
import {UserService} from "../../../services/user.service";
import {catchError, throwError} from "rxjs";



@Component({
    selector: 'app-shop-new-product',
    templateUrl: './shop-new-product.component.html',
    styleUrls: ['./shop-new-product.component.scss'],


})
export class ShopNewProductComponent implements OnInit {

    form!: FormGroup;
    chainId!: number;
    currentUser!: User;
    userId!: number;
    matriz: number[] = [];
    listCategories: Category[] = [];

    readonly faArrowLeft = faArrowLeft;
    readonly faCheck = faCheck;

    constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getCurrentUser().subscribe(user => {
            this.currentUser = user as User;
            this.matriz = this.currentUser?.stores.map(store => store.id);
            this.chainId = Number(this.matriz[0]);
        });
        this.userService.getCurrentUser().subscribe(user => {
            this.currentUser = user as User;
            this.userId = this.currentUser?.id
        });
        this.productsService.getCategories().subscribe((categories: Category[]) => {
                this.listCategories = categories;
            }
        );

        this.form = this.formBuilder.group({
            name: [''],
            quantity: [''],
            brand: [''],
            chain: {
                id: this.chainId,
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
    }

    onSubmit() {
        let selectedCategoryIds = this.form.get("productCategories")?.value as number[];
        let selectedCategories: Category[] = this.listCategories.filter(category => selectedCategoryIds.includes(category.id));

        let product: Product = {
            id: 0,
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
            this.productsService.createNewProduct(productData).pipe(
                catchError(error => {
                    console.error(error);
                    return throwError(() => error);
                })).subscribe((response) => {
                console.log("Produto adicionado com sucesso");
            });
        }
    }


}

