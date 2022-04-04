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

    getOfferByID(id: string):Promise<Offer> {
        //creation des headers
      //  let headers = new HttpHeaders();
        //token
     //   headers = headers.append('Authorization',this.authService.token.getValue());

        //requête HTTP get
      /* return this.httpClient.get("http://angular-eval.herokuapp.com/api/v1/offers/"+id,{headers})
            //transfomation du JSON en Array<Offer>
            .pipe(map((data:any) =>Offer.fromJSON(data.offer)))
            //transformation de l'observable en promise
            .toPromise()*/

        // Solution with the cache

        return new Promise<Offer>(
          (res, rej) => {

            const offers = this.offers.getValue();

            for (const offer of offers) {
              if (offer.id === id) {
                res(offer);
                break;
              }
            }

          }
        );
    }

    save(offer: Offer) :Promise<any>{
        const offers = this.offers.getValue();
        offer.id = offers.length.toString();
        offers.push(offer);
        this.offers.next(offers);

        let headers = new HttpHeaders();
        //token
        headers = headers.append('Authorization',this.authService.token.getValue());
        return this.httpClient.post("http://angular-eval.herokuapp.com/api/v1/offers/",offer.toJSON(),{headers}).toPromise();
    }

    update(offerEdited: Offer):Promise<any> {
        const offers = this.offers.getValue();

        for (const[index, offer] of offers.entries()) {
            if(offer.id === offerEdited.id){
                offers[index] = offerEdited;
                this.offers.next(offers);
                break;
            }
        }



        let headers = new HttpHeaders();
        //token
        headers = headers.append('Authorization',this.authService.token.getValue());
        return this.httpClient.post("http://angular-eval.herokuapp.com/api/v1/offers/"+offerEdited.id,offerEdited.toJSON(),{headers}).toPromise();
    }

    delete(id: string|null ):Promise<any> {

                const offers = this.offers.getValue();
                for (const[index, offer] of offers.entries()) {
                    if(offer.id === id){
                        offers.splice(index,1);
                        this.offers.next(offers);
                        break;
                    }
                }
                let headers = new HttpHeaders();
                //token
                headers = headers.append('Authorization',this.authService.token.getValue());
                return this.httpClient.get("http://angular-eval.herokuapp.com/api/v1/offers/delete/"+id,{headers}).toPromise();

    }
}
