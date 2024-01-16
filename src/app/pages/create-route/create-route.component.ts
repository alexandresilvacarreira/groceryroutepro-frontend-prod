/// <reference types="@types/google.maps" />
import {Component} from '@angular/core';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.scss'],
})
export class CreateRouteComponent {

  // Fazer bound da latitude e longitude a campos de

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display!: google.maps.LatLngLiteral;
  height = "400px";
  width = "750px";

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

}
