import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    token: BehaviorSubject<string>
  constructor(private http:HttpClient) {
        this.token = new BehaviorSubject<string>("");
  }

    login():Promise<any> {
            return this.http.post("http://angular-eval.herokuapp.com/api/v1/login",{
                email:"contact@thomaschevalier.fr",
                password: "azerty"
            }).toPromise().then((resp:any) =>{this.token.next(resp.token)});
    }
}
