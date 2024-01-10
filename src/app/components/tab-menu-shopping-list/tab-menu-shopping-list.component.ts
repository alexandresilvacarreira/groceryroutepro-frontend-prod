import {Component} from '@angular/core';
import {slideAnimationTabMenu} from "../../animations";

@Component({
  selector: 'app-tab-menu-shopping-list',
  templateUrl: './tab-menu-shopping-list.component.html',
  styleUrls: ['./tab-menu-shopping-list.component.scss'],
  animations: [slideAnimationTabMenu]
})
export class TabMenuShoppingListComponent {

  activeTab: string = 'tab1';

  onTabClick(tab: string) {
    this.activeTab = tab;
  }

  protected readonly onclick = onclick;
}
