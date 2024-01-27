import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons/faTrashCan";
import {ProductQuantity, GenericProductQuantity, ShoppingList} from "../../interfaces";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RemoveProductConfirmationComponent} from "../remove-product-confirmation/remove-product-confirmation.component";
import {ShoppingListService} from "../../services/shopping-list.service";

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

  constructor(public dialog: MatDialog, private shoppingListService: ShoppingListService) {
  }

  openRemoveDialog(event:Event, productName:string, genericProductId : number){

    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();

    /*let dialogRef =*/ this.dialog.open(RemoveProductConfirmationComponent, {
      data: { productName, genericProductId },
    });
    // dialogRef.afterClosed().subscribe(updatedList => {
    //   this.updatedShoppingList.emit(updatedList);
    // })
  }

  updateList(event:Event, genericProductId : number, add = true){

    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();

    if (add) {
      this.shoppingListService.addProduct(genericProductId)
    } else {
      if (this.genericProductQuantity?.quantity === 1) {
        this.openRemoveDialog(event, this.genericProductQuantity.genericProduct.name, this.genericProductQuantity.genericProduct.id);
      } else {
        this.shoppingListService.removeProduct(genericProductId)
      }
    }
  }

}
