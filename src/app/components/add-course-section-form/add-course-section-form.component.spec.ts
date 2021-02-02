import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseSectionFormComponent } from './add-course-section-form.component';

describe('AddCourseSectionFormComponent', () => {
  let component: AddCourseSectionFormComponent;
  let fixture: ComponentFixture<AddCourseSectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseSectionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
