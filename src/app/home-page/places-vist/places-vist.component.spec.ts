import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesVistComponent } from './places-vist.component';

describe('PlacesVistComponent', () => {
  let component: PlacesVistComponent;
  let fixture: ComponentFixture<PlacesVistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesVistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesVistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
