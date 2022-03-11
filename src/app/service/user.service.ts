import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../model/contact";


@Injectable({
  providedIn:"root"
})
export class UserService {




  private rootURL: string = "http://localhost:8080/users";
  private userId: number = 1;
  private userLastName: string = "";
  private userFirstName: string = "";
  private contactList: Contact[] = [];


  constructor( private http: HttpClient){
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.rootURL);
  }

  public getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(this.rootURL+"/email/"+email);
  }

  public getUserById(userId: number): Observable<User> {
    return this.http.get<User>(this.rootURL+"/id/"+userId);
  }

  public loginTaken(email: string): Observable<boolean> {
    return this.http.get<boolean>(this.rootURL+"taken/" +email);
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

  public addContact(userId: number, contact: User): Observable<User>{
    return this.http.put<User>(this.rootURL+"/"+userId,contact)
  }

  public deleteContact(userId: number, contactId: number){
    return this.http.delete(this.rootURL+"/"+userId+"/contact/"+contactId)
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

  getContactList(): Contact[] {
    return this.contactList;
  }

  setContactList(value: Contact[]) {
    this.contactList = value;
  }
}
