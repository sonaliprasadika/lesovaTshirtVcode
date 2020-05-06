import { Component } from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
      }
      if (event instanceof NavigationEnd) {
        this.loadScripts();
      }
      if (event instanceof NavigationError) {
        console.log('Error Occurred !');
        console.log(event.error);
      }
    });
  }

  loadScripts() {
    console.log("updating plugins");
    const dynamicScripts = [
      '../assets/js/vendor/jquery-1.12.0.min.js',
      '../assets/js/bootstrap.min.js',
      '../assets/js/plugins.js',
      '../assets/js/slick.min.js',
      '../assets/js/owl.carousel.min.js',
      '../assets/js/waypoints.min.js',
      '../assets/js/main.js',
    ];

    // Keep app.min.js as the last script to load

    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
