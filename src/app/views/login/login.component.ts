import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

    onClickLogin():void {
        this.authService.login().then(() => {
            this.router.navigateByUrl("offers");
        });
    }
}
