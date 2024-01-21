import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {
  GenericProductsListResponse,
  GenericProductResponse,
  ProductDetails,
  ProductWPriceList,
  ServerResponse,
  Signup,
  Product, ShoppingListResponse
} from "../interfaces";
import {Observable} from "rxjs";

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: "root"
})

export class ShoppingListService {

  constructor(private http: HttpClient) {
  }

  getShoppingList(){
    return this.http.get<ShoppingListResponse>(BASE_URL + "/shopping-list/get", {withCredentials: true});
  }

  addProduct(genericProductId : number){
    return this.http.post<ShoppingListResponse>(BASE_URL + "/shopping-list/add-product",{genericProductId}, {withCredentials: true});
  }

  removeProduct(genericProductId : number){
    return this.http.post<ShoppingListResponse>(BASE_URL + "/shopping-list/remove-product",{genericProductId}, {withCredentials: true});
  }

  removeAll(genericProductId : number){
    return this.http.post<ShoppingListResponse>(BASE_URL + "/shopping-list/remove-all",{genericProductId}, {withCredentials: true});
  }


}
