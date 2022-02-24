import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn:"root"
})
export class UserService {



  private rootURL: string = "http://localhost:8080/users/";
  private userId: number = 1;
  private userLastName: string = "";
  private userFirstName: string = "";


  constructor( private http: HttpClient) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.rootURL);
  }

  public getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(this.rootURL+email);
  }

  getUserId() {
    return this.userId;
  }

  setUserId(id: number) {
    this.userId = id;
  }

  getUserLastName(): string {
    return this.userLastName;
  }

  setUserLastName(value: string) {
    this.userLastName = value;
  }

  getUserFirstName(): string {
    return this.userFirstName;
  }

  setUserFirstName(value: string) {
    this.userFirstName = value;
  }
}
