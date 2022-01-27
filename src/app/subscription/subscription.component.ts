import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {FormControl} from "@angular/forms";
import {UserService} from "../service/user.service";
import {Observable} from "rxjs";

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
  password1: FormControl = new FormControl();
  password2: FormControl = new FormControl();
  message: string = '';
  emailTaken: Observable<boolean> = new Observable<boolean>();

  userTmp: User = {
    email: "",
    id: 0,
    password: ""
  };
  userTmp2!: Observable<User>;



  ngOnInit(): void {

  }

  public passwordSame(password1: string, password2: string) {
    if (this.password1 != this.password2 ) {
      this.message = "password are not same ";
    }
  }

  public subscription(email: string) {
    /*recuperer les infos tapé*/
    this.userTmp.email= this.email.value;
    this.userTmp.password = this.password1.value;


    this.emailTaken = this.userService.userInDb(this.email.value).pipe()
    if ( !this.emailTaken) {
      this.message =" etape 4 : email already exist" +this.userTmp ;
    } else if (this.emailTaken){
      this.message =" etape 5 : email free"
        +" " +this.userTmp2
        +" " +this.userTmp.email
        +" " +this.emailTaken;
      this.userService.addUser(this.userTmp);
    }

  }
}
