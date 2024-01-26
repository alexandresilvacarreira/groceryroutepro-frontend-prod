import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {RouteResponse, ServerResponse} from "../interfaces";
const BASE_URL = environment.BASE_URL;
@Injectable({
  providedIn: "root"
})
export class GoogleApiService {
  constructor(private http: HttpClient) {

  }

  createRoute(partidaLat:number, partidaLng: number, destinoLat: number, destinoLng: number){
    return this.http.post<ServerResponse>(BASE_URL + "/google-maps-api/create-route", {partida :{
      lat: partidaLat,
        lng: partidaLng
    },
    destino : {
      lat: destinoLat,
      lng: destinoLng
    }
    }, {withCredentials: true})
  }


  getRoutes(){
    return this.http.get<RouteResponse>(BASE_URL+"/google-maps-api/get-route",{withCredentials: true});

    }





}
