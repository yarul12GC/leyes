import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeynavComponent } from './leynav.component';

describe('LeynavComponent', () => {
  let component: LeynavComponent;
  let fixture: ComponentFixture<LeynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeynavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
