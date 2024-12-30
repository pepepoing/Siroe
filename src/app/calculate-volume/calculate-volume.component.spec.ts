import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateVolumeComponent } from './calculate-volume.component';

describe('CalculateVolumeComponent', () => {
  let component: CalculateVolumeComponent;
  let fixture: ComponentFixture<CalculateVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateVolumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
