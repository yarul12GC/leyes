import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeypuComponent } from './leypu.component';

describe('LeypuComponent', () => {
  let component: LeypuComponent;
  let fixture: ComponentFixture<LeypuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeypuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeypuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
