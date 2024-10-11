import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyfdcComponent } from './leyfdc.component';

describe('LeyfdcComponent', () => {
  let component: LeyfdcComponent;
  let fixture: ComponentFixture<LeyfdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyfdcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyfdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
