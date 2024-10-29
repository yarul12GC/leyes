import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre6Component } from './decre6.component';

describe('Decre6Component', () => {
  let component: Decre6Component;
  let fixture: ComponentFixture<Decre6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
