import {Component, Inject} from '@angular/core';
import {faCartPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";


@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {

  protected readonly faCartPlus = faCartPlus;
  message: string;
  success: boolean

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { success: boolean, message: string }) {
    this.success = data.success;
    this.message = data.message;
  }

  protected readonly faXmark = faXmark;
}
