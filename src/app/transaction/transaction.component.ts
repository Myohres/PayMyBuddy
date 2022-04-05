import { Component, OnInit } from '@angular/core';
import {IntTransaction} from "../model/intTransaction";
import {UserService} from "../service/user.service";
import {IntTransactionService} from "../service/intTransaction.service";
import {Contact} from "../model/contact";
import {FormControl} from "@angular/forms";
import {Bank} from "../model/bank";
import {BankService} from "../service/bank.service";
import {ExtTransactionService} from "../service/extTransaction.service";
import {ExtTransaction} from "../model/extTransaction";



@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  public intTransactionData: IntTransaction[] = [];
  public extTransactionData: ExtTransaction[] = [];
  public contactData: Contact[] = [];
  public bankData: Bank[] = [];

  public contactSelected: number = 0;
  public userLogin: number = this.userService.getUserId();
  public userAmount: number = 0;

  public ContactSelectedValue: string = "";
  public toBankSelectedValue: string = "";
  public fromBankSelectedValue: string = "";

  public amount  = new FormControl();
  public description  = new FormControl();
  public toBankDescription = new FormControl();
  public toBankAmount = new FormControl();
  public fromBankDescription = new FormControl();
  public fromBankAmount = new FormControl();

  intTransaction: IntTransaction = {
    id:0,
    sender:{
      id:0,
      email:"",
      password:"",
      firstName:"",
      lastName:"",
      amount:0,
      contactList:[],
      bankList:[]
    },
    recipient: {
      id:0,
      email:"",
      password:"",
      firstName:"",
      lastName:"",
      amount:0,
      contactList:[],
      bankList: []
    },
    amount:0.00,
    description:"",
  }

  extTransaction: ExtTransaction = {
    id:0,
    user:{
      id:0,
      email:"",
      password:"",
      firstName:"",
      lastName:"",
      amount:0,
      contactList:[],
      bankList:[]
    },
    bank: {
      id:0,
      accountNumber:0,
      name: "",
      amount:0,
    },
    amount:0.00,
    description:"",
  }

  constructor(private userService: UserService,
              private bankService: BankService,
              private intTransactionService: IntTransactionService,
              private extTransactionService: ExtTransactionService) { }

  ngOnInit(): void {
    this.getIntTransactions();
    this.getContacts();
    this.getExtTransactions();
    this.getAmount();
  }

  getIntTransactions() {
    this.intTransactionService.getIntTransactionsById(this.userLogin).subscribe(response => {
      this.intTransactionData = response;
    });
  }

  getAmount() {
    this.userService.getUserById(this.userLogin).subscribe(response => {
      this.userAmount = response.amount;
    })
  }
  getContacts() {
    this.userService.getUserById(this.userLogin).subscribe(response => {
      this.contactData = response.contactList;
      this.bankData = response.bankList;
    })
  }

  getExtTransactions() {
    this.extTransactionService.getExtTransactionsByUserId(this.userLogin).subscribe(response => {
      this.extTransactionData = response;
    })
  }

  intPayment() {
    this.intTransaction.sender.id = this.userLogin;
    this.intTransaction.amount = this.amount.value;
    this.intTransaction.description = this.description.value;
    this.intTransaction.recipient.id = Number(this.ContactSelectedValue)
    this.intTransactionService.addIntTransaction(this.intTransaction)
      .subscribe({
        next: value => {
          console.log("add transation")
          this.getIntTransactions();
          this.getAmount();
        },
        error: err => console.log("add transaction error : ", err),
        complete: () => console.log("transaction done")
      })
    this.amount.reset();
    this.description.reset();
  }

  extPaymentToBank() {
    this.extTransaction.user.id = this.userLogin;
    this.extTransaction.bank.id = Number(this.toBankSelectedValue)
    this.extTransaction.amount = this.toBankAmount.value;
    this.extTransaction.description = this.toBankDescription.value;
    this.extTransactionService.paymentUserToBank(this.extTransaction)
      .subscribe({
        next: value => {
          console.log("add ext_transaction")
          this.getExtTransactions();
          this.getAmount();
        },
        error: err => console.log("add ext_transaction error : ", err),
        complete: () => console.log("ext_transaction done")
      })
    this.toBankAmount.reset();
    this.toBankDescription.reset();
  }

  extPaymentToUser() {
    this.extTransaction.user.id = this.userLogin;
    this.extTransaction.bank.id = Number(this.fromBankSelectedValue)
    this.extTransaction.amount = this.fromBankAmount.value;
    this.extTransaction.description = this.fromBankDescription.value;
    this.extTransactionService.paymentBankToUser(this.extTransaction)
      .subscribe({
        next: value => {
          console.log("add ext_transaction")
          this.getExtTransactions();
          this.getAmount();
        },
        error: err => console.log("add ext_transaction error : ", err),
        complete: () => console.log("ext_transaction done")
      })
    this.fromBankAmount.reset();
    this.fromBankDescription.reset();
  }


}
