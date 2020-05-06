import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtslkBlockInnerComponent } from './tshirtslk-block-inner.component';

describe('TShirtslkBlockInnerComponent', () => {
  let component: TShirtslkBlockInnerComponent;
  let fixture: ComponentFixture<TShirtslkBlockInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TShirtslkBlockInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtslkBlockInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
