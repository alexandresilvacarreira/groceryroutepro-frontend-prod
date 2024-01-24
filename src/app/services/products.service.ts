import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {
    Category,
    Product,
    ProductData,
    ProductDetails,
    ProductWPrice,
    ProductWPriceList,
    ServerResponse,
    Signup,
    GenericProductsListResponse,
    GenericProductResponse
} from "../interfaces";
import {Observable} from "rxjs";
import {BaseRowDef} from "@angular/cdk/table";

const BASE_URL = environment.BASE_URL;


@Injectable({
    providedIn: "root"
})

export class ProductsService {

    defaultSearch = "";
    defaultCategories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    defaultChains = [1, 2, 3, 4, 5, 6, 7];
    defaultSort = "currentLowestPricePrimaryValue,asc";
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

    getGenericProduct(genericProductId: number) {
        let url = `${BASE_URL}/products/generic-products/${genericProductId}`;
        return this.http.get<GenericProductResponse>(url);
    }


    getGenericProductsList(search: string = this.defaultSearch, categories: number[] = this.defaultCategories, chains: number[] = this.defaultChains, sort: string = this.defaultSort, page: number = this.defaultPage, size: number = this.defaultSize) {
        return this.http.get<GenericProductsListResponse>(BASE_URL + "/products/generic-products/list", {
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

    createNewProduct(productData: ProductData): Observable<ServerResponse> {

        return this.http.post<ServerResponse>(BASE_URL + "/products/create", productData)
    }

    editProduct(productData: ProductData): Observable<ServerResponse> {

        return this.http.post<ServerResponse>(BASE_URL + "/products/edit", productData)
    }

    getCategories(): Observable<Category[]> {
        let url = BASE_URL + "/products/categories";
        return this.http.get<Category[]>(url);
    }

    getProductData(productId: number) {
        let url = BASE_URL + "/products/${productId}";
        return this.http.get<ProductData>(url);
    }


}
