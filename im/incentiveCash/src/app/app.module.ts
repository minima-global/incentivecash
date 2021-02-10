<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> df64db7a39cc941816e755fb3ea5bd856089a67b
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
>>>>>>> df64db7a39cc941816e755fb3ea5bd856089a67b
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
