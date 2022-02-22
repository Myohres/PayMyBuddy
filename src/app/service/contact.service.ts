import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transaction} from "../model/transaction";
import {Contact} from "../model/contact";


@Injectable({
  providedIn:"root"
})
export class ContactService {


  private rootURL: string = "http://localhost:8080/contact";


  constructor(private http: HttpClient) {
  }

  public getContactByUserId(id: number): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.rootURL}/${id}`)
  }

}
