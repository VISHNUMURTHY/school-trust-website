import { Component, OnInit, AfterContentInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as d3 from 'd3';
import { PieChartComponent } from './pie-chart.component';
import { ChartData } from '../common/interfaces/charts.config';
import { SAMPLE_DATA } from './charts.sample.data';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent extends PieChartComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') private chartContainer: ElementRef;

  @Input('data')
  data: ChartData[] = SAMPLE_DATA;

  @Input('labels')
  labels: string[];

  @Input('chartType')
  chartType: string;

  @Input('donut')
  donut: boolean = true;

  @Input('startAngle')
  startAngle: number = 145;

  @Input('endAngle')
  endAngle: number = 145;

  @Input('innerRadius')
  innerRadius: number = 52;

  @Input("colorSchema")
  colorSchema: string[] = ['blue', 'blue'];

  @Input("pattern")
  patten: string;

  constructor() {
    super();
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    let element = this.chartContainer.nativeElement;
    let svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight || 200);
    svg.append("defs");
    if (this.donut && this.chartType === 'donut') {
      let total = 0;
      this.data.forEach(el => {
        total += el.value;
      });
      total = (this.data[0].value / total) * 100;
      let label = '' + total.toFixed(1) + '%';
      let subLabel = 'Profile Completed';
      new PieChartComponent().drawDonutChart(this.data, svg, this.startAngle, this.endAngle, this.innerRadius, this.colorSchema, label, subLabel);
    }
  }
}
