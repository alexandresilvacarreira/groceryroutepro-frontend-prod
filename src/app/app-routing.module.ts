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


const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent, canActivate: [buildGuard("/dashboard", false)]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent, canActivate: [buildGuard("/dashboard", false)]},
  {path: 'confirm-registration', component: ConfirmRegistrationComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [buildGuard("/login")]},
  {path: 'product-details/:productId', component: ProductDetailsComponent, canActivate: [buildGuard("/login")]},
  {path: 'search', component: SearchComponent, canActivate: [buildGuard("/login")],  data: {title: 'Pesquisa'}},
  {path: 'verify-account/:email', component: VerifyAccountComponent},
  {path: 'shopping-list', component: ShoppingListComponent, canActivate: [buildGuard("/login")], data: {title: 'Lista de Compras'}},
  {path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'forgot-password-confirm', component: ForgotPasswordSucessComponent },
  {path: 'change-password/:header', component: ChangePasswordComponent },
  {path: 'change-password-confirm', component: ConfirmChangePasswordComponent },
  {path: 'routes', component: RoutesComponent, canActivate: [buildGuard("/login")], data: {title: 'Rotas'}},
  {path: 'history', component: HistoryComponent, canActivate: [buildGuard("/login")], data: {title: 'Histórico'}},
  {path: 'history-products', component: HistoryProductsComponent, canActivate: [buildGuard("/login")]},
  {path: 'history-routes', component: HistoryRoutesComponent, canActivate: [buildGuard("/login")]},
  {path: '**', redirectTo: '/error', pathMatch: 'full'}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
