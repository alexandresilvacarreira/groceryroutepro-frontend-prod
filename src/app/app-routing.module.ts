import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ConfirmRegistrationComponent} from "./pages/confirm-registration/confirm-registration.component";
import {ErrorComponent} from "./pages/error/error.component";

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'confirm-registration', component: ConfirmRegistrationComponent},
  {path: 'error', component: ErrorComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
