import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyaspComponent } from './leyasp.component';

describe('LeyaspComponent', () => {
  let component: LeyaspComponent;
  let fixture: ComponentFixture<LeyaspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyaspComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
