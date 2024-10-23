import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeysvComponent } from './leysv.component';

describe('LeysvComponent', () => {
  let component: LeysvComponent;
  let fixture: ComponentFixture<LeysvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeysvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeysvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
