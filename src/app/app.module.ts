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
import {HeaderDashboardComponent} from "./components/header-dashboard/header-dashboard.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MobileNavbarComponent} from "./components/mobile-navbar/mobile-navbar.component";
import {SignupComponent} from "./pages/signup/signup.component";
import { ConfirmRegistrationComponent } from './pages/confirm-registration/confirm-registration.component';
import { ErrorComponent } from './pages/error/error.component';
import { DesktopNavbarComponent } from './components/desktop-navbar/desktop-navbar.component';
import {LoginComponent} from "./pages/login/login.component";
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SearchComponent } from './pages/search/search.component';
import {DatePipe, registerLocaleData} from "@angular/common";
import localePt from '@angular/common/locales/pt';
import { ChainStickerComponent } from './components/chain-sticker/chain-sticker.component';
import { PriceHistoryChartComponent } from './components/price-history-chart/price-history-chart.component';
import { NgChartsModule } from 'ng2-charts';
import Chart from 'chart.js/auto';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import {UserPanelComponent} from "./components/user-panel/user-panel.component";
import {HighlightCarouselComponent} from "./components/highlight-carousel/highlight-carousel.component";

Chart.defaults.font.family = 'Lato';
Chart.defaults.font.size = 16;
Chart.defaults.font.weight = 500;

registerLocaleData(localePt, 'pt'); // Register the locale data

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SplashComponent,
    HeaderDashboardComponent,
    DashboardComponent,
    MobileNavbarComponent,
    SignupComponent,
    LoginComponent,
    ConfirmRegistrationComponent,
    ErrorComponent,
    DesktopNavbarComponent,
    ProductDetailsComponent,
    SearchComponent,
    ChainStickerComponent,
    PriceHistoryChartComponent,
    ProductListItemComponent,
    UserPanelComponent,
    HighlightCarouselComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
