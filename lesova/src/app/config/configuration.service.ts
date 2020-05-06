import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private geoCodeEndpoint: string = "https://maps.googleapis.com/maps/api/geocode";

  constructor() { }

  getGeoCodeEndpoint(){
    return this.geoCodeEndpoint+"/json?";
  }
}
