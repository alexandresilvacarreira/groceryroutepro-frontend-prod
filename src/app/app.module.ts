import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SplashComponent } from './components/splash/splash.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./pages/login/login.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {HeaderDashboardComponent} from "./components/header-dashboard/header-dashboard.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {HighlightCarouselComponent} from "./components/highlight-carousel/highlight-carousel.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SplashComponent,
    LoginComponent,
    SignupComponent,
    HeaderDashboardComponent,
    DashboardComponent,
    HighlightCarouselComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
