import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityInfoComponent } from './humidity-info.component';

describe('HumidityInfoComponent', () => {
  let component: HumidityInfoComponent;
  let fixture: ComponentFixture<HumidityInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumidityInfoComponent]
    });
    fixture = TestBed.createComponent(HumidityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
