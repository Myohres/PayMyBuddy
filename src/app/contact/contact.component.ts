import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Contact} from "../model/contact";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactData: Contact[] = [];
  public userLogin: number = 0;
  public contactId = new FormControl();
  public isError: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userLogin = this.userService.getUserId();
    this.getContact()
  }

  addContact(){
    this.userService.getUserById(this.contactId.value)
      .subscribe({
        next: data => {
          console.log(data)
          this.userService.addContact(this.userLogin, data)
            .subscribe({
              next: value => {
                console.log("add contact : " + data.id);
                this.isError = false;
                this.getContact();
              },
              error: err => {
                this.isError = true;
                console.error("add contact error : ", err)
              },
              complete: () => console.log("contact added")
            })
        },
        error: err => console.error(err),
        complete: () => {
          this.contactId.reset()
          console.log('DONE! si Youssef valide')
        }
      });
  }

  deleteContact(){
    this.userService.deleteContact(this.userLogin, this.contactId.value)
      .subscribe({
        next: value => {
          console.log("delete contact id : " + this.contactId.value);
          this.isError = false;
          this.getContact();
        },
        error: err => {
          this.isError = true;
          console.error("delete contact error : " +err)
        },
        complete: () => {
          this.contactId.reset()
          console.log("contact deleted si Youssef valide")
        }
      })
  }

   getContact(){
     this.userService.getUserById(this.userLogin)
      .subscribe({
        next: data => this.contactData = data.contactList,
        error: err => console.error(+err),
        complete: () => console.log("done si Youssef l'efface pas")
      })
  }
}


