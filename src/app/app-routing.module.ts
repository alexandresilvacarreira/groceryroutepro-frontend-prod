import { NgModule } from '@angular/core';
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

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate: [buildGuard("/login")]},
  {path: 'login', component: LoginComponent},
  {path: 'confirm-registration', component: ConfirmRegistrationComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'product-details/:productId', component: ProductDetailsComponent, canActivate: [buildGuard("/login")]},
  {path: 'search', component: SearchComponent, canActivate: [buildGuard("/login")]},
  {path: 'verify-account', component: VerifyAccountComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
