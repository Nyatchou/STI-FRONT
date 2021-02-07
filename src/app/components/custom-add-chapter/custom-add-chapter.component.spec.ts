import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAddChapterComponent } from './custom-add-chapter.component';

describe('CustomAddChapterComponent', () => {
  let component: CustomAddChapterComponent;
  let fixture: ComponentFixture<CustomAddChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAddChapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAddChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
