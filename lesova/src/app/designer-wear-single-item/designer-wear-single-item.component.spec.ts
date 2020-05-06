import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerWearSingleItemComponent } from './designer-wear-single-item.component';

describe('DesignerWearSingleItemComponent', () => {
  let component: DesignerWearSingleItemComponent;
  let fixture: ComponentFixture<DesignerWearSingleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerWearSingleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerWearSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
