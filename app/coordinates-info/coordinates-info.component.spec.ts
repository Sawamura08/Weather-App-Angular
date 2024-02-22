import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesInfoComponent } from './coordinates-info.component';

describe('CoordinatesInfoComponent', () => {
  let component: CoordinatesInfoComponent;
  let fixture: ComponentFixture<CoordinatesInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatesInfoComponent]
    });
    fixture = TestBed.createComponent(CoordinatesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
