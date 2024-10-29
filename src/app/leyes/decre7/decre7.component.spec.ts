import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre7Component } from './decre7.component';

describe('Decre7Component', () => {
  let component: Decre7Component;
  let fixture: ComponentFixture<Decre7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
