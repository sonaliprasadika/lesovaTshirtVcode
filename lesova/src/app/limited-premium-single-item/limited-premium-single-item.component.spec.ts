import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedPremiumSingleItemComponent } from './limited-premium-single-item.component';

describe('LimitedPremiumSingleItemComponent', () => {
  let component: LimitedPremiumSingleItemComponent;
  let fixture: ComponentFixture<LimitedPremiumSingleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitedPremiumSingleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedPremiumSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
