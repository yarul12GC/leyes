import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre5Component } from './decre5.component';

describe('Decre5Component', () => {
  let component: Decre5Component;
  let fixture: ComponentFixture<Decre5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
