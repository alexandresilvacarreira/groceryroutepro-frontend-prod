import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Login, ServerMessage, Signup} from "../interfaces";

const BASE_URL = environment.BASE_URL;


@Injectable({
  providedIn: "root"
})

export class AuthService {

  constructor(private http: HttpClient) {
  }

  signup(signup:Signup){
    return this.http.post<ServerMessage>(BASE_URL + "/users/signup", signup)
  }

  login(login:Login){
    return this.http.post<ServerMessage>(BASE_URL + "/users/login", login)
  }

}
