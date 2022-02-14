import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transaction} from "../model/transaction";


@Injectable({
  providedIn:"root"
})
export class TransactionService {


  private rootURL: string = "http://localhost:8080/transactions";


  constructor(private http: HttpClient) {
  }

  public getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.rootURL);
  }

  public getTransactionsByEmail(email: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.rootURL + email)
  }
}
