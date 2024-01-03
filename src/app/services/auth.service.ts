import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {ServerResponse, Signup} from "../interfaces";

const BASE_URL = environment.BASE_URL;


@Injectable({
  providedIn: "root"
})

export class AuthService {

  constructor(private http: HttpClient) {
  }

  signup(signup:Signup){
    return this.http.post<ServerResponse>(BASE_URL + "/signup", signup)
  }

  login(email:string, password:string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let body = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.post<ServerResponse>(BASE_URL + "/process-login", body.toString(),{
      headers,
      withCredentials: true
    })
  }

  logout() {
    return this.http.post<ServerResponse>(BASE_URL + "/logout", {}, {withCredentials: true})
  }

}
