import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtslkComponent } from './tshirtslk.component';

describe('TshirtslkComponent', () => {
  let component: TshirtslkComponent;
  let fixture: ComponentFixture<TshirtslkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TshirtslkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtslkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
