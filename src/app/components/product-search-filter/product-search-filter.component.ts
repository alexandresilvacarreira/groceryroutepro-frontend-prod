import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCircle} from "@fortawesome/free-regular-svg-icons/faCircle";
import {faCircle as faCircleSolid} from "@fortawesome/free-solid-svg-icons/faCircle";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {ProductFilterService} from "../../services/product-filter.service";


@Component({
  selector: 'app-product-search-filter',
  templateUrl: './product-search-filter.component.html',
  styleUrls: ['./product-search-filter.component.scss']
})
export class ProductSearchFilterComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<void>;
  sort!: string;
  categories!: number[];
  chains!: number[];
  @Input() forStore!:boolean;

  constructor(private filterService: ProductFilterService) {
  }

  ngOnInit(): void {

    this.filterService.getFilterValues().subscribe(filterOptions => {
      this.sort = filterOptions.sort;
      this.categories = filterOptions.categories;
      this.chains = filterOptions.chains;
    });

  }

  protected readonly faCircle = faCircle;
  protected readonly faCircleSolid = faCircleSolid;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faCircleXmark = faCircleXmark;
  protected readonly faArrowLeft = faArrowLeft;


  setSorting(option: string) {
    this.sort = option;
  }

  setCategory(category: number) {
    this.categories.includes(category) ? this.categories = this.categories.filter(c => c !== category) : this.categories = [...this.categories, category];
  }

  setChain(chain: number) {
    this.chains.includes(chain) ? this.chains = this.chains.filter(c => c !== chain) : this.chains = [...this.chains, chain];
  }

  emitCloseEvent() {
    this.closeEvent.emit();
  }

  applyFilter() {
    this.filterService.setFilterValues({
      sort: this.sort,
      chains: this.chains,
      categories: this.categories
    });
    this.closeEvent.emit();
  }

}
