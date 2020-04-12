import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    d3.select('div');
  }

}
