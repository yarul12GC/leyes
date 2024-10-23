import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyiaComponent } from './leyia.component';

describe('LeyiaComponent', () => {
  let component: LeyiaComponent;
  let fixture: ComponentFixture<LeyiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
