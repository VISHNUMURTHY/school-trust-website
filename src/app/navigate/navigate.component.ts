import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { USER_NAVIGATION_LINKS } from '../constants/app.constants';
import { ActivatedRouteSnapshot, ActivatedRoute, Router, NavigationEnd, RouterState } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  navigationLinks = USER_NAVIGATION_LINKS;
  headerTitle: string;

  constructor(private breakpointObserver: BreakpointObserver, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

  getHeaderTitle(): string {
    let url = this.router.url.split("/")[2];
    this.navigationLinks.forEach(el => {
      if (el.link === url) {
        this.headerTitle = el.title;
      }
    });
    return this.headerTitle;
  }
}
