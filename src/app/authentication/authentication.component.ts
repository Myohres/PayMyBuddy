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

  authentication(login: string, password: string) {
    this.userService.getUserByEmail(login)
      .subscribe(
        data => {
          console.log("data : ", data);
          console.log("password : ", password);
          if (data.password == password){
            this.userService.setUserId(data.id);
            this.router.navigate(['/menu']);
          } else
            this.message = "login or Password wrong";
          this.login = '';
          this.password = '';
        },
        error => {
          this.message = "login or Password wrong";
        }
      );
  }
}

