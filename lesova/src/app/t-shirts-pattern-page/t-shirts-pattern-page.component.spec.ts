import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtsPatternPageComponent } from './t-shirts-pattern-page.component';

describe('TShirtsPatternPageComponent', () => {
  let component: TShirtsPatternPageComponent;
  let fixture: ComponentFixture<TShirtsPatternPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TShirtsPatternPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtsPatternPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
