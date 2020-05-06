import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-tshirtslk',
  templateUrl: './tshirtslk.component.html',
  styleUrls: ['./tshirtslk.component.css']
})
export class TshirtslkComponent implements OnInit {

  imageSources = ['assets/img/products/set1.png', 'assets/img/products/set2.png', 'assets/img/products/set3.png',
    'assets/img/products/set4.png'];

  constructor() { }

  ngOnInit() {
    $('.flip').hover(function() {
      $(this).find('.card').toggleClass('flipped');

    });
  }

}
