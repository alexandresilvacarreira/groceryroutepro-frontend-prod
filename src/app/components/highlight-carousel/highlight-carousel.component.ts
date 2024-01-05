import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ProductWPrice} from "../../interfaces";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-highlight-carousel',
  templateUrl: './highlight-carousel.component.html',
  styleUrls: ['./highlight-carousel.component.scss'],
  animations: [
      trigger('slideAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)'}),
          animate('1s ease-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0%)', position: 'absolute'}),
          animate('500ms ease-out', style({transform: 'translateX(100%)', position: 'absolute'}))
        ])
      ])
  ]
})


export class HighlightCarouselComponent implements OnInit {

  products?: ProductWPrice[];
  productIndex = 0;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {

    this.productsService.getProductsList(undefined, undefined, undefined, "priceDiscountPercentage,desc", undefined, 3).subscribe(productWPriceList =>{
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
    }, 2000)

  }


}
