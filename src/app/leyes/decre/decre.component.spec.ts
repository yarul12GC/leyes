import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreComponent } from './decre.component';

describe('DecreComponent', () => {
  let component: DecreComponent;
  let fixture: ComponentFixture<DecreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
