import {Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Login, ServerResponse, Signup, User} from "../interfaces";
import {BehaviorSubject, catchError, of, throwError} from "rxjs";

const BASE_URL = environment.BASE_URL;


@Injectable({
  providedIn: "root"
})

export class UserService {

  private authenticatedUser = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {
    this.getAuthenticatedUser();
  }

  getAuthenticatedUser() {
    return this.http.get<User | null>(BASE_URL + "/users/get-authenticated-user", { withCredentials: true })
      .pipe(catchError((error) => {
        return of(null);
      }))
      .subscribe(user => {
        console.log("authenticated user: " + user)
        this.authenticatedUser.next(user);
      });
  }

  getCurrentUser() {
    return this.authenticatedUser.asObservable();
    /*let storedUser = localStorage.getItem("user");
    return JSON.parse(storedUser!);*/
  }

  // getAuthenticatedUser() {
  //    return this.http.get<ServerResponse>(BASE_URL + "/users/get-authenticated-user" /*,{ withCredentials: true }*/);
  // }
  //
  // getCurrentUser(){
  //   let storedUser = localStorage.getItem("user");
  //   return JSON.parse(storedUser!);
  // }

  // setCurrentUser(user: User){
  //   localStorage.setItem("user", JSON.stringify(user));
  // }

  // clearCurrentUser(){
  //   localStorage.removeItem("user");
  // }


}
