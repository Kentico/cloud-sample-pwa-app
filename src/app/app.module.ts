import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import 'hammerjs';

import { DeliveryClientProvider } from './delivery-client.provider';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PointOfInterestCardComponent } from './point-of-interest-card/point-of-interest-card.component';
import { PointOfInterestDetailComponent } from './point-of-interest-detail/point-of-interest-detail.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'poi/:id', component: PointOfInterestDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PointOfInterestCardComponent,
    PointOfInterestDetailComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [DeliveryClientProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
