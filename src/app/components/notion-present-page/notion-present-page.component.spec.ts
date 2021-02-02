import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionPresentPageComponent } from './notion-present-page.component';

describe('NotionPresentPageComponent', () => {
  let component: NotionPresentPageComponent;
  let fixture: ComponentFixture<NotionPresentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotionPresentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotionPresentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
