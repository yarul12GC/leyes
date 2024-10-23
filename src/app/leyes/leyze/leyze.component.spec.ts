import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyzeComponent } from './leyze.component';

describe('LeyzeComponent', () => {
  let component: LeyzeComponent;
  let fixture: ComponentFixture<LeyzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyzeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
