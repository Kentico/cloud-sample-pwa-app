import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointOfInterestCardComponent } from './point-of-interest-card.component';

describe('PointOfInterestCardComponent', () => {
  let component: PointOfInterestCardComponent;
  let fixture: ComponentFixture<PointOfInterestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointOfInterestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointOfInterestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
