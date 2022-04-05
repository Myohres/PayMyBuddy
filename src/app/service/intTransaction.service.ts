import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IntTransaction} from "../model/intTransaction";


@Injectable({
  providedIn:"root"
})
export class IntTransactionService {


  private rootURL: string = "http://localhost:8080/int_transactions";
  private rootURLPayment: string = "http://localhost:8080/int_payment/";



  constructor(private http: HttpClient) {
  }

  public getAllIntTransactions(): Observable<IntTransaction[]> {
    return this.http.get<IntTransaction[]>(this.rootURL);
  }

  public getIntTransactionsById(id: number): Observable<IntTransaction[]> {
    return this.http.get<IntTransaction[]>(`${this.rootURL}/id/${id}`)
  }

  public addIntTransaction(intTransaction: IntTransaction) {
    return this.http.post(this.rootURLPayment, intTransaction)
  }

}
