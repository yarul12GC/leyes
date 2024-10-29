import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre1Component } from './decre1.component';

describe('Decre1Component', () => {
  let component: Decre1Component;
  let fixture: ComponentFixture<Decre1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
