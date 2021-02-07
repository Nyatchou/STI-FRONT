import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotionFormComponent } from './add-notion-form.component';

describe('AddNotionFormComponent', () => {
  let component: AddNotionFormComponent;
  let fixture: ComponentFixture<AddNotionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNotionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
