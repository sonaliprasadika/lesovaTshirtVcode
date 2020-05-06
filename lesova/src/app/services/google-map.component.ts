import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GoogleMapService} from './google-map.service';

declare var google: any;
declare var $;
declare var InfoBox;

@Component({
  selector: 'app-google-map',
  template : `<div id="map" style="min-height: calc(100vh * 0.5 );"></div>`
})
export class GoogleMapComponent implements OnInit {

  constructor(private googleMapService : GoogleMapService,
              private router: Router,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    // window.my = window.my || {};
    this.initRestaurantMap();
  }

  initRestaurantMap() {
    const mapLocation = new google.maps.LatLng(6.9110605, 79.8871024); // change coordinates here

    let mapOptions = {
      zoom: 16, // change zoom here
      center: mapLocation,
      scrollwheel: false,
      fullscreenControl : true,
      streetViewControl : true,
      mapTypeControl  : true,
      scaleControl : true,
      rotateControl  : true,
      zoomControl  : true
    };

    let map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

    // Replace with your data
    var contentString = '<div class="map-info-box">'
      + '<p class="map-address"><i class="icon ion-ios-location"></i> Lesova Holdings (pvt) Ltd<br><i class="icon ion-ios-telephone"></i>+94 764 24 33 22<br><i class="icon ion-email"></i> <a href="mailto:showy0084@gmail.com">showy0084@gmail.com</a></p>'

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var image = 'assets/img/marker-red.png';
    let marker = new google.maps.Marker({
      map: map,
      draggable: true,
      title: 'Lesova Holdings (pvt) Ltd', // change title here
      icon: image,
      animation: google.maps.Animation.DROP,
      position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });

  }
}
