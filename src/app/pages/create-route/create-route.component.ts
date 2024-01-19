/// <reference types="@types/google.maps" />
import {Component} from '@angular/core';
import {faArrowLeft, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {NavigationService} from "../../services/navigation.service";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {FormControl} from "@angular/forms";
import {debounce, debounceTime, from, Observable, of, switchMap} from "rxjs";
import {PersonilizedMapMarker} from "../../interfaces";



@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.scss'],
})
export class CreateRouteComponent {

  previousRoute = '';

  showAutocompletePartida = false;
  showAutocompleteDestino = false;

  center: google.maps.LatLngLiteral = {lat: 39.557191, lng: -7.8536599};

  zoom = 6;
  display!: google.maps.LatLngLiteral;
  height = "400px";
  width = "600px";

  inputPartida = new FormControl("");
  inputDestino = new FormControl("");

  /*partidaResults?: google.maps.places.AutocompleteResponse;
  destinoResults?:google.maps.places.AutocompleteResponse;*/

  partidaResults: any[] = [];
  destinoResults: any[] = [];


  partida?: google.maps.places.AutocompletePrediction;
  destino?: google.maps.places.AutocompletePrediction;


  constructor(private navigationService: NavigationService) {
  }


  partidaInputFocus() {
    this.showAutocompletePartida = true;
  }

  partidaInputBlur(): void {
    // Use a slight delay to allow time for click events to trigger
    setTimeout(() => {
      this.showAutocompletePartida = false;
    }, 200);
  }

  destinoInputFocus() {
    this.showAutocompleteDestino = true;
  }

  destinoInputBlur(): void {
    // Use a slight delay to allow time for click events to trigger
    setTimeout(() => {
      this.showAutocompleteDestino = false;
    }, 200);
  }

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

  autocompleteMethod(inputString: string | null): Observable<any[]> {
    // Check if the inputString is truthy and not an empty string
    if (inputString && inputString.trim() !== "") {
      const autocompleteService = new google.maps.places.AutocompleteService();
      const southwest = {lat: 32.35130, lng: -31.07921};
      const northeast = {lat: 42.20564806080576, lng: -5.901021665431905};
      const newBounds = new google.maps.LatLngBounds(southwest, northeast);
      // todo ver a interface de bound


      const inputToString = inputString.toString();

      return from(
        new Promise<any[]>((resolve) => {
          autocompleteService.getQueryPredictions(
            {
              input: inputToString,
              bounds: newBounds,
            },
            (result) => {
              resolve(result || []);
            }
          );
        })
      );
    } else {
      // If input is empty, return an Observable of an empty array
      return of([]);
    }
  }

  ngOnInit() {

    this.inputPartida.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((newValue) => this.autocompleteMethod(newValue))
      )
      .subscribe((results) => {
        this.partidaResults = results;
      });

    this.inputDestino.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((newValue) => this.autocompleteMethod(newValue))
      )
      .subscribe((results) => {
        this.destinoResults = results;
      });
  }


  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faSearch = faSearch;
  protected readonly faLocationDot = faLocationDot;


  onClickPartida(result: google.maps.places.AutocompletePrediction) {
    this.inputPartida.setValue(result.description);
    this.showAutocompletePartida = false;
    this.partida = result;
    this.getGeoCoordinates(result);
  }

  onClickDestino(result: google.maps.places.AutocompletePrediction) {
    this.inputDestino.setValue(result.description);
    this.showAutocompleteDestino = false;
    this.destino = result;
    this.getGeoCoordinates(result);
  }


  //-----------------------------------------------//------------------------
  //Map marker

  PersonilizedMapMarkers:PersonilizedMapMarker[]=[];



  addMarker(result:google.maps.places.AutocompletePrediction,lat: number, lng: number) {
    let newMaker : PersonilizedMapMarker = {
      place_id: result.place_id,
      markerPosition: {lat,lng},
      title: result.description};
    this.PersonilizedMapMarkers.push(newMaker);

  }


  /*---------------------GEOCODER----------------------------------*/

  getGeoCoordinates(result:google.maps.places.AutocompletePrediction) {
    const geocoder = new google.maps.Geocoder();
    geocoder
      .geocode({placeId: result.place_id})
      .then(({results}) => {
        if (results[0]) {
          let lat= results[0].geometry.location.lat();
          let lng = results[0].geometry.location.lng();
          this.addMarker(result,lat,lng);
          this.zoom=10;
          this.center= this.PersonilizedMapMarkers.length > 1 ?
            {
              lat: this.PersonilizedMapMarkers.reduce((sum, marker) => sum + marker.markerPosition.lat, 0) / this.PersonilizedMapMarkers.length,
              lng: this.PersonilizedMapMarkers.reduce((sum, marker) => sum + marker.markerPosition.lng, 0) / this.PersonilizedMapMarkers.length
            }
            : this.PersonilizedMapMarkers[0].markerPosition;
        } else {
          window.alert("No results found");
        }
      })
      .catch((e) => window.alert("Geocoder failed due to: " + e));
  }



  criarRota(){
    //TODO ADICIONAR ENDEPOINT CORRETO DO BACKEND
  }

}
