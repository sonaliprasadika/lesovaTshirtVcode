import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublimationDesignPageComponent } from './sublimation-design-page.component';

describe('SublimationDesignPageComponent', () => {
  let component: SublimationDesignPageComponent;
  let fixture: ComponentFixture<SublimationDesignPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublimationDesignPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublimationDesignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
