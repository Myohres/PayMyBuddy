import { Component, OnInit } from '@angular/core';
import {Transaction} from "../model/transaction";
import {UserService} from "../service/user.service";
import {TransactionService} from "../service/transaction.service";
import {Contact} from "../model/contact";
import {FormControl} from "@angular/forms";



@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  public transactionData: Transaction[] = [];
  public contactData: Contact[] = [];

  public contactSelected: number = 0;
  public userLogin: number = this.userService.getUserId();
  public amount  = new FormControl();
  public description  = new FormControl();
  public selectedValue: string = "";
  public contactIdSelected: number = 0;



  transaction: Transaction = {
    id:0,
    sender:{
      id:0,
      email:"",
      password:"",
      firstName:"",
      lastName:"",
      contactList:[],
    },
    recipient: {
      id:0,
      email:"",
      password:"",
      firstName:"",
      lastName:"",
      contactList:[],
    },
    amount:0.00,
    description:"",
  }

  constructor(private userService: UserService,
              private transactionService: TransactionService) { }

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

  payment() {
   this.contactIdSelected = Number(this.selectedValue);
    this.transaction.sender.id = this.userLogin;
    this.transaction.amount = this.amount.value;
    this.transaction.description = this.description.value;
    this.transaction.recipient.id = this.contactIdSelected;
    this.transactionService.addTransaction(this.transaction)
      .subscribe({
        next: value => {
          console.log("add transation")
          this.getTransactions();

        },
        error: err => console.log("add transaction error : ", err),
        complete: () => console.log("transaction done")
      })
    this.amount.reset();
    this.description.reset();

  }
}
