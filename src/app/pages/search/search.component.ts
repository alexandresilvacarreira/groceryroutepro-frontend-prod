import {Component, OnInit} from '@angular/core';
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {GenericProduct, ProductSearchFilterOptions} from "../../interfaces";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {ProductsService} from "../../services/products.service";
import {FormControl, FormGroup} from "@angular/forms";
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  debounceTime, map, startWith,
  switchMap,
  throwError
} from "rxjs";
import _default from "chart.js/dist/plugins/plugin.tooltip";
import {slideAnimationFilter} from "../../animations";
import {ProductFilterService} from "../../services/product-filter.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [slideAnimationFilter]
})
export class SearchComponent implements OnInit {

  genericProducts: GenericProduct[] = [];
  searchControl = new FormControl("");
  page = new BehaviorSubject<number>(0);
  productListSelector = ".product-list";
  lastSearch: string | null = "";
  openFilter = false;
  showNotFound = false;
  previousFilterOptions!: ProductSearchFilterOptions;


  protected readonly faFilter = faFilter;
  protected readonly faSearch = faSearch;

  constructor(private productsService: ProductsService, private productFilterService : ProductFilterService) {
  }


  ngOnInit(): void {

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
            this.genericProducts = [];
            actualPage = 0;
          }
          // Guardar o termo de pesquisa atual
          this.lastSearch = searchTerm;
          //Guardar valores dos filtros
          this.previousFilterOptions = filterOptions;
          // O request utiliza os valores da página e da pesquisa
          return this.productsService.getGenericProductsList(
            searchTerm === null ? undefined : searchTerm,
            currentFilterOptions.categories,
            currentFilterOptions.chains,
            currentFilterOptions.sort,
            actualPage
          ).pipe(map(genericProductsListResponse => ({searchTerm, genericProductsListResponse, filterOptions})));
        }),
        catchError(error => {
          this.showNotFound=true;
          return throwError(() => error);
        })
      )
      .subscribe(({searchTerm, genericProductsListResponse, filterOptions}) => {
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
