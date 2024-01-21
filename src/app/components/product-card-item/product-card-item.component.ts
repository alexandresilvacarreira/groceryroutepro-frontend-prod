import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons/faTrashCan";
import {ProductQuantity, GenericProductQuantity, ShoppingList} from "../../interfaces";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RemoveProductConfirmationComponent} from "../remove-product-confirmation/remove-product-confirmation.component";

@Component({
  selector: 'app-product-card-item',
  templateUrl: './product-card-item.component.html',
  styleUrls: ['./product-card-item.component.scss']
})
export class ProductCardItemComponent {

  protected readonly faRoute = faRoute;
  protected readonly faTrashCan = faTrashCan;

  @Input() genericProductQuantity?:GenericProductQuantity;
  @Input() productQuantity?:ProductQuantity;
  @Output() updatedShoppingList = new EventEmitter<ShoppingList>;

  constructor(public dialog: MatDialog) {
  }

  openRemoveDialog(event:Event, productName:string, genericProductId : number){

    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();

    let dialogRef = this.dialog.open(RemoveProductConfirmationComponent, {
      data: { productName, genericProductId },
    });

    dialogRef.afterClosed().subscribe(updatedList => {
      this.updatedShoppingList.emit(updatedList);
    })

  }

  refreshShoppingList(){

  }

}
