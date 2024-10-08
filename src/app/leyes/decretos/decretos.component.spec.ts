import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecretosComponent } from './decretos.component';

describe('DecretosComponent', () => {
  let component: DecretosComponent;
  let fixture: ComponentFixture<DecretosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecretosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecretosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
