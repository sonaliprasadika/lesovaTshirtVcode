import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
declare var $;

@Component({
  selector: 'app-tshirtslk-block-inner',
  templateUrl: './tshirtslk-block-inner.component.html',
  styleUrls: ['./tshirtslk-block-inner.component.css']
})
export class TShirtslkBlockInnerComponent implements OnInit, AfterViewInit {

  @Input() public dataCollection;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {




  }

}
