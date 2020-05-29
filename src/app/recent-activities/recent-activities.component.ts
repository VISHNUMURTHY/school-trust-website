import { Component, OnInit } from '@angular/core';
import { RECENT_ACTIVITIES_LINKS } from '../constants/app.constants';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.scss']
})
export class RecentActivitiesComponent implements OnInit {

  navLinks: any;

  constructor() { }

  ngOnInit(): void {
    this.navLinks = RECENT_ACTIVITIES_LINKS;
  }

}
