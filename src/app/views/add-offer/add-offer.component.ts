import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer/offer.service';
import {Offer} from "../../models/offer.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  constructor(private offerService: OfferService, private router: Router) { }

  ngOnInit(): void {
  }

    onSubmitAddOffer(offer: Offer):void {
        this.offerService.save(offer).then(()=>{this.router.navigateByUrl("/offers")})
    }
}
