import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
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

  @Output() closeEvent= new EventEmitter<void>;
  form!: FormGroup;
  sort!: string;
  categories!: number[];
  chains!: number[];

  constructor(private formBuilder: FormBuilder, private filterService : ProductFilterService) {

    this.form = this.formBuilder.group({
      sort: new FormControl(''),
      categories: this.formBuilder.array([]),
      chains: this.formBuilder.array([])
    });

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
    this.form.controls['sort'].setValue(option);
  }

  setCategory(category: number) {
    let categories = this.form.controls['categories'] as FormControl;
    categories.setValue([...categories.value, category]);
  }

  setChain(chain: number) {
    let chains = this.form.controls['chains'] as FormControl;
    chains.setValue([...chains.value, chain]);
  }

  emitCloseEvent(){
    this.closeEvent.emit();
  }

}

