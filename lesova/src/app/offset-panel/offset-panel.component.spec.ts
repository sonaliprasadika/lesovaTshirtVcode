import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetPanelComponent } from './offset-panel.component';

describe('OffsetPanelComponent', () => {
  let component: OffsetPanelComponent;
  let fixture: ComponentFixture<OffsetPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffsetPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffsetPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
