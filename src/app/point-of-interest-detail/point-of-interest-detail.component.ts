import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-point-of-interest-detail',
  templateUrl: './point-of-interest-detail.component.html',
  styleUrls: ['./point-of-interest-detail.component.scss']
})
export class PointOfInterestDetailComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) { }

  routingSubscription: Subscription;
  ngOnInit() {
    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params['id']);
      });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
