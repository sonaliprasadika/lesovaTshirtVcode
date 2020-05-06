import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedPremiumComponent } from './limited-premium.component';

describe('LimitedPremiumComponent', () => {
  let component: LimitedPremiumComponent;
  let fixture: ComponentFixture<LimitedPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitedPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
