import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyatComponent } from './leyat.component';

describe('LeyatComponent', () => {
  let component: LeyatComponent;
  let fixture: ComponentFixture<LeyatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
