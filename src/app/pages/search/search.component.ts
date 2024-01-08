import {Component, OnInit} from '@angular/core';
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {ProductWPrice, ProductWPriceList, User} from "../../interfaces";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products?: ProductWPrice[];

  searchControl = new FormControl('');


  protected readonly faFilter = faFilter;
  protected readonly faSearch = faSearch;

  constructor(private productsService: ProductsService) {
  }


  ngOnInit(): void {
    // Subscribe to value changes of the searchControl
    this.searchControl.valueChanges.subscribe((searchTerm) => {
      // Use the value as the first parameter in the getProductsList method
      this.productsService
        .getProductsList(searchTerm === null ? undefined : searchTerm, undefined, undefined, 'pricePrimaryValue,asc')
        .subscribe((productWPriceList) => {
          if (productWPriceList.success) {
            this.products = productWPriceList.products;
          }
        });
    });
  }


}
