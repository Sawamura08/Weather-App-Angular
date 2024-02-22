import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxTempInfoComponent } from './min-max-temp-info.component';

describe('MinMaxTempInfoComponent', () => {
  let component: MinMaxTempInfoComponent;
  let fixture: ComponentFixture<MinMaxTempInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinMaxTempInfoComponent]
    });
    fixture = TestBed.createComponent(MinMaxTempInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
