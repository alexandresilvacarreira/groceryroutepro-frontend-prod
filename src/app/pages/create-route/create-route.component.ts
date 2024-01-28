/// <reference types="@types/google.maps" />
import {Component} from '@angular/core';
import {faArrowLeft, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {NavigationService} from "../../services/navigation.service";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {FormControl} from "@angular/forms";
import {catchError, debounce, debounceTime, from, Observable, of, switchMap, throwError} from "rxjs";
import {PersonilizedMapMarker, RouteWaypoint} from "../../interfaces";
import {GoogleApiService} from "../../services/google-api.service";
import {Router} from "@angular/router";
import {
  RemoveProductConfirmationComponent
} from "../../components/remove-product-confirmation/remove-product-confirmation.component";
import {MatDialog} from "@angular/material/dialog";
import {GenerateRouteDialogComponent} from "../../components/generate-route-dialog/generate-route-dialog.component";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";


@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.scss'],
})
export class CreateRouteComponent {
  showMarkerPartida=true;
  showMarkerDestino=true;

  showToast = false;
  toastMessage = "";

  previousRoute = '';
  mapsOptions: google.maps.MapOptions = {
    disableDefaultUI: true,
    zoomControl: true
  };

  showAutocompletePartida = false;
  showAutocompleteDestino = false;

  center: google.maps.LatLngLiteral = {lat: 39.557191, lng: -7.8536599};

  zoom = 6;
  display!: google.maps.LatLngLiteral;
  height = "400px";
  width = "100%";

  inputPartida = new FormControl("");
  inputDestino = new FormControl("");

  /*partidaResults?: google.maps.places.AutocompleteResponse;
  destinoResults?:google.maps.places.AutocompleteResponse;*/

  partidaResults: any[] = [];
  destinoResults: any[] = [];


  partida?: google.maps.places.AutocompletePrediction;
  destino?: google.maps.places.AutocompletePrediction;

  markerOptions: google.maps.MarkerOptions[] = [];
  lableProxy:string[]=[];



  constructor(private navigationService: NavigationService, private googleApiService: GoogleApiService,
              private router: Router, public dialog: MatDialog) {
  }


  partidaInputFocus() {
    this.showAutocompletePartida = true;
    this.showMarkerPartida=false;
  }

  partidaInputBlur(): void {
    // Use a slight delay to allow time for click events to trigger
    setTimeout(() => {
      this.showAutocompletePartida = false;
    }, 200);
  }

  destinoInputFocus() {
    this.showAutocompleteDestino = true;
    this.showMarkerDestino=false;
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

    this.previousRoute = this.navigationService.getPreviousRoute();

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
    this.getGeoCoordinates(result, true);
  }

  onClickDestino(result: google.maps.places.AutocompletePrediction) {
    this.inputDestino.setValue(result.description);
    this.showAutocompleteDestino = false;
    this.destino = result;
    this.getGeoCoordinates(result, false);
  }


  //-----------------------------------------------//------------------------
  //Map marker


  /*---------------------GEOCODER----------------------------------*/

  getGeoCoordinates(result: google.maps.places.AutocompletePrediction, partida: boolean) {
    const geocoder = new google.maps.Geocoder();
    geocoder
      .geocode({placeId: result.place_id})
      .then(({results}) => {
        if (results[0]) {
          let lat = results[0].geometry.location.lat();
          let lng = results[0].geometry.location.lng();
          let label = (partida) ? "Partida" : "Destino";

          console.log("Label to search for:", label);



          const indexToRemove =  this.lableProxy.findIndex(item => typeof item === "string" && item === label);


          if (indexToRemove !== -1) {
            this.markerOptions.splice(indexToRemove, 1);
            this.lableProxy.splice(indexToRemove, 1);
          }

          console.log(this.markerOptions)
          this.lableProxy.push(label);
          this.markerOptions.push(this.generateMarkerOptions(lat, lng, label));

          this.zoom = this.calculateZoom();
          this.center = this.calculateCenter();
        }
      })
      .catch((e) => window.alert("Geocoder failed due to: " + e));
  }

  criarRota() {
    this.showToast=false;
    if (this.markerOptions.length>1){
      let dialogRef = this.dialog.open(GenerateRouteDialogComponent);

      let waypoints: { lat: number, lng: number }[] = [];

      for (let marker of this.markerOptions) {
        if (marker.position) {
          const lat = typeof marker.position.lat === 'function' ? marker.position.lat() : marker.position.lat;
          const lng = typeof marker.position.lng === 'function' ? marker.position.lng() : marker.position.lng;
          waypoints.push({lat, lng})
        }
      }

      this.googleApiService.createRoute(waypoints[0].lat, waypoints[0].lng,
        waypoints[1].lat, waypoints[1].lng).pipe(
        catchError(error => {
          this.toastMessage = "Ocorreu um erro ao gerar rota.";
          this.showToast = true;
          console.error(error);
          dialogRef.close();
          return throwError(() => error);
        }),switchMap(() => {
          return of(this.googleApiService.getRoutes())
        })
      ).subscribe(serverResponse => {
        dialogRef.close();
        this.router.navigate(['/routes']);
      });
    } else {
      setTimeout(()=> {
        this.showToast=true
      }, 1)
      this.toastMessage="Os campos obrigatórios têm que estar preenchidos";
    }
  }


  generateMarkerOptions(lat: number, lng: number, labelText: string): google.maps.MarkerOptions {
    return {
      position: {lat, lng},
      draggable: false,
      label: {
        text: labelText,
        fontWeight: 'bolder', // Set font weight to bold
        fontFamily: 'Lato', // Set font family to Lato
        color: '#000000',
        fontSize: '16px',


      },
      anchorPoint: new google.maps.Point(0, -20)
    };
  }

  calculateZoom(): number {
    const maxZoom = 20;
    const minZoom = 1;
    const padding = 200;

    const bounds = new google.maps.LatLngBounds();
    if (this.markerOptions) {
      for (const marker of this.markerOptions) {
        if (marker.position) {
          const lat = typeof marker.position.lat === 'function' ? marker.position.lat() : marker.position.lat;
          const lng = typeof marker.position.lng === 'function' ? marker.position.lng() : marker.position.lng;
          bounds.extend(new google.maps.LatLng(lat, lng));
        }
      }
      const ne = bounds.getNorthEast();
      const sw = bounds.getSouthWest();

      const maxLat = ne.lat();
      const minLat = sw.lat();
      const maxLng = ne.lng();
      const minLng = sw.lng();

      const latRange = maxLat - minLat;
      const lngRange = maxLng - minLng;

      // Calculate zoom level based on latitude or longitude range
      const zoomLat = Math.floor(Math.log2((360 * padding) / (256 * latRange)));
      const zoomLng = Math.floor(Math.log2((360 * padding) / (256 * lngRange)));

      return Math.min(maxZoom, Math.max(minZoom, Math.min(zoomLat, zoomLng)));
    }

    return minZoom;


  }

  calculateCenter(): google.maps.LatLngLiteral {
    let totalLat = 0;
    let totalLng = 0;

    for (const marker of this.markerOptions) {
      if (marker.position) {
        const lat = typeof marker.position.lat === 'function' ? marker.position.lat() : marker.position.lat;
        const lng = typeof marker.position.lng === 'function' ? marker.position.lng() : marker.position.lng;
        totalLat += lat;
        totalLng += lng;
      }

    }

    const avgLat = totalLat / this.markerOptions.length;
    const avgLng = totalLng / this.markerOptions.length;

    return {lat: avgLat, lng: avgLng};
  }

  protected readonly faRoute = faRoute;
}
