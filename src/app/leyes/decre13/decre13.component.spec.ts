import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre13Component } from './decre13.component';

describe('Decre13Component', () => {
  let component: Decre13Component;
  let fixture: ComponentFixture<Decre13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
