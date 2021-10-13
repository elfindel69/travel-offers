import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    token:string;
    tokenSub:Subscription
  constructor(private authService:AuthService) {
      this.token = '';
      this.tokenSub = new Subscription();
  }

  ngOnInit(): void {
        this.tokenSub = this.authService.token.subscribe((token:string) =>this.token = token);

  }

  ngOnDestroy(): void {
        this.tokenSub.unsubscribe();
  }

}
