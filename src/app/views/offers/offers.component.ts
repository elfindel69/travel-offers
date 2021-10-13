import { Component, OnInit } from '@angular/core';
import {OfferService} from "../../services/offer/offer.service";
import {Subscription} from "rxjs";
import {Offer} from "../../models/offer.model";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offersSubs : Subscription;
  offers:Array<Offer>;
  constructor(private offerService: OfferService) {
      this.offers = new Array<Offer>();
      this.offersSubs = new Subscription();
  }

  ngOnInit(): void {
      this.offersSubs = this.offerService.offers.subscribe(offers =>{
          console.log(offers);
          this.offers = offers;
      } );
  }

  ngOnDestroy():void{
      this.offersSubs.unsubscribe();
  }

}
