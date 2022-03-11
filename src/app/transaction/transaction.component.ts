import { Component, OnInit } from '@angular/core';
import {Transaction} from "../model/transaction";
import {UserService} from "../service/user.service";
import {TransactionService} from "../service/transaction.service";
import {ContactService} from "../service/contact.service";
import {Contact} from "../model/contact";


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  public empData: Transaction[] = [];
  public contactData: Contact[] = [];
  public userLogin: number = this.userService.getUserId();


  constructor(private userService: UserService,
              private transactionService: TransactionService,
              private contactService: ContactService) { }

  ngOnInit(): void {
    this.getTransactions();
    this.getContacts();
  }

  getTransactions() {
    this.transactionService.getTransactionsById(this.userLogin).subscribe(response => {
      this.empData = response;
    });
    }

  getContacts() {
    this.userService.getUserById(this.userLogin).subscribe(response => {
      this.contactData = response.contactList;
    })
  }
}
