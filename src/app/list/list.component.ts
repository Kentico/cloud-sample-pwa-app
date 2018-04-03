import { Component, OnInit } from '@angular/core';
import { DeliveryClient } from 'kentico-cloud-delivery-typescript-sdk/_bundles';

import { PointOfInterest } from '../models/point_of_interest';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private deliveryClient: DeliveryClient) { }

  ngOnInit() {
    this.deliveryClient
      .items<PointOfInterest>()
      .get()
      .subscribe(response => {
        console.log(response);
      });
  }

}
