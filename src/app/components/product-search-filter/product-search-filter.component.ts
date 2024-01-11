import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faCircle} from "@fortawesome/free-regular-svg-icons/faCircle";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {NavigationService} from "../../services/navigation.service";


@Component({
  selector: 'app-product-search-filter',
  templateUrl: './product-search-filter.component.html',
  styleUrls: ['./product-search-filter.component.scss']
})
export class ProductSearchFilterComponent implements OnInit {
  previousRoute = '';
  @Output() closeEvent=new EventEmitter<void>

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {

    this.previousRoute = this.navigationService.getPreviousRoute();

  }

  protected readonly faCircle = faCircle;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faCircleXmark = faCircleXmark;
  protected readonly faArrowLeft = faArrowLeft;

  emitCloseEvent(){
    this.closeEvent.emit();
  }
}
