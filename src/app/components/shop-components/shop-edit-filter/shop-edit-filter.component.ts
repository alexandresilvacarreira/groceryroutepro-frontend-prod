import {Component, EventEmitter, Output} from '@angular/core';
import {ProductFilterService} from "../../../services/product-filter.service";
import {faCircle} from "@fortawesome/free-regular-svg-icons/faCircle";
import {faCircle as faCircleSolid} from "@fortawesome/free-solid-svg-icons/faCircle";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-shop-edit-filter',
  templateUrl: './shop-edit-filter.component.html',
  styleUrls: ['./shop-edit-filter.component.scss']
})
export class ShopEditFilterComponent {

  @Output() closeEvent = new EventEmitter<void>;
  sort!: string;
  categories!: number[];
  chains!: number[];

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

