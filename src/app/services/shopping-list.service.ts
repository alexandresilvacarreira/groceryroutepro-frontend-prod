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
  Product, ShoppingListResponse, ShoppingList
} from "../interfaces";
import {BehaviorSubject, Observable, pipe, tap} from "rxjs";

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: "root"
})

export class ShoppingListService {
  _shoppingList = new BehaviorSubject<ShoppingList | null>(null);

  constructor(private http: HttpClient) {
  }

  get shoppingList(){
    return this._shoppingList.asObservable();
  }

  getShoppingList() {
    return this.http.get<ShoppingListResponse>(BASE_URL + "/shopping-list/get", {withCredentials: true})
      .pipe(tap(response => {
        this._shoppingList.next(response.data.shoppingList);
      }));
  }

  addProduct(genericProductId: number) {
    return this.http.post<ShoppingListResponse>(BASE_URL + "/shopping-list/add-product", {genericProductId}, {withCredentials: true})
      .pipe(tap(response => {
        this._shoppingList.next(response.data.shoppingList);
      }));
  }

  removeProduct(genericProductId: number) {
    return this.http.post<ShoppingListResponse>(BASE_URL + "/shopping-list/remove-product", {genericProductId}, {withCredentials: true})
      .pipe(tap(response => {
        this._shoppingList.next(response.data.shoppingList);
      }));
  }

  removeAll(genericProductId: number) {
    return this.http.post<ShoppingListResponse>(BASE_URL + "/shopping-list/remove-all", {genericProductId}, {withCredentials: true})
      .pipe(tap(response => {
        this._shoppingList.next(response.data.shoppingList);
      }));
  }


}
