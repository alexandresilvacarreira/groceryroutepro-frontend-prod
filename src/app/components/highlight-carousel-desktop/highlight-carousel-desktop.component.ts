import {Component} from '@angular/core';
import {ProductWPrice} from "../../interfaces";
import {ProductsService} from "../../services/products.service";
import {BehaviorSubject} from "rxjs";
import {slideFirst, slideLast, slideMiddle} from "../../animations";

@Component({
  selector: 'app-highlight-carousel-desktop',
  templateUrl: './highlight-carousel-desktop.component.html',
  styleUrls: ['./highlight-carousel-desktop.component.scss'],
  animations: [slideFirst, slideMiddle, slideLast]
})
export class HighlightCarouselDesktopComponent {

  products?: ProductWPrice[];
  firstProduct?: ProductWPrice;
  secondProduct?: ProductWPrice;
  thirdProduct?: ProductWPrice;
  productArray?: ProductWPrice[];
  loopCounter = 0;
  loaded = true;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {

    this.productsService.getProductsList(undefined, undefined, [2, 5], "priceDiscountPercentage,desc", undefined, 21).subscribe(productWPriceList => {
      if (productWPriceList.success) {
        this.products = productWPriceList.products;
        this.productArray = productWPriceList.products.slice(0, 3);
        this.firstProduct = this.productArray[0];
        this.secondProduct = this.productArray[1];
        this.thirdProduct = this.productArray[2];
        this.startCarousel();
      }
    })
  }

  startCarousel() {

    setInterval(() => {

      this.loaded = false;
      setTimeout(()=>{
        this.loaded = true
      }, 1)

      this.rotateProducts();
    }, 4000);

  }

  rotateProducts() {
    if (this.products && this.loopCounter >= this.products.length - 3) {
      this.loopCounter = 0;
    }
    if (this.products) {
      this.productArray = this.products.slice(this.loopCounter, this.loopCounter + 3);
      this.firstProduct = this.productArray[0];
      this.secondProduct = this.productArray[1];
      this.thirdProduct = this.productArray[2];
    }
    this.loopCounter += 3;
  }

}
