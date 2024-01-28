import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ProductWPrice} from "../../interfaces";
import {slideAnimation} from "../../animations";

@Component({
  selector: 'app-highlight-carousel',
  templateUrl: './highlight-carousel.component.html',
  styleUrls: ['./highlight-carousel.component.scss'],
  animations: [slideAnimation]
})

export class HighlightCarouselComponent implements OnInit {

  products?: ProductWPrice[];
  productIndex = 0;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {

    this.productsService.getProductsList(undefined, undefined, [2,5], "priceDiscountPercentage,desc", undefined, 10).subscribe(productWPriceList =>{
      if (productWPriceList.success){
        this.products = productWPriceList.products;
      }
    })

    setInterval(() => {
      if (this.products && this.productIndex === this.products?.length-1) {
        this.productIndex = 0;
      } else {
        this.productIndex +=1;
      }
    }, 4000)
  }


}
