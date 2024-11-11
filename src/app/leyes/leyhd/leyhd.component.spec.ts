import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyhdComponent } from './leyhd.component';

describe('LeyhdComponent', () => {
  let component: LeyhdComponent;
  let fixture: ComponentFixture<LeyhdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyhdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
