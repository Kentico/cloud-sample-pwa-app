import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DeliveryClient, ItemResponses } from 'kentico-cloud-delivery-typescript-sdk/_bundles';

import { PointOfInterest } from '../models/point_of_interest';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription;
  pointsOfInterest: PointOfInterest[];

  constructor(
    private deliveryClient: DeliveryClient,
    private router: Router
    ) { }

  showPointOfInterest(pointOfInterest: PointOfInterest) {
    this.router.navigate(['/poi', pointOfInterest.urlSlug.value]);
  }

  ngOnInit() {
    this.dataSubscription = this.deliveryClient
      .items<PointOfInterest>()
      .get()
      .subscribe((response: ItemResponses.DeliveryItemListingResponse<PointOfInterest>) => {
        this.pointsOfInterest = response.items;
      });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
