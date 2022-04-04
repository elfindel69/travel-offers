import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Offer } from 'src/app/models/offer.model';
import { OfferService } from 'src/app/services/offer/offer.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {

    offer: Offer | undefined
  constructor(private route: ActivatedRoute, private offerService: OfferService,
              private router:Router) {

  }

  ngOnInit(): void {
      const id = this.route.snapshot.params.id;
     this.offerService.getOfferByID(id).then((offer) => {this.offer = offer});
  }

    onSubmitEditOffer(offer: Offer):void {
        this.offerService.update(offer).then(()=>this.router.navigateByUrl("offers"))
    }
}
