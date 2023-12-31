import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {ProductDetails, ProductWPriceList, ServerResponse, Signup} from "../interfaces";

const BASE_URL = environment.BASE_URL;


@Injectable({
  providedIn: "root"
})

export class ProductsService {

  defaultSearch = "";
  defaultCategories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  defaultChains = [1, 2, 3, 4, 5, 6, 7];
  defaultSort = "pricePrimaryValue,asc";
  defaultPage = 0;
  defaultSize = 10;

  constructor(private http: HttpClient) {
  }

  getProductDetails(productId: number) {
    let url = `${BASE_URL}/products/${productId}`;
    return this.http.get<ProductDetails>(url);
  }

  getProductsList(search: string = this.defaultSearch, categories: number[] = this.defaultCategories, chains: number[] = this.defaultChains, sort: string = this.defaultSort, page: number = this.defaultPage, size: number = this.defaultSize) {
    return this.http.get<ProductWPriceList>(BASE_URL + "/products/list", {
      params: {
        search,
        categories,
        chains,
        sort,
        page,
        size
      }
    });
  }

}
