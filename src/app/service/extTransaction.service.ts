import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IntTransaction} from "../model/intTransaction";
import {ExtTransaction} from "../model/extTransaction";


@Injectable({
  providedIn:"root"
})
export class ExtTransactionService {


  private rootURL: string = "http://localhost:8080/ext_transactions";
  private rootURLPayment: string = "http://localhost:8080/ext_payment/";



  constructor(private http: HttpClient) {
  }

  public getAllExtTransactions(): Observable<ExtTransaction[]> {
    return this.http.get<ExtTransaction[]>(this.rootURL);
  }

  public getExtTransactionsByUserId(id: number): Observable<ExtTransaction[]> {
    return this.http.get<ExtTransaction[]>(`${this.rootURL}/user/${id}`)
  }

  public paymentUserToBank(extTransaction: ExtTransaction) {
    return this.http.post(`${this.rootURLPayment}bank/`, extTransaction)
  }

  public paymentBankToUser(extTransaction: ExtTransaction) {
    return this.http.post(`${this.rootURLPayment}user/`, extTransaction)
  }

}
