import { Router } from '@angular/router';
import { MinimaService } from './api/minima.service';
import { Component } from '@angular/core';
import { Minima } from 'minima';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private minima: MinimaService, private route: Router) {
    Minima.file.load('userDetails.txt', (res: any) => {
      if (res.success) {
        const data = JSON.parse(res.data);
        // console.log(data);
        const referenceID = data.refID; 
        this.route.navigate(['/cash', referenceID]);
      }
    });
  }
}
