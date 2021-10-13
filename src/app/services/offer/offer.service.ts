import { Injectable } from '@angular/core';
import {Offer} from "../../models/offer.model";
import {BehaviorSubject, Subscription} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

    offers:BehaviorSubject<Array<Offer>> ;
  constructor(private httpClient: HttpClient, private authService:AuthService) {
      this.offers = new BehaviorSubject<Array<Offer>>([]);
        this.getOffers();

  }

  getOffers():void{
        //creation des headers
        let headers = new HttpHeaders();
        //token
        headers = headers.append('Authorization',this.authService.token.getValue());

        //requête HTTP get
        this.httpClient.get("http://angular-eval.herokuapp.com/api/v1/offers",{headers})
            //transfomation du JSON en Array<Offer>
            .pipe(map((data:any) =>data.offers.map( (offerAsJSON:any) => Offer.fromJSON(offerAsJSON))))
            //transformation de l'observable en promise
            .toPromise()
            //envoi des Offer depuis l'observable
            .then((offers:Array<Offer>)=>this.offers.next(offers))

  }
}
