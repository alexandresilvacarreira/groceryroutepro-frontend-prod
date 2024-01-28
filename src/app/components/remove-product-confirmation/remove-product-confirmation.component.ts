import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-remove-product-confirmation',
  templateUrl: './remove-product-confirmation.component.html',
  styleUrls: ['./remove-product-confirmation.component.scss']
})
export class RemoveProductConfirmationComponent {

  constructor(public dialogRef: MatDialogRef<RemoveProductConfirmationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {productName: string, genericProductId : number},
              private shoppingListService : ShoppingListService){}

  closeDialog(){
    this.dialogRef.close();
  }

  removeProduct(){
    this.shoppingListService.removeAll(this.data.genericProductId)
    .subscribe(shoppingListResponse => {
      this.dialogRef.close();
    })
  }

  protected readonly faCircleXmark = faCircleXmark;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faCircleExclamation = faCircleExclamation;
}
