import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelBannerComponent } from './travel-banner.component';

describe('TravelBannerComponent', () => {
  let component: TravelBannerComponent;
  let fixture: ComponentFixture<TravelBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
