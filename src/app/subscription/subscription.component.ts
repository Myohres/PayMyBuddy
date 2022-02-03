import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {FormControl} from "@angular/forms";
import {UserService} from "../service/user.service";
import {catchError, first, Observable} from "rxjs";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private userService: UserService,

  ) { }

  firstname: FormControl = new FormControl();
  lastname: FormControl = new FormControl();
  email: FormControl = new FormControl();
  password: FormControl = new FormControl();
  booleanEssai!: boolean;
  message: string = '';

  userTmp: User = {
    id:0,
    email: "",
    password: ""
  };

  ngOnInit(): void {

  }

  public loginNotNull(): boolean{
    if (this.email.value != null && this.password.value != null) {
      return true;
    } else {
      this.message = "email or password cant be null";
      return false;
    }
  }


  public subscription() {
    this.message = "";
    console.log("login not null : " +this.loginNotNull())
    if (this.loginNotNull()){
      this.userTmp.email = this.email.value;
      this.userTmp.password = this.password.value;
      console.log(this.userTmp.email);
      console.log(this.userTmp.password)
      this.userService.register(this.email.value, this.userTmp)
    }
    this.email.reset();
    this.password.reset();
  }

}
