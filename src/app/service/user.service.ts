import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn:"root"
})
export class UserService {

  private readonly USER_API_URL = 'jdbc:mysql://localhost:3306/paymybuddy?useTimezone=true&serverTimezone=UTC';

  constructor(private http: HttpClient) {
  }


  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_API_URL);

  }
/*
  getUserByEmail(email: string): User {
    const user = this.users.find(user => user.email === email)
    if (user) {
      return user ;
    } else {
      throw  new Error('User with email ' + email +' not found');
    }
  }*/
}
