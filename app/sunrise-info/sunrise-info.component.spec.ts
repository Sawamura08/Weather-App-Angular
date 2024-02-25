import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunriseInfoComponent } from './sunrise-info.component';

describe('SunriseInfoComponent', () => {
  let component: SunriseInfoComponent;
  let fixture: ComponentFixture<SunriseInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SunriseInfoComponent]
    });
    fixture = TestBed.createComponent(SunriseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
