import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerWearComponent } from './designer-wear.component';

describe('DesignerWearComponent', () => {
  let component: DesignerWearComponent;
  let fixture: ComponentFixture<DesignerWearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerWearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
