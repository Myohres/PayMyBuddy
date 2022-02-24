import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  public userId: number = 0;
  public userLastName: string = "";
  public userFirstName: string = "";

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userId = this.userService.getUserId();
    this.userLastName = this.userService.getUserLastName();
    this.userFirstName = this.userService.getUserFirstName();
  }
}


