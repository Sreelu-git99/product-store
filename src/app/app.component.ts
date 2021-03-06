import { Component } from '@angular/core';
import { Router,  NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Event } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-store';
  showLoader = true;

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

}
