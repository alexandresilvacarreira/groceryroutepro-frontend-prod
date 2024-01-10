import {Component, OnInit} from '@angular/core';
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {ProductWPrice, ProductWPriceList, User} from "../../interfaces";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {FormControl, FormGroup} from "@angular/forms";
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  debounceTime,
  forkJoin, map,
  merge, startWith,
  switchMap,
  take,
  throwError
} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products: ProductWPrice[] = [];
  showError = false;
  errorMessage = "";
  searchControl = new FormControl("");
  page = new BehaviorSubject<number>(0);
  productListSelector = ".product-list";
  lastSearch : string | null = "";

  protected readonly faFilter = faFilter;
  protected readonly faSearch = faSearch;

  constructor(private productsService: ProductsService) {
  }


  ngOnInit(): void {
    combineLatest([
      this.page.pipe(startWith(0)),
      this.searchControl.valueChanges.pipe(startWith(''), debounceTime(300))
    ])
      .pipe(
        switchMap(([page, searchTerm]) => {
          let actualPage = page;
          if (searchTerm !== this.lastSearch){
            this.products = [];
            actualPage = 0;
          }
          // Guardar o termo de pesquisa atual
          this.lastSearch = searchTerm;
          // O request utiliza os valores da página e da pesquisa
          return this.productsService.getProductsList(
            searchTerm === null ? undefined : searchTerm,
            undefined,
            undefined,
            'pricePrimaryValue,asc',
            actualPage
          ).pipe(map(productWPriceList => ({ searchTerm, productWPriceList })));
        }),
        catchError(error => {
          this.showError = true;
          this.errorMessage = error.error.errorMessage;
          return throwError(() => error);
        })
      )
      .subscribe(({ searchTerm, productWPriceList }) => {
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

}
