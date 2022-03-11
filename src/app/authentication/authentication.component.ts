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
    this.userService.getUserByEmail(email)
      .subscribe(
        data => {
          console.log("data : ", data);
          console.log("password : ", password);
          if (data.password == password){
            this.userService.setUserId(data.id);
            this.userService.setUserLastName(data.lastName);
            this.userService.setUserFirstName(data.firstName);
            this.userService.setContactList(data.contactList);
            this.router.navigate(['/Transfer']);
          } else
            this.message = "email or Password wrong";
          this.login = '';
          this.password = '';
        },
        error => {
          this.message = "email or Password wrong";
        }
      );
  }
}

