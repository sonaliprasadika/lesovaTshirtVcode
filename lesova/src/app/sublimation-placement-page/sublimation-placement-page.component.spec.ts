import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublimationPlacementPageComponent } from './sublimation-placement-page.component';

describe('SublimationPlacementPageComponent', () => {
  let component: SublimationPlacementPageComponent;
  let fixture: ComponentFixture<SublimationPlacementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublimationPlacementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublimationPlacementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
