import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor() {
  }

  link: string = '';
  login: string = '';
  password: string = '';
  message: string = '';
  user: User = new User();
  /*userService: UserService = new UserService();*/



  ngOnInit(): void {
  }

  loginOnKey(event: KeyboardEvent) {
    this.login = (<HTMLInputElement>event.target).value;
  }

  passWordOnKey(event: KeyboardEvent) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  authentication(login: string, password: string) {

    /*try {
      this.user = this.userService.getUserByEmail(login);
    } finally {
      if (this.user.email == login && this.user.password == password) {
        this.link = "menu";
      } else {
        this.message = "login or Password wrong";
      this.user = new User();
      this.login = '';
      this.password = '';
      }
    }*/
}}

