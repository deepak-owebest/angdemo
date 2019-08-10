import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prime';
  currentUser:any;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) { 
	  
      }
      if(event instanceof NavigationEnd) {
		  
      }
      if(event instanceof NavigationError) { 
        
      }
    });
  }

  ngOnInit() {

  }
  loadScriptOnRoute(url) {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
