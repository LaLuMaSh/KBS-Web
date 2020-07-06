import { Component, Input, OnInit } from '@angular/core';
import { Screening } from '../../model/Model';

@Component({
  selector: 'app-screening-card',
  templateUrl: './screening-card.component.html',
  styleUrls: ['./screening-card.component.css']
})
export class ScreeningCardComponent implements OnInit {
  @Input() public screening: Screening;

  constructor() {
  }

  ngOnInit() {
  }

}
