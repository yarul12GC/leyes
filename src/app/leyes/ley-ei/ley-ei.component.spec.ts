import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyEIComponent } from './ley-ei.component';

describe('LeyEIComponent', () => {
  let component: LeyEIComponent;
  let fixture: ComponentFixture<LeyEIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyEIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyEIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
