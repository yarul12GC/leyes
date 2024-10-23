import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyfpiiComponent } from './leyfpii.component';

describe('LeyfpiiComponent', () => {
  let component: LeyfpiiComponent;
  let fixture: ComponentFixture<LeyfpiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyfpiiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyfpiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
