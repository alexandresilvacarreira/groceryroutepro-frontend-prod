import {Component, OnInit} from '@angular/core';
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {GenericProduct, ProductWPrice, ProductWPriceList, User} from "../../interfaces";
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
import _default from "chart.js/dist/plugins/plugin.tooltip";
import animations = _default.defaults.animations;
import {slideAnimationFilter} from "../../animations";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [slideAnimationFilter]
})
export class SearchComponent implements OnInit {

  genericProducts: GenericProduct[] = [];
  showError = false;
  errorMessage = "";
  searchControl = new FormControl("");
  page = new BehaviorSubject<number>(0);
  productListSelector = ".product-list";
  lastSearch: string | null = "";
  openFilter = false;
  showNotFound = false;

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
          if (searchTerm !== this.lastSearch) {
            this.genericProducts = [];
            actualPage = 0;
          }
          // Guardar o termo de pesquisa atual
          this.lastSearch = searchTerm;
          // O request utiliza os valores da página e da pesquisa
          return this.productsService.getGenericProductsList(
            searchTerm === null ? undefined : searchTerm,
            undefined,
            undefined,
            'currentLowestPricePrimaryValue,asc',
            actualPage
          ).pipe(map(genericProductsListResponse => ({searchTerm, genericProductsListResponse})));
        }),
        catchError(error => {
          this.showError = true;
          this.errorMessage = error.error.errorMessage;
          this.showNotFound=true;
          return throwError(() => error);
        })
      )
      .subscribe(({searchTerm, genericProductsListResponse}) => {
        this.showNotFound = false;
        if (searchTerm !== this.lastSearch) {
          this.genericProducts = genericProductsListResponse.data.genericProducts;
        } else {
          this.genericProducts = [...this.genericProducts, ...genericProductsListResponse.data.genericProducts];
        }
        if (this.genericProducts.length === 0){
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

}
