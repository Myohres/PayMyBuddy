import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) {
  }

  link: string = '';
  login: string = '';
  password: string = '';
  message: string = '';

  ngOnInit(): void {
  }

  loginOnKey(event: KeyboardEvent) {
    this.login = (<HTMLInputElement>event.target).value;
  }

  passWordOnKey(event: KeyboardEvent) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  authentication(email: string, password: string) {
    this.userService.login(email, password);
  }
}

