import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyMYZAComponent } from './ley-myza.component';

describe('LeyMYZAComponent', () => {
  let component: LeyMYZAComponent;
  let fixture: ComponentFixture<LeyMYZAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyMYZAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyMYZAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
