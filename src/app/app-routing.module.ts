import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {OffersComponent} from "./views/offers/offers.component";
import { SingleOfferComponent } from './views/single-offer/single-offer.component';
import {ErrorComponent} from "./views/error/error.component";

const routes: Routes = [
    {path: '',component:LoginComponent},
    {path:"offers",component:OffersComponent},
    {path: 'offers/:id',component:SingleOfferComponent},
    {path: 'not-found',component:ErrorComponent},
    {path:"**",redirectTo:'not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
