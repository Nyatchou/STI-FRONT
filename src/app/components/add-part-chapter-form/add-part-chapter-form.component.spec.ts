import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartChapterFormComponent } from './add-part-chapter-form.component';

describe('AddPartChapterFormComponent', () => {
  let component: AddPartChapterFormComponent;
  let fixture: ComponentFixture<AddPartChapterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPartChapterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartChapterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
