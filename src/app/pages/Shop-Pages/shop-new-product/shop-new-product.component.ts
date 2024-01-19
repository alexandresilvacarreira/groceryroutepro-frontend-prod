import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {faArrowLeft, faCheck} from "@fortawesome/free-solid-svg-icons";
import {ProductsService} from "../../../services/products.service";
import {Product, ProductWPrice, User} from "../../../interfaces";
import {UserService} from "../../../services/user.service";
import {timestamp} from "rxjs";
import {Chain} from "@angular/compiler";

@Component({
    selector: 'app-shop-new-product',
    templateUrl: './shop-new-product.component.html',
    styleUrls: ['./shop-new-product.component.scss']
})
export class ShopNewProductComponent implements OnInit {

    form!: FormGroup;
    storeIds!: number;
    currentUser!: User;
    userId!: number;
    matriz: number[]=[];


    readonly faArrowLeft = faArrowLeft;
    readonly faCheck = faCheck;

    constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getCurrentUser().subscribe(user => {
            this.currentUser = user as User;
            this.matriz =this.currentUser?.stores.map(store => store.id);
            this.storeIds=Number(this.matriz[0]);
        });

        this.userService.getCurrentUser().subscribe(user => {
            this.currentUser = user as User;
            this.userId = this.currentUser?.id
        })


        this.form = this.formBuilder.group({
            name: [''],
            quantity: [''],
            price_primary: [null],
            price_secondary: [null],
            category: [''],
            brand: [''],
            chain: {
                id:this.storeIds,
            },
            imageUrl: [''],
            date: [''],
            edited_by: this.userId
        });
    }

    onSubmit() {
        let productData: Product = this.form.value;
        if (this.form.valid) {
            this.productsService.setNewProduct(productData).subscribe((response) => {
                if (response.success) {
                    console.log("Produto adicionado com sucesso:", response.message);
                } else {
                    console.error("Erro ao adicionar produto:", response.message);
                }
            });
        }
    }


}

