import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DonationsTrack } from '../common/interfaces/donations-track';

@Component({
  selector: 'app-donations-track',
  templateUrl: './donations-track.component.html',
  styleUrls: ['./donations-track.component.scss']
})
export class DonationsTrackComponent implements OnInit {

  dataSource: MatTableDataSource<DonationsTrack>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['slNo', 'date', 'amount', 'download'];
  data = [{
    'slNo': 1,
    'date': new Date(),
    'amount': 1000,
    'download': 'sdfddddddddddd'
  }]

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  downloadFile(date: Date, amount: number){
    console.log(date, amount);
  }

}
