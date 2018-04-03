import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PointOfInterestCardComponent } from './point-of-interest-card/point-of-interest-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PointOfInterestCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
