import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Bank} from "../model/bank";


@Injectable({
  providedIn:"root"
})
export class BankService {

  private rootURL: string = "http://localhost:8080/bank/";
  private bankData: Bank | null = null;
  private bankId: number = 1;
  private accountNumber: number = 0;
  private bankName: string = "";
  private bankAmount: number = 0;


  constructor( private http: HttpClient, private router: Router){
  }

  public getAllBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.rootURL);
  }

  public getBankById(id: number): Observable<Bank> {
    return this.http.get<Bank>(this.rootURL+"id/"+id);
  }

  public addBank(bank: Bank): Observable<Bank> {
    return  this.http.post<Bank>(this.rootURL, bank)
  }

  public deleteContact(bank: Bank){
    return this.http.delete(this.rootURL)
  }

  getBankId() {
    return this.bankId;
  }

  setBankId(id: number) {
    this.bankId = id;
  }

}
