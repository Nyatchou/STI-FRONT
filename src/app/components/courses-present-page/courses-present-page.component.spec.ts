import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPresentPageComponent } from './courses-present-page.component';

describe('CoursesPresentPageComponent', () => {
  let component: CoursesPresentPageComponent;
  let fixture: ComponentFixture<CoursesPresentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPresentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPresentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
