import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgxGalleryModule } from 'ngx-gallery';
import { environment } from '../environments/environment';

import 'hammerjs';

import { DeliveryClientProvider } from './setup/delivery-client.provider';
import { GeolocationService } from './geolocation.service';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PointOfInterestDetailComponent } from './point-of-interest-detail/point-of-interest-detail.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'poi/:id', component: PointOfInterestDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PointOfInterestDetailComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,

    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),

    NgxGalleryModule,

    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    DeliveryClientProvider,
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
