import {Injectable} from '@angular/core';
import {ConfigurationService} from '../config/configuration.service';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {

  private apiKeyGeoCode = 'AIzaSyBu8boLLCd-7ea_aptaWUBd4b-GahPwPSo';
  googleMapRestaurants: any;

  constructor(private configurationService: ConfigurationService ) {
  }

  setMap(id, mapOptions){
    this.googleMapRestaurants = new google.maps.Map(document.getElementById(id), mapOptions);
  }
}
