import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointOfInterestDetailComponent } from './point-of-interest-detail.component';

describe('PointOfInterestDetailComponent', () => {
  let component: PointOfInterestDetailComponent;
  let fixture: ComponentFixture<PointOfInterestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointOfInterestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointOfInterestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
