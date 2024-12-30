import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPackageComponent } from './success-package.component';

describe('SuccessPackageComponent', () => {
  let component: SuccessPackageComponent;
  let fixture: ComponentFixture<SuccessPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
