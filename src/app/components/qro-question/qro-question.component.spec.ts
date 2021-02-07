import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QroQuestionComponent } from './qro-question.component';

describe('QroQuestionComponent', () => {
  let component: QroQuestionComponent;
  let fixture: ComponentFixture<QroQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QroQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QroQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
