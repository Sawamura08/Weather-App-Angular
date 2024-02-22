import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureInfoComponent } from './temperature-info.component';

describe('TemperatureInfoComponent', () => {
  let component: TemperatureInfoComponent;
  let fixture: ComponentFixture<TemperatureInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureInfoComponent]
    });
    fixture = TestBed.createComponent(TemperatureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
