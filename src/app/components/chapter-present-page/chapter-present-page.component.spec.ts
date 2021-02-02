import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterPresentPageComponent } from './chapter-present-page.component';

describe('ChapterPresentPageComponent', () => {
  let component: ChapterPresentPageComponent;
  let fixture: ComponentFixture<ChapterPresentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterPresentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterPresentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
