import { Component, OnInit } from '@angular/core';
import { Router,  NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showLoader: boolean = true;

  constructor(private router: Router) { 
    this.router.events.subscribe((routerEvent: Event) =>
    {
      if(routerEvent instanceof NavigationStart)
      {
        this.showLoader = true;
      }

      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError)
      {
        this.showLoader = false;
      }
    });
  }

  ngOnInit(): void {
  }

}
