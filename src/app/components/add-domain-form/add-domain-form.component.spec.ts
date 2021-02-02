import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDomainFormComponent } from './add-domain-form.component';

describe('AddDomainFormComponent', () => {
  let component: AddDomainFormComponent;
  let fixture: ComponentFixture<AddDomainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDomainFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDomainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
