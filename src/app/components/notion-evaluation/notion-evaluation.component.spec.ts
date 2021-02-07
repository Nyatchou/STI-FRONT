import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionEvaluationComponent } from './notion-evaluation.component';

describe('NotionEvaluationComponent', () => {
  let component: NotionEvaluationComponent;
  let fixture: ComponentFixture<NotionEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotionEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotionEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
