import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedPremiumBlockComponent } from './limited-premium-block.component';

describe('LimitedPremiumBlockComponent', () => {
  let component: LimitedPremiumBlockComponent;
  let fixture: ComponentFixture<LimitedPremiumBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitedPremiumBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedPremiumBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
