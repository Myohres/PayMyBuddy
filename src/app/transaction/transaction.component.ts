import { Component, OnInit } from '@angular/core';
import {Transaction} from "../model/transaction";
import {UserService} from "../service/user.service";
import {TransactionService} from "../service/transaction.service";
import {Contact} from "../model/contact";


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  public transactionData: Transaction[] = [];
  public contactData: Contact[] = [];
  public userLogin: number = this.userService.getUserId();


  constructor(private transaction: Transaction,
              private userService: UserService,
              private transactionService: TransactionService,) { }

  ngOnInit(): void {
    this.getTransactions();
    this.getContacts();
  }

  getTransactions() {
    this.transactionService.getTransactionsById(this.userLogin).subscribe(response => {
      this.transactionData = response;
    });
  }

  getContacts() {
    this.userService.getUserById(this.userLogin).subscribe(response => {
      this.contactData = response.contactList;
    })
  }

  sendMoney() {
    this.userService.getUserById(this.userLogin)
      .subscribe( response => { this.transaction.sender = response}
      )

    this.transactionService.addTransaction(this.transaction)
      .subscribe({
        next: value => console.log("add transaction"),
        error: err => console.log("add transaction error"),
        complete: () => console.log("add transaction complete")
      })
  }
}
