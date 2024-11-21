import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogVideosComponent } from './blog-videos.component';

describe('BlogVideosComponent', () => {
  let component: BlogVideosComponent;
  let fixture: ComponentFixture<BlogVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
