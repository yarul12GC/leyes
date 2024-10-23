import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyarmasComponent } from './leyarmas.component';

describe('LeyarmasComponent', () => {
  let component: LeyarmasComponent;
  let fixture: ComponentFixture<LeyarmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyarmasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
