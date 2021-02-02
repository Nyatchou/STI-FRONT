import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePresentComponent } from './course-present.component';

describe('CoursePresentComponent', () => {
  let component: CoursePresentComponent;
  let fixture: ComponentFixture<CoursePresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursePresentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
