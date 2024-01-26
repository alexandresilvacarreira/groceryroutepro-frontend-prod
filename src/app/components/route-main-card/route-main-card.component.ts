import {Component, Input} from '@angular/core';
import {faCoins} from "@fortawesome/free-solid-svg-icons/faCoins";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faPiggyBank} from "@fortawesome/free-solid-svg-icons";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons/faStopwatch";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import {Chain, LatLngName, PersonilizedMapMarker, RouteObject} from "../../interfaces";

@Component({
  selector: 'app-route-main-card',
  templateUrl: './route-main-card.component.html',
  styleUrls: ['./route-main-card.component.scss']
})
export class RouteMainCardComponent {

  showMap = true;

  protected readonly faCoins = faCoins;
  protected readonly faRoute = faRoute;
  protected readonly faPiggyBank = faPiggyBank;
  protected readonly faStopwatch = faStopwatch;
  protected readonly faLocationArrow = faLocationArrow;

  @Input() route!: RouteObject;
  @Input() titleCard!: string;
  @Input() savings!: number;
  totalTime!: number;
  chainList: Chain[] = [];
  custo!: number;
  waypoints!: LatLngName[];

  //maps inputs
  center: google.maps.LatLngLiteral = {lat: 39.557191, lng: -7.8536599};

  zoom = 6;
  display!: google.maps.LatLngLiteral;
  height = "400px";
  width = "100%";

  personilizedMapMarkers:PersonilizedMapMarker[]=[];

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng !== null) {
      this.center = (event.latLng.toJSON());
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng !== null) {
      this.display = event.latLng.toJSON();
    }
  }

  /*addMarker(waypoint: LatLngName) {
    let newMaker : PersonilizedMapMarker = {
      place_id: result.place_id,
      markerPosition: {lat,lng},
      };
    this.personilizedMapMarkers.push(newMaker);

  }*/

  ngOnInit() {

    this.custo = Number(this.route.shoppingListCost.toFixed(2));
    this.totalTime = Math.round(this.route.totalTime / 60);
    /*for (let i = 0; i < this.route.coordenadasMarcadores.length; i++) {
      let waypoint = new PersonilizedMapMarker(this.route.coordenadasMarcadores[i].
    }
    this.personilizedMapMarkers=this.route.coordenadasMarcadores;*/
    for (let i = 0; i < this.route.chainIdList.length && i < this.route.chainNameList.length; i++) {
      let chain: Chain = {
        id: this.route.chainIdList[i],
        name: this.route.chainNameList[i]
      };

      this.chainList.push(chain);
    }







  }

  buildMapsUrl(){
    let waypointsString="";
    //get waypoint coordinates
    for (let i = 0; i < this.waypoints.length; i++) {
      waypointsString+=this.waypoints[i].lat+","+this.waypoints[i].lng+"/"
    }
    const url: string= "https://www.google.com/maps/dir/"+waypointsString;
    window.open(url, '_blank');

  }
}
