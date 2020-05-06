import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedClothingBlockComponent } from './customized-clothing-block.component';

describe('CustomizedClothingBlockComponent', () => {
  let component: CustomizedClothingBlockComponent;
  let fixture: ComponentFixture<CustomizedClothingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedClothingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedClothingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
