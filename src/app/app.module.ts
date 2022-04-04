import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OffersComponent } from './views/offers/offers.component';
import {AuthService} from "./services/auth/auth.service";
import {OfferService} from "./services/offer/offer.service";
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './views/error/error.component';
import { SingleOfferComponent } from './views/single-offer/single-offer.component';
import { LoginComponent } from './views/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OffersFormComponent } from './components/offers-form/offers-form.component';
import { AddOfferComponent } from './views/add-offer/add-offer.component';
import { EditOfferComponent } from './views/edit-offer/edit-offer.component';
import {ErrorsFormComponent} from "./components/errors-form/errors-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OffersComponent,
    ErrorComponent,
    SingleOfferComponent,
    LoginComponent,
    OffersFormComponent,
    ErrorsFormComponent,
    AddOfferComponent,
    EditOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [
      AuthService,
      OfferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
