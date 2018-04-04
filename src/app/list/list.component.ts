import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeliveryClient, ItemResponses } from 'kentico-cloud-delivery-typescript-sdk/_bundles';
import { Subscription } from 'rxjs/Subscription';

import { PointOfInterest } from '../models/point_of_interest';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription;
  pointsOfInterest: [PointOfInterest];

  constructor(private deliveryClient: DeliveryClient) { }

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
