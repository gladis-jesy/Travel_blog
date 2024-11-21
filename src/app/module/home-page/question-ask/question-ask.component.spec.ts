import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAskComponent } from './question-ask.component';

describe('QuestionAskComponent', () => {
  let component: QuestionAskComponent;
  let fixture: ComponentFixture<QuestionAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
