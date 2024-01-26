import {Component} from '@angular/core';
import {ProductSearchFilterOptions, ProductWPrice, User} from "../../../interfaces";
import {FormControl} from "@angular/forms";
import {BehaviorSubject, catchError, combineLatest, debounceTime, map, startWith, switchMap, throwError} from "rxjs";
import {ProductsService} from "../../../services/products.service";
import {UserService} from "../../../services/user.service";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {ProductFilterService} from "../../../services/product-filter.service";

@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.scss']
})
export class ShopDashboardComponent {

  products: ProductWPrice[] = [];
  showError = false;
  errorMessage = "";
  searchControl = new FormControl("");
  page = new BehaviorSubject<number>(0);
  productListSelector = ".product-list";
  lastSearch: string | null = "";
  openFilter = false;
  previousFilterOptions!: ProductSearchFilterOptions;
  showNotFound = false;

  constructor(private productsService: ProductsService, private userService: UserService, private productFilterService: ProductFilterService) {
  }

  currentUser!: User;
  chainId: number[] = [];

  ngOnInit(): void {

    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user as User;
      this.chainId = [this.chainId.push(this.currentUser?.chain.id)];
      this.productFilterService.setFilterValues({
        sort: "pricePrimaryValue,asc",
        chains: this.chainId,
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      });
    });

    combineLatest([
      this.page.pipe(startWith(0)),
      this.searchControl.valueChanges.pipe(startWith(''), debounceTime(300)),
      this.productFilterService.getFilterValues()
    ])
      .pipe(
        switchMap(([page, searchTerm, filterOptions]) => {
          let actualPage = page;
          let currentFilterOptions = filterOptions;
          if (searchTerm !== this.lastSearch || JSON.stringify(filterOptions) !== JSON.stringify(this.previousFilterOptions)) {
            this.products = [];
            actualPage = 0;
          }
          // Guardar o termo de pesquisa atual
          this.lastSearch = searchTerm;
          //Guardar valores dos filtros
          this.previousFilterOptions = filterOptions;
          // O request utiliza os valores da página e da pesquisa
          return this.productsService.getProductsList(
            searchTerm === null ? undefined : searchTerm,
            currentFilterOptions.categories,
            currentFilterOptions.chains,
            currentFilterOptions.sort,
            actualPage
          ).pipe(map(productWPriceList => ({searchTerm, productWPriceList, filterOptions})));
        }),
        catchError(error => {
          this.showNotFound = true;
          return throwError(() => error);
        })
      )
      .subscribe(({searchTerm, productWPriceList, filterOptions}) => {
        this.showNotFound = false;
        if (searchTerm !== this.lastSearch) {
          this.products = productWPriceList.products;
        } else {
          this.products = [...this.products, ...productWPriceList.products];
        }
        if (this.products.length === 0) {
          this.showNotFound = true;
        }
      });
  }

  onScroll() {
    const nextPage = this.page.value + 1;
    this.page.next(nextPage);
  }

  openFilterMenu() {
    this.openFilter = true;
  }

  closeFilterMenu() {
    this.openFilter = false;
  }

  protected readonly faSearch = faSearch;
  protected readonly faFilter = faFilter;
}
