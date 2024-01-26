import { Component } from '@angular/core';
import {ProductWPrice} from "../../interfaces";
import {ProductsService} from "../../services/products.service";
import {BehaviorSubject} from "rxjs";
import {slideAnimation} from "../../animations";

@Component({
  selector: 'app-highlight-carousel-desktop',
  templateUrl: './highlight-carousel-desktop.component.html',
  styleUrls: ['./highlight-carousel-desktop.component.scss'],
  animations: [slideAnimation]
})
export class HighlightCarouselDesktopComponent {

  products?: ProductWPrice[];
  firstProduct?: ProductWPrice;
  secondProduct?: ProductWPrice;
  thirdProduct?: ProductWPrice;
  productArray = new BehaviorSubject<ProductWPrice[]>([]);
  loopCounter = 0;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {

    this.productsService.getProductsList(undefined, undefined, [2,5], "priceDiscountPercentage,desc", undefined, 9).subscribe(productWPriceList =>{
      if (productWPriceList.success){
        this.products = productWPriceList.products;
        this.productArray.next(productWPriceList.products.slice(0,3));
        this.productArray.subscribe(array => {
          this.firstProduct = array[0];
          this.secondProduct = array[1];
          this.thirdProduct = array[2];
        });

      }
    })

    //
    // setInterval(() => {
    //   if (this.products && this.loopCounter === this.products?.length-1) {
    //     this.productArray.next(this.products.slice(0,3));
    //     this.loopCounter = 0;
    //   } else {
    //     if (this.products){
    //       this.loopCounter += 3;
    //       this.productArray.next(this.products.slice(this.loopCounter, this.loopCounter+2));
    //     }
    //   }
    // }, 2000)

  }

}
