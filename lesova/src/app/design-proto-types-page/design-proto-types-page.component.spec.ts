import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignProtoTypesPageComponent } from './design-proto-types-page.component';

describe('DesignProtoTypesPageComponent', () => {
  let component: DesignProtoTypesPageComponent;
  let fixture: ComponentFixture<DesignProtoTypesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignProtoTypesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignProtoTypesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
