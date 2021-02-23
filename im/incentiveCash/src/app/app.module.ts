import { UserDetails } from './api/store.service';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Minima } from 'minima';
const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: () => {

        Minima.file.load('userDetails.txt', (res: any) => {
          if (res.success) {
            const data: UserDetails = JSON.parse(res.data);

            return data.loginData.access_token;

          }
        })

        return ''
      },
  }
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, JwtModule.forRoot(JWT_Module_Options)],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
