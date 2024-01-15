import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ProductSearchFilterOptions} from "../interfaces";

@Injectable({
  providedIn: "root"
})

export class ProductFilterService {

  // criar interface 'productSearchFilter' que tem as categorias, as chains e o sort, em vez de tratar individualmente, porque é tudo enviado de uma vez

  private defaultProductFilterValues: ProductSearchFilterOptions = {sort: "pricePrimaryValue,asc", chains: [1, 2, 3, 4, 5, 6, 7], categories:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };

  private filterOptions = new BehaviorSubject<ProductSearchFilterOptions>(this.defaultProductFilterValues);

  getFilterValues(){
    return this.filterOptions.asObservable();
  }

  setFilterValues(filterOptions : ProductSearchFilterOptions){
    this.filterOptions.next(filterOptions);
  }

}
