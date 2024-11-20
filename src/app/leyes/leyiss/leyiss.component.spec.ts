import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyissComponent } from './leyiss.component';

describe('LeyissComponent', () => {
  let component: LeyissComponent;
  let fixture: ComponentFixture<LeyissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyissComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
