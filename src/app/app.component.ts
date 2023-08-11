import { Component } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MediCare';


  loading: boolean = false;
  constructor(private router: Router) { }
  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading = true;
        console.log("Loading started");
      }
      else if (event instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          this.loading = false;
          console.log("Loading ended");

        }, 2800);
      }
    });
  }

  // https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click
  onActivate(event: Event) { // to scroll to top everytime when entering a component
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
