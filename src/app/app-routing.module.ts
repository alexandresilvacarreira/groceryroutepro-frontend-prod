import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ConfirmRegistrationComponent} from "./pages/confirm-registration/confirm-registration.component";
import {ErrorComponent} from "./pages/error/error.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";
import {SearchComponent} from "./pages/search/search.component";
import {buildGuard} from "./guards/auth.guard";
import {VerifyAccountComponent} from "./pages/verify-account/verify-account.component";
import {ShoppingListComponent} from "./pages/shopping-list/shopping-list.component";
import {ForgotPasswordComponent} from "./pages/forgot-password/forgot-password.component";
import {ForgotPasswordSucessComponent} from "./pages/forgot-password-sucess/forgot-password-sucess.component";
import {ChangePasswordComponent} from "./pages/change-password/change-password.component";
import {ConfirmChangePasswordComponent} from "./pages/confirm-change-password/confirm-change-password.component";
import {RoutesComponent} from "./pages/routes/routes.component";
import {HistoryComponent} from "./pages/history/history.component";
import {HistoryProductsComponent} from "./pages/history-products/history-products.component";
import {HistoryRoutesComponent} from "./pages/history-routes/history-routes.component";
import {CreateRouteComponent} from "./pages/create-route/create-route.component";
import {ShopEditProductComponent} from "./pages/Shop-Pages/shop-edit-product/shop-edit-product.component";

import {TestPageComponent} from "./pages/test-page/test-page.component";
import {
  ShopHeaderDashboardComponent
} from "./components/shop-components/shop-header-dashboard/shop-header-dashboard.component";
import {ShopDashboardComponent} from "./pages/Shop-Pages/shop-dashboard/shop-dashboard.component";
import {ShopNewProductComponent} from "./pages/Shop-Pages/shop-new-product/shop-new-product.component";
import {roleGuard} from "./guards/role.guard";
import {ShopNotificationsComponent} from "./pages/Shop-Pages/shop-notifications/shop-notifications.component";


const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent, canActivate: [buildGuard("/dashboard", false), ]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent, canActivate: [buildGuard("/dashboard", false)]},
  {path: 'confirm-registration', component: ConfirmRegistrationComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [buildGuard("/login"),  roleGuard("USER_FREE")]},
  {path: 'product-details/:genericProductId', component: ProductDetailsComponent, canActivate: [buildGuard("/login"),  roleGuard("USER_FREE")]},
  {path: 'search', component: SearchComponent, canActivate: [buildGuard("/login"),  roleGuard("USER_FREE")], data: {title: 'Pesquisa'}},
  {path: 'verify-account/:email', component: VerifyAccountComponent},
  {path: 'shopping-list', component: ShoppingListComponent, canActivate: [buildGuard("/login"),  roleGuard("USER_FREE")], data: {title: 'Lista de Compras'}},
  {path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'forgot-password-confirm', component: ForgotPasswordSucessComponent },
  {path: 'change-password/:header', component: ChangePasswordComponent },
  {path: 'change-password-confirm', component: ConfirmChangePasswordComponent },
  {path: 'routes', component: RoutesComponent, canActivate: [buildGuard("/login"),  roleGuard("USER_FREE")], data: {title: 'Rotas'}},
  {path: 'history', component: HistoryComponent, canActivate: [buildGuard("/login"),  roleGuard("USER_FREE")], data: {title: 'Histórico'}},
  {path: 'history-products', component: HistoryProductsComponent, canActivate: [buildGuard("/login"),  roleGuard("USER_FREE")]},
  {path: 'history-routes', component: HistoryRoutesComponent, canActivate: [buildGuard("/login"),  roleGuard("USER_FREE")]},
  {path: 'create-route', component: CreateRouteComponent},
  {path: 'test-page', component: TestPageComponent, canActivate: [buildGuard("/login")]},
//[roleGuard("STORE")]
  {path: 'shop-dashboard', component: ShopDashboardComponent, canActivate: [buildGuard("/login"), roleGuard("STORE")]},
  {path: 'shop-new-product', component: ShopNewProductComponent, canActivate: [buildGuard("/login")]},
  {path: 'shop-edit-product/:productId', component: ShopEditProductComponent, canActivate: [buildGuard("/login")]},
  {path: 'shop-notifications', component: ShopNotificationsComponent, canActivate: [buildGuard("/login")]},

  {path: '**', redirectTo: '/error', pathMatch: 'full'},




];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
