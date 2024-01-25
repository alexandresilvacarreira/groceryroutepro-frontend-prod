import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ProductsService} from "../../../services/products.service";
import {Product, ProductWPrice, User} from "../../../interfaces";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProductFilterService} from "../../../services/product-filter.service";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {BehaviorSubject, catchError, combineLatest, debounceTime, map, startWith, switchMap, throwError} from "rxjs";

@Component({
    selector: 'app-shop-search-edit-product',
    templateUrl: './shop-search-edit-product.component.html',
    styleUrls: ['./shop-search-edit-product.component.scss']
})
export class ShopSearchEditProductComponent implements OnInit {

    products: ProductWPrice[] = [];
    showError = false;
    errorMessage = "";
    searchControl = new FormControl("");
    page = new BehaviorSubject<number>(0);
    productListSelector = ".product-list";
    lastSearch: string | null = "";
    openFilter = false;

    protected readonly faFilter = faFilter;
    protected readonly faSearch = faSearch;

    constructor(private productsService: ProductsService, private userService: UserService) {
    }

    currentUser!: User;
    storeIds: number[] = [];

    ngOnInit(): void {

        this.userService.getCurrentUser().subscribe(user => {
            this.currentUser = user as User;
            this.storeIds = this.currentUser?.stores.map(store => store.id) || [];
        });

        combineLatest([
            this.page.pipe(startWith(0)),
            this.searchControl.valueChanges.pipe(startWith(''), debounceTime(300))
        ])
            .pipe(
                switchMap(([page, searchTerm]) => {
                    let actualPage = page;
                    if (searchTerm !== this.lastSearch) {
                        this.products = [];
                        actualPage = 0;
                    }
                    // Guardar o termo de pesquisa atual
                    this.lastSearch = searchTerm;
                    // let storeId = this.user.
                    // O request utiliza os valores da página e da pesquisa
                    return this.productsService.getProductsList(
                        searchTerm === null ? undefined : searchTerm,
                        undefined,
                        this.storeIds,
                        'pricePrimaryValue,asc',
                        actualPage
                    ).pipe(map(productWPriceList => ({searchTerm, productWPriceList})));
                }),
                catchError(error => {
                    this.showError = true;
                    this.errorMessage = error.error.errorMessage;
                    return throwError(() => error);
                })
            )
            .subscribe(({searchTerm, productWPriceList}) => {
                // Set the product list to the received products if it's a new search
                if (searchTerm !== this.lastSearch) {
                    this.products = productWPriceList.products;
                } else {
                    this.products = [...this.products, ...productWPriceList.products];
                }
            });
    }

    onScroll() {
        const nextPage = this.page.value + 1;
        this.page.next(nextPage);
        console.log("scrolled")
    }

    openFilterMenu() {
        this.openFilter = true;
    }

    closeFilterMenu() {
        this.openFilter = false;
    }

}
