import { NavigationStart, Router } from '@angular/router';
import { MinimaService } from './api/minima.service';
import { Component } from '@angular/core';
import { Minima } from 'minima';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  subscription: any;
  browserRefresh: any;
  constructor(private minima: MinimaService, private router: Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.browserRefresh = !router.navigated;
        if (this.browserRefresh) {
          localStorage.removeItem('isLogged');
        }
      }
    });
  }
}
