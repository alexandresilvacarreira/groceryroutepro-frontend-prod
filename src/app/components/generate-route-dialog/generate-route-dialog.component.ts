import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-generate-route-dialog',
  templateUrl: './generate-route-dialog.component.html',
  styleUrls: ['./generate-route-dialog.component.scss']
})
export class GenerateRouteDialogComponent {

  constructor(public dialogRef: MatDialogRef<GenerateRouteDialogComponent>){
  }

}
