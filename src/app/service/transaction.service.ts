import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transaction} from "../model/transaction";


@Injectable({
  providedIn:"root"
})
export class TransactionService {



  private rootURL: string = "http://localhost:8080/transactions";
  private rootURLPayment: string = "http://localhost:8080/payment/";


  constructor(private http: HttpClient) {
  }

  public getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.rootURL);
  }

  public getTransactionsById(id: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.rootURL}/${id}`)
  }

  public addTransaction(transaction: Transaction) {
    return this.http.post(this.rootURLPayment, transaction)
  }


}
