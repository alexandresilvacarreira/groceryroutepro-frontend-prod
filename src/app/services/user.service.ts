import {Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Login, ServerResponse, Signup, User} from "../interfaces";
import {catchError, throwError} from "rxjs";

const BASE_URL = environment.BASE_URL;


@Injectable({
  providedIn: "root"
})

export class UserService {

  user?:User;

  constructor(private http: HttpClient) {
  }

  getAuthenticatedUser() {
     return this.http.get<ServerResponse>(BASE_URL + "/users/get-authenticated-user", { withCredentials: true });
  }

  getCurrentUser(){
    return this.user;
  }

  setCurrentUser(user: User){
    this.user = user;
  }


}
