import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  slides = [
    {
      url: '/../assets/img/test.png'
    },
    {
      url: '/../assets/videos/sample/file_example_MP4_640_3MG.mp4'
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
