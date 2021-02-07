import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmQuestionComponent } from './qcm-question.component';

describe('QcmQuestionComponent', () => {
  let component: QcmQuestionComponent;
  let fixture: ComponentFixture<QcmQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QcmQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
