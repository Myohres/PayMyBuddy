import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  public userId: number = 0;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userId = this.userService.getUserId();
  }
}
