import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";


import {catchError, first, Observable, BehaviorSubject} from "rxjs";


@Injectable({
  providedIn:"root"
})
export class UserService {



  private rootURL: string = "http://localhost:8080/users/";

  private userId: number = 0;




  constructor( private http: HttpClient) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.rootURL);
  }

  public getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(this.rootURL+email);
  }

  public loginTaken(email: string): Observable<boolean> {
    return this.http.get<boolean>(this.rootURL+"taken/" +email)
  }

  public register(email: string, user: User){
    this.loginTaken(email).subscribe({
      next: value => {
        console.log("login taken : " +value);
        if (!value){
          console.log("adding user ");
          this.addUser(user).subscribe({
            complete:() =>console.log("user added")
            });
        }},
      error: err => console.error("error" +err),
      complete:() => console.log("fin de registration")
    });

  }

  public addUser(user: User): Observable<User> {
    return  this.http.post<User>(this.rootURL, user)

  }

  getUserId() {
    return this.userId;
  }

  setUserId(id: number) {
    this.userId = id;
  }


}
