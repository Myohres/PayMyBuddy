import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {first, Observable} from "rxjs";


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

  public userInDb(email: string): Observable<boolean> {
    return this.http.get<boolean>(this.rootURL +"/free/"+email);
  }


  public addUser(user: User){
   return  this.http.post<User>(this.rootURL,user);
  }

  getUserId() {
    return this.userId;
  }

  setUserId(id: number) {
    this.userId = id;
  }
}
