import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DeliveryClient } from 'kentico-cloud-delivery-typescript-sdk';

import { PointOfInterest } from '../models/point_of_interest';

@Component({
  selector: 'app-point-of-interest-detail',
  templateUrl: './point-of-interest-detail.component.html',
  styleUrls: ['./point-of-interest-detail.component.scss']
})
export class PointOfInterestDetailComponent implements OnInit, OnDestroy {
  routingSubscription: Subscription;
  dataSubscription: Subscription;
  pointOfInterest: PointOfInterest;

  constructor(
    private route: ActivatedRoute,
    private deliveryClient: DeliveryClient
  ) { }

  ngOnInit() {
    this.routingSubscription =
      this.route.params.subscribe(params => {
        if (params['id']) {
          this.dataSubscription = this.deliveryClient
            .items<PointOfInterest>()
            .equalsFilter('elements.url_slug', params['id'])
            .get()
            .subscribe((response) => {
              console.log(response.firstItem);
              this.pointOfInterest = response.firstItem;
            });

        }
      });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
