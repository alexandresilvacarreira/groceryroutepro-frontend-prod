import {Component} from '@angular/core';
import {faCalendar} from "@fortawesome/free-regular-svg-icons/faCalendar";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons/faCircleArrowLeft";
import {faCircleArrowRight} from "@fortawesome/free-solid-svg-icons/faCircleArrowRight";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {NavigationService} from "../../services/navigation.service";
import {GoogleApiService} from "../../services/google-api.service";
import {RouteObject, ShoppingList, User} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent {

  protected readonly faCalendar = faCalendar;
  protected readonly faCircleArrowLeft = faCircleArrowLeft;
  protected readonly faCircleArrowRight = faCircleArrowRight;
  protected readonly faArrowLeft = faArrowLeft;

  //input Variables
  routes?: RouteObject[];
  cheapestRoute?: RouteObject;
  fastestRoute?: RouteObject;
  savings?: number;
  shoppingList?: ShoppingList;
  showToast = false;
  toastMessage = "";


  previousRoute = '';

  constructor(private router: Router, private route: ActivatedRoute, private productsService: ProductsService, private navigationService: NavigationService,
              private googleApiService: GoogleApiService, private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {


    this.previousRoute = this.navigationService.getPreviousRoute();
    this.googleApiService.getRoutes().subscribe(response => {
      this.showToast = false;
      this.routes = response.data.routes;
      if (!response.success && this.routes.length != 0) {
        this.showToast = true;
        this.toastMessage = "Lista de compras foi alterada, deves gerar nova rota"
      }
      if (this.routes.length != 0) {
        this.cheapestRoute = this.routes[0];
        this.fastestRoute = this.routes[1];
        this.savings = Number((this.fastestRoute.shoppingListCost - this.cheapestRoute.shoppingListCost).toFixed(2));
      }
    })
    this.shoppingListService.shoppingList.subscribe(list => {
      if (list)
        this.shoppingList = list;
    });
  }

  protected readonly faCirclePlus = faCirclePlus;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faRoute = faRoute;
}
