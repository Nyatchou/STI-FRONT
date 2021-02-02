import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainPresentItemComponent } from './domain-present-item.component';

describe('DomainPresentItemComponent', () => {
  let component: DomainPresentItemComponent;
  let fixture: ComponentFixture<DomainPresentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainPresentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainPresentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
