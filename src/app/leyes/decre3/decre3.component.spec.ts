import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre3Component } from './decre3.component';

describe('Decre3Component', () => {
  let component: Decre3Component;
  let fixture: ComponentFixture<Decre3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
