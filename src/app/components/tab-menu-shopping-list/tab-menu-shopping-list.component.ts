import {Component} from '@angular/core';

@Component({
  selector: 'app-tab-menu-shopping-list',
  templateUrl: './tab-menu-shopping-list.component.html',
  styleUrls: ['./tab-menu-shopping-list.component.scss']
})
export class TabMenuShoppingListComponent {

  activeTab: string = 'tab1';

  onTabClick(tab: string) {
    this.activeTab = tab;
  }

  protected readonly onclick = onclick;
}
