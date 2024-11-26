import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUploadPostComponent } from './new-upload-post.component';

describe('NewUploadPostComponent', () => {
  let component: NewUploadPostComponent;
  let fixture: ComponentFixture<NewUploadPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUploadPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUploadPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
