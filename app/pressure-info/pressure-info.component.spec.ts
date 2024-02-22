import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureInfoComponent } from './pressure-info.component';

describe('PressureInfoComponent', () => {
  let component: PressureInfoComponent;
  let fixture: ComponentFixture<PressureInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PressureInfoComponent]
    });
    fixture = TestBed.createComponent(PressureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
