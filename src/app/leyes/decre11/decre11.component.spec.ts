import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre11Component } from './decre11.component';

describe('Decre11Component', () => {
  let component: Decre11Component;
  let fixture: ComponentFixture<Decre11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
