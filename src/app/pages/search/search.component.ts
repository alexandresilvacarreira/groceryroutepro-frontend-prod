import {Component, OnInit} from '@angular/core';
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {ProductWPrice, ProductWPriceList, User} from "../../interfaces";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  user?: User;
  products?: ProductWPrice[];

  protected readonly faFilter = faFilter;
  protected readonly faSearch = faSearch;

  constructor(private userService: UserService, private router: Router, private productsService: ProductsService) {
    this.user = this.userService.getCurrentUser();
    if (!this.user) {
      this.router.navigate(["/login"]);
    }
  }

  ngOnInit(): void {

    this.productsService.getProductsList(undefined, undefined, undefined, "priceDiscountPercentage,desc").subscribe(productWPriceList =>{
      if (productWPriceList.success){
        this.products = productWPriceList.products;
      }
    })

  }


}
