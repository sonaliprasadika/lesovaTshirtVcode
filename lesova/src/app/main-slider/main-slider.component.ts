import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {

  imageSources = ['assets/img/mainscreen/Untitled-4.jpg','assets/img/products/set1.png', 'assets/img/products/set2.png', 'assets/img/products/set3.png',
    'assets/img/products/set4.png'];

  constructor() { }

  ngOnInit() {
  }

}
