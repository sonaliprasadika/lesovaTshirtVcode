import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtslkBlockComponent } from './t-shirtslk-block.component';

describe('TShirtslkBlockComponent', () => {
  let component: TShirtslkBlockComponent;
  let fixture: ComponentFixture<TShirtslkBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TShirtslkBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtslkBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
