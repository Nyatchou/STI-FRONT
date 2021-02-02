import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainPresentGroupComponent } from './domain-present-group.component';

describe('DomainPresentGroupComponent', () => {
  let component: DomainPresentGroupComponent;
  let fixture: ComponentFixture<DomainPresentGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainPresentGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainPresentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
