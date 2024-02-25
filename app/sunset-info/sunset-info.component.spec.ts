import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunsetInfoComponent } from './sunset-info.component';

describe('SunsetInfoComponent', () => {
  let component: SunsetInfoComponent;
  let fixture: ComponentFixture<SunsetInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SunsetInfoComponent]
    });
    fixture = TestBed.createComponent(SunsetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
