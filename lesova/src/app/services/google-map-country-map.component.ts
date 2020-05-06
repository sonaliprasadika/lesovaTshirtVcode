import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GoogleMapService} from "./google-map.service";

declare var google: any;
declare var $;
declare var InfoBox;

@Component({
  selector: 'app-google-map-country-map',
  template : `<div id="country-map" style="min-height: calc(100vh * 0.8 );"></div>`
})
export class GoogleMapCountryMapComponent implements OnInit {

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
      zoom: 15, // change zoom here
      center: mapLocation,
      scrollwheel: false,
      fullscreenControl : true,
      streetViewControl : true,
      mapTypeControl  : true,
      scaleControl : true,
      rotateControl  : true,
      zoomControl  : true
    };

    let map = new google.maps.Map(document.getElementById('country-map'),
      mapOptions);

    // Replace with your data
    var contentString = '<div class="map-info-box">'
      + '<p class="map-address"><i class="icon ion-ios-location"></i> Lesova Holdings (pvt) Ltd <br><i class="icon ion-ios-telephone"></i>+94 764 24 33 22<br><i class="icon ion-email"></i> <a href="">LESOVA</a></p>'

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    /* Map pin image */
    var image = 'assets/img/marker-red.png';
    var latlng = 6.9110605;

    const showroomTitle = 'Lesova Holdings (pvt) Ltd';

    let marker1 = new google.maps.Marker({
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      map: map,
      draggable: true,
      title: showroomTitle + '  No. 225, Castle Street, Colombo 08',
      icon: image,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(6.9110605, 79.8871024)
    });








   /*
      Google Map Infp Box DO NOT DELETE !!!

     google.maps.event.addListener(marker1, 'click', function() {
      infowindow.open(map, marker1);
    });*/

  }
}
