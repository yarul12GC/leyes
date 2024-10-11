import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyfpaComponent } from './leyfpa.component';

describe('LeyfpaComponent', () => {
  let component: LeyfpaComponent;
  let fixture: ComponentFixture<LeyfpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyfpaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyfpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
