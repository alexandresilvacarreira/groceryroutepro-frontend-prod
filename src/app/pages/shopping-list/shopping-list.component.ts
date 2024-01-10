import {Component, Input} from '@angular/core';
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {


  protected readonly faCoins = faCoins;
}
