import { Component, OnInit, AfterContentInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as d3 from 'd3';
import { PieChartComponent } from './pie-chart.component';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent extends PieChartComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') private chartContainer: ElementRef;

  @Input('data')
  data: number[] = [50, 50];

  @Input('lables')
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
  colorSchema: string[] = ['#4daa4a', '#dd7eb8'];

  constructor() {
    super();
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    let element = this.chartContainer.nativeElement;
    if (this.donut)
      new PieChartComponent().drawDonutChart(this.data, element, this.startAngle, this.endAngle, this.innerRadius, this.colorSchema);
  }
}
